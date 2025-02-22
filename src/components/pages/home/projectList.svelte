<script>
	const projectList = [
		{
			name: 'Your AI Playground',
			link: 'https://your-ai-playground.vercel.app/',
			description:
				'A full-stack Next.js application for generating learning quizzes, interactive stories, cooking ideas, and more with real-time validation, animations, and multilingual support.'
		}
		// {
		// 	name: 'Jobseeker Services',
		// 	link: 'https://jobseeker.services/',
		// 	description:
		// 		'Jobseeker Service is a website that provide high quality service to help implement strategic action to optimize the company efficiently, by being the solution to all business problems.'
		// },
		// {
		// 	name: 'Jobseeker Software',
		// 	link: 'https://jobseeker.software/',
		// 	description:
		// 		'The custom web portfolios, each meticulously crafted to reflect client visions, personalized touches, and surpassing expectations. The web portfolios are built using NextJs, ReactJs or SvelteJs based on client request and TailwindCSS for responsive design and stunning styling.'
		// }
	];
</script>

<span class="text-console text-inside-project bg-white px-2 py-1 my-4 font-semibold"
	>Project List ↲
</span>

{#each projectList as project, i}
	<div class="flex flex-col text-console text-white border-l ps-2 my-4 border-white" key={i}>
		<div class="flex flex-col lg:flex-row gap-2 lg:items-center">
			<span class="text-tag-project">{'<h1 class="text-bold">'} </span>
			<a
				href={project.link}
				target="__blank"
				class="text-inside-project bg-white font-semibold p-1 text-background-2 w-fit"
				>{project.name}</a
			>
			<span class="text-tag-project">{'</h1>'} </span>
		</div>
		<div class="flex flex-col gap-2 text-white/70">
			<span class="text-tag-project">{'<!--'} </span>
			<span class="text-tag-project">{project.description}</span>
			<span class="text-tag-project">{'-->'} </span>
		</div>
		<div class="flex flex-col lg:flex-row gap-2 lg:items-center">
			<span class="text-tag-project">{`<a href="${project.link}" class="text-bold">`} </span>
			<a
				href={project.link}
				target="__blank"
				class="text-inside-project bg-white font-semibold p-1 text-background-2 w-fit"
				>Go To Website ⬈</a
			>
			<span class="text-tag-project">{'</a>'} </span>
		</div>
	</div>

	{#if i < projectList.length - 1}
		<span class="text-console text-white"> ------------ </span>
	{/if}
{/each}

<span class="text-console text-inside-project bg-white px-2 py-1 my-4 font-semibold"
	>End List ↲
</span>
