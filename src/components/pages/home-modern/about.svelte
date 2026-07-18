<script>
	import Icon from '@iconify/svelte';
	import { aboutData } from '$lib/portfolioData';
</script>

<section id="about" class="text-modern bg-gradient-to-b from-white to-slate-100 min-h-screen">
	<div
		class="px-container py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-background-2"
	>
		<article
			class="rounded-3xl border border-background-2/10 p-5 md:p-7 bg-white/95 shadow-md hover:shadow-xl transition-shadow"
		>
			<h2
				class="text-modern-display text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3"
			>
				<span
					class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white"
				>
					<Icon icon="solar:user-linear" class="w-5 h-5" />
				</span>
				Profile
			</h2>
			<p class="leading-relaxed text-background-2/85">{aboutData.profile}</p>
		</article>

		<article
			class="rounded-3xl border border-background-2/10 p-5 md:p-7 bg-white/95 shadow-md hover:shadow-xl transition-shadow"
		>
			<h2 class="text-modern-display text-2xl md:text-3xl font-semibold mb-3">
				<span
					class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white align-middle me-3"
				>
					<Icon icon="solar:code-scan-linear" class="w-5 h-5" />
				</span>
				Skills & Languages
			</h2>
			<ul class="space-y-2 text-background-2/85">
				{#each aboutData.skills as skill}
					<li class="px-3 py-2 rounded-xl bg-slate-100 border border-background-2/10">{skill}</li>
				{/each}
			</ul>
		</article>

		<article
			class="rounded-3xl border border-background-2/10 p-5 md:p-7 md:col-span-2 bg-white/95 shadow-md hover:shadow-xl transition-shadow"
		>
			<h2
				class="text-modern-display text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3"
			>
				<span
					class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white"
				>
					<Icon icon="solar:case-minimalistic-linear" class="w-5 h-5" />
				</span>
				Experience
			</h2>
			<div class="space-y-3 text-background-2/85">
				{#each aboutData.experience as role}
					<p class="px-4 py-3 rounded-2xl border border-background-2/10 bg-slate-50">{role}</p>
				{/each}
			</div>
		</article>

		<article
			class="rounded-3xl border border-background-2/10 p-5 md:p-7 md:col-span-2 bg-white/95 shadow-md hover:shadow-xl transition-shadow"
		>
			<h2
				class="text-modern-display text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3"
			>
				<span
					class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white"
				>
					<Icon icon="solar:notebook-bookmark-linear" class="w-5 h-5" />
				</span>
				Education
			</h2>
			<p class="text-background-2/85">{aboutData.education}</p>
		</article>
	</div>
</section>
