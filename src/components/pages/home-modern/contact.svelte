<script>
	import Icon from '@iconify/svelte';
	import { personalInfo } from '$lib/portfolioData';

	const toggleHero = () => {
		const hero = document.getElementById('hero');
		hero.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section
	id="contact"
	class="text-modern bg-gradient-to-b from-[#0e1745] via-background-1 to-[#080e2e] min-h-screen relative overflow-hidden flex items-center"
>
	<div class="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
	<div class="absolute -bottom-20 -right-16 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl"></div>

	<div
		class="px-container py-12 md:py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start text-white"
	>
		<div class="lg:col-span-5 space-y-5">
			<p class="uppercase tracking-[0.2em] text-xs md:text-sm text-white/60">Contact</p>
			<h2 class="text-modern-display text-4xl md:text-6xl font-semibold leading-tight">
				Let's Connect
			</h2>
			<p class="text-white/80 max-w-md leading-relaxed">
				Open for collaboration, product discussions, and full-stack opportunities.
			</p>

			<div
				class="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-2 text-white/85"
			>
				<Icon icon="solar:map-point-wave-linear" class="w-5 h-5" />
				<span class="text-sm md:text-base">{personalInfo.location}</span>
			</div>
		</div>

		<div class="lg:col-span-7 w-full">
			<div
				class="rounded-3xl bg-white/8 border border-white/15 p-4 md:p-6 backdrop-blur-xl shadow-2xl space-y-3"
			>
				<a
					href={`mailto:${personalInfo.email}`}
					target="__blank"
					class="group flex items-center justify-between gap-4 rounded-2xl bg-white/95 text-background-2 px-4 md:px-5 py-4 hover:bg-white transition-colors"
				>
					<div class="flex items-center gap-3">
						<span
							class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white"
						>
							<Icon icon="solar:letter-linear" class="w-5 h-5" />
						</span>
						<div>
							<p class="text-xs uppercase tracking-wider text-background-2/60">Email</p>
							<p class="text-sm md:text-base font-semibold">{personalInfo.email}</p>
						</div>
					</div>
					<Icon
						icon="solar:arrow-up-right-linear"
						class="w-5 h-5 text-background-2/70 group-hover:text-background-2"
					/>
				</a>

				<a
					href={personalInfo.linkedinUrl}
					target="__blank"
					class="group flex items-center justify-between gap-4 rounded-2xl bg-white/95 text-background-2 px-4 md:px-5 py-4 hover:bg-white transition-colors"
				>
					<div class="flex items-center gap-3">
						<span
							class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white"
						>
							<Icon icon="mdi:linkedin" class="w-5 h-5" />
						</span>
						<div>
							<p class="text-xs uppercase tracking-wider text-background-2/60">LinkedIn</p>
							<p class="text-sm md:text-base font-semibold">{personalInfo.linkedinLabel}</p>
						</div>
					</div>
					<Icon
						icon="solar:arrow-up-right-linear"
						class="w-5 h-5 text-background-2/70 group-hover:text-background-2"
					/>
				</a>

				<a
					href={personalInfo.whatsappUrl}
					target="__blank"
					class="group flex items-center justify-between gap-4 rounded-2xl bg-white/95 text-background-2 px-4 md:px-5 py-4 hover:bg-white transition-colors"
				>
					<div class="flex items-center gap-3">
						<span
							class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white"
						>
							<Icon icon="ic:baseline-whatsapp" class="w-5 h-5" />
						</span>
						<div>
							<p class="text-xs uppercase tracking-wider text-background-2/60">WhatsApp</p>
							<p class="text-sm md:text-base font-semibold">{personalInfo.phone}</p>
						</div>
					</div>
					<Icon
						icon="solar:arrow-up-right-linear"
						class="w-5 h-5 text-background-2/70 group-hover:text-background-2"
					/>
				</a>
			</div>

			<button
				class="mt-5 px-5 py-3 bg-white text-background-1 rounded-full font-semibold shadow-md hover:shadow-xl transition-shadow"
				on:click={toggleHero}
			>
				Back To Top
			</button>
		</div>
	</div>
</section>
