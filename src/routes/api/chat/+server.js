import { json } from '@sveltejs/kit';
import Groq from 'groq-sdk';
import { GROQ_API_KEY, GROQ_MODEL } from '$env/static/private';
import { personalInfo, aboutData, projects } from '$lib/portfolioData.js';

const apiKey = GROQ_API_KEY?.trim();

if (!apiKey) {
	console.error('Missing GROQ_API_KEY env variable.');
}

const groq = new Groq({
	apiKey: apiKey || ''
});

const MAX_CONTEXT_CHARS = 3500;
const MAX_INPUT_CHARS = 1000;
const MAX_RELEVANT_ITEMS = 4;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const MAX_CONCURRENT_REQUESTS = 2;

const clients = new Map();

function getRateLimitState(clientAddress, now) {
	for (const [address, state] of clients) {
		state.timestamps = state.timestamps.filter(
			(timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
		);

		if (state.inFlight === 0 && state.timestamps.length === 0) {
			clients.delete(address);
		}
	}

	const existing = clients.get(clientAddress) ?? { timestamps: [], inFlight: 0 };
	const state = { ...existing };
	clients.set(clientAddress, state);

	return state;
}

function releaseClientRequest(clientAddress) {
	const state = clients.get(clientAddress);
	if (!state) return;

	state.inFlight = Math.max(0, state.inFlight - 1);
	if (state.inFlight === 0 && state.timestamps.length === 0) {
		clients.delete(clientAddress);
	}
}

/**
 * Clean and truncate text so the context stays compact.
 */
function truncateText(text, maxLength = 220) {
	if (!text) return '';

	const clean = String(text).replace(/\s+/g, ' ').trim();

	return clean.length <= maxLength ? clean : `${clean.slice(0, maxLength - 1).trim()}…`;
}

/**
 * Build a compact fallback context.
 *
 * This is used when the retriever cannot find
 * anything strongly related to the user's question.
 */
function buildPortfolioContext() {
	const compact = {
		name: personalInfo.fullName,
		role: personalInfo.role,
		location: personalInfo.location,
		contact: {
			email: personalInfo.email,
			phone: personalInfo.phone,
			whatsappUrl: personalInfo.whatsappUrl,
			linkedinUrl: personalInfo.linkedinUrl,
			githubUrl: personalInfo.githubUrl,
			resumeUrl: personalInfo.resumeUrl
		},

		about: truncateText(aboutData.profile, 260),

		skills: aboutData.skills,

		experience: aboutData.experience.map((exp) => ({
			company: exp.name,
			role: exp.role,
			duration: exp.duration,
			highlights: exp.description.slice(0, 2).map((line) => truncateText(line, 120))
		})),

		projects: projects.map((project) => ({
			name: project.name,
			type: project.filter,
			tech: project.tools.slice(0, 6),
			summary: truncateText(project.description, 170)
		}))
	};

	return limitContext(JSON.stringify(compact, null, 2));
}

/**
 * Convert the portfolio data into searchable knowledge chunks.
 *
 * Each experience/project becomes an independent item,
 * so we don't have to send the entire portfolio to Groq.
 */
function buildKnowledge() {
	return [
		{
			type: 'profile',
			keywords: [
				'profile',
				'about',
				'developer',
				'frontend',
				'fullstack',
				'full-stack',
				'akbar',
				'aziz',
				'personal'
			],
			content: `
Name: ${personalInfo.fullName}
Role: ${personalInfo.role}
Location: ${personalInfo.location}
Contact:
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- WhatsApp: ${personalInfo.whatsappUrl}
- LinkedIn: ${personalInfo.linkedinUrl}
- GitHub: ${personalInfo.githubUrl}
- Resume: ${personalInfo.resumeUrl}

About:
${aboutData.profile}
`
		},

		{
			type: 'skills',
			keywords: [
				'skill',
				'skills',
				'technology',
				'technologies',
				'tech',
				'stack',
				'tech stack',
				'tools',
				'language',
				'programming'
			],
			content: `
Skills:
${aboutData.skills.join('\n')}
`
		},

		...aboutData.experience.map((experience) => ({
			type: 'experience',

			keywords: [experience.name, experience.role, experience.duration, ...experience.description],

			content: `
Company: ${experience.name}
Role: ${experience.role}
Duration: ${experience.duration}

Experience:
${experience.description.join('\n')}
`
		})),

		...projects.map((project) => ({
			type: 'project',

			keywords: [project.name, project.filter, project.description, ...project.tools],

			content: `
Project: ${project.name}
Type: ${project.filter}

Description:
${project.description}

Technologies:
${project.tools.join(', ')}
`
		}))
	];
}

/**
 * Normalize a query into searchable words.
 *
 * Example:
 *
 * "What experience does Akbar have with Svelte?"
 *
 * becomes roughly:
 *
 * ["what", "experience", "does", "akbar", "have", "with", "svelte"]
 */
function tokenize(text) {
	return text
		.toLowerCase()
		.split(/[^a-z0-9+#.]+/)
		.map((word) => word.trim())
		.filter((word) => word.length >= 3);
}

/**
 * Retrieve the most relevant knowledge chunks.
 *
 * This is intentionally simple for now.
 * Later, this function can be replaced by
 * embedding/vector retrieval without changing
 * the rest of the chatbot architecture.
 */
function retrieveRelevantKnowledge(query) {
	const queryWords = tokenize(query);

	const knowledge = buildKnowledge();

	return knowledge
		.map((item) => {
			const searchableText = [item.type, ...item.keywords, item.content].join(' ').toLowerCase();

			let score = 0;

			for (const word of queryWords) {
				if (searchableText.includes(word)) {
					score += 1;
				}
			}

			/**
			 * Give a little extra weight to exact matches
			 * in the item's title/keywords.
			 */
			for (const keyword of item.keywords) {
				const normalizedKeyword = String(keyword).toLowerCase().trim();

				if (normalizedKeyword.length >= 3 && query.toLowerCase().includes(normalizedKeyword)) {
					score += 2;
				}
			}

			return {
				...item,
				score
			};
		})
		.filter((item) => item.score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, MAX_RELEVANT_ITEMS);
}

/**
 * Keep the final context within a predictable size.
 */
function limitContext(text) {
	if (text.length <= MAX_CONTEXT_CHARS) {
		return text;
	}

	return `${text.slice(0, MAX_CONTEXT_CHARS - 1).trim()}…`;
}

export async function POST(event) {
	const { request } = event;
	let payload;

	/**
	 * Parse request body.
	 */
	try {
		payload = await request.json();
	} catch {
		return json(
			{
				message: 'Request body must be valid JSON.'
			},
			{
				status: 400
			}
		);
	}

	const { message } = payload;

	/**
	 * Validate user message.
	 */
	if (!message || typeof message !== 'string' || !message.trim()) {
		return json(
			{
				message: 'A message is required.'
			},
			{
				status: 400
			}
		);
	}

	const trimmedMessage = message.trim();

	/**
	 * Prevent unnecessarily huge user input.
	 */
	if (trimmedMessage.length > MAX_INPUT_CHARS) {
		return json(
			{
				message: `Your message is too long. Please keep it under ${MAX_INPUT_CHARS} characters.`
			},
			{
				status: 400
			}
		);
	}

	/**
	 * Make sure Groq is configured.
	 */
	if (!apiKey) {
		return json(
			{
				message: 'AI service is not configured. Add GROQ_API_KEY to your environment.'
			},
			{
				status: 500
			}
		);
	}

	const clientAddress = event.getClientAddress();
	const now = Date.now();
	const rateLimitState = getRateLimitState(clientAddress, now);
	const oldestRequest = rateLimitState.timestamps[0];
	const retryAfter = oldestRequest
		? Math.max(1, Math.ceil((oldestRequest + RATE_LIMIT_WINDOW_MS - now) / 1000))
		: 1;

	if (
		rateLimitState.timestamps.length >= MAX_REQUESTS_PER_WINDOW ||
		rateLimitState.inFlight >= MAX_CONCURRENT_REQUESTS
	) {
		return json(
			{
				message: 'Too many requests. Please try again later.'
			},
			{
				status: 429,
				headers: {
					'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
					'X-RateLimit-Remaining': '0',
					'Retry-After': String(retryAfter)
				}
			}
		);
	}

	rateLimitState.timestamps.push(now);
	rateLimitState.inFlight += 1;

	/**
	 * Retrieve only the knowledge relevant to the question.
	 */
	const relevantKnowledge = retrieveRelevantKnowledge(trimmedMessage);

	/**
	 * If retrieval finds relevant information,
	 * use it. Otherwise fall back to the compact
	 * portfolio context.
	 */
	const rawContext =
		relevantKnowledge.length > 0
			? relevantKnowledge.map((item) => item.content).join('\n\n')
			: buildPortfolioContext();

	const context = limitContext(rawContext);

	try {
		const completion = await groq.chat.completions.create({
			model: GROQ_MODEL,

			max_tokens: 200,

			temperature: 0.3,

			messages: [
				{
					role: 'system',

					content: `
You are the AI assistant for Aziz Akbar Ashshiddiq's personal portfolio.

Your role is to help visitors learn about Akbar, his professional
background, experience, projects, technical skills, education,
and publicly available contact information.

You should feel like a friendly and knowledgeable representative
of Akbar's portfolio — helpful, natural, and conversational rather
than overly formal or robotic.

TONE AND COMMUNICATION:

- Match the user's tone naturally.
- Use a professional tone for recruiters, clients, and career-related questions.
- Be relaxed and friendly when the user is casual.
- Keep simple questions simple and avoid unnecessary explanations.
- Don't sound like a corporate support bot.
- Light humor is okay when it fits the conversation, but don't force it.
- Be concise by default, but provide more detail when the user asks for it.
- Avoid repetitive disclaimers.

KNOWLEDGE AND ACCURACY:

- Use the provided portfolio context as the source of truth about Akbar.
- Do not invent professional experience, projects, skills, achievements,
  education, or personal details.
- Do not make assumptions about Akbar's private life.
- If the requested information is not available in the context,
  say that you don't have that information and, when appropriate,
  suggest asking Akbar directly.
- Never present assumptions or guesses as facts.

CONTACT INFORMATION:

- When users ask how to contact Akbar, recommend the most relevant
  publicly available contact methods from the portfolio context.
- For professional discussions, prioritize email and LinkedIn.
- WhatsApp can be offered when appropriate.
- Do not expose contact information that is not present in the context.
- Do not list every available contact option unless the user asks for them all.

SCOPE:

- Focus on questions related to Akbar and his portfolio.
- If the user asks something unrelated, politely explain that you are
  Akbar's portfolio assistant and redirect the conversation when appropriate.

PORTFOLIO CONTEXT:

${context}
`
				},

				{
					role: 'user',
					content: trimmedMessage
				}
			]
		});

		return json({
			message: completion.choices[0]?.message?.content ?? ''
		});
	} catch (error) {
		console.error('Groq request failed:', error);

		/**
		 * Don't expose internal Groq errors to public users.
		 * Keep the details in server logs instead.
		 */
		return json(
			{
				message: 'Sorry, I couldn’t process that request right now.',
				code: 'groq_error'
			},
			{
				status: error?.status || 500
			}
		);
	} finally {
		releaseClientRequest(clientAddress);
	}
}
