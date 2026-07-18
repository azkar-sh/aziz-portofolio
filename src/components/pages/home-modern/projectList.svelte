<script>
	import Icon from '@iconify/svelte';
	import { projects as projectList } from '$lib/portfolioData';

	const projectIcons = [
		'solar:planet-linear',
		'solar:window-frame-linear',
		'solar:buildings-2-linear',
		'solar:magic-stick-3-linear'
	];
</script>

<div class="space-y-4 text-background-2">
	{#each projectList as project, i}
		<article
			class="bg-white/95 rounded-3xl p-5 md:p-7 shadow-md border border-background-2/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="flex flex-col gap-3">
				<div class="flex items-center justify-between gap-3">
					<div class="flex items-center gap-3">
						<span
							class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background-2 text-white"
						>
							<Icon icon={projectIcons[i] ?? 'solar:folder-with-files-linear'} class="w-5 h-5" />
						</span>
						<p class="text-xs uppercase tracking-[0.18em] text-background-2/55">
							Project {String(i + 1).padStart(2, '0')}
						</p>
					</div>
					<Icon icon="solar:arrow-up-right-linear" class="w-5 h-5 text-background-2/65" />
				</div>

				<a
					href={project.link}
					target="__blank"
					class="text-modern-display text-xl md:text-2xl font-semibold tracking-tight underline decoration-2 underline-offset-4"
				>
					{project.name}
				</a>
				<p class="text-sm md:text-base text-background-2/80 leading-relaxed">
					{project.description}
				</p>
				<a
					href={project.link}
					target="__blank"
					class="w-fit px-4 py-2 bg-background-2 text-white rounded-full font-medium shadow hover:shadow-md transition-shadow"
				>
					Visit Website
				</a>
			</div>
		</article>
		{#if i < projectList.length - 1}
			<div class="h-px bg-background-2/15"></div>
		{/if}
	{/each}
</div>
