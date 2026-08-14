<script>
	import { projects as projectList } from '$lib/portfolioData';
</script>

<span
	class="text-console text-inside-project bg-white px-2 py-1 my-4 font-semibold text-background-2 w-fit"
	>Selected Project List</span
>

{#each projectList as project, i}
	<div class="flex flex-col text-console text-white border-l border-white/70 ps-3 md:ps-4 my-4">
		<div class="mb-2 flex flex-wrap items-center gap-2 text-white/70">
			<span class="text-[10px] md:text-xs uppercase tracking-[0.2em]">project_{i + 1}</span>
			<span class="text-white/40">|</span>
			<a
				href={project.link}
				target="__blank"
				rel="noreferrer"
				class="text-inside-project bg-white font-semibold px-1.5 py-0.5 text-background-2 w-fit transition-opacity hover:opacity-90"
				>{project.name}</a
			>
		</div>

		<p class="text-tag-project leading-relaxed text-white/75">{project.description}</p>

		<div class="mt-3 flex flex-wrap gap-2">
			{#each project.tools as tool}
				<span
					class="border border-white/20 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-white/80"
					>{tool}</span
				>
			{/each}
		</div>

		<a
			href={project.link}
			target="__blank"
			rel="noreferrer"
			class="mt-4 inline-flex w-fit items-center gap-1 text-sm text-white/90 underline decoration-white/50 underline-offset-4 transition-opacity hover:opacity-80"
			>visit ↗</a
		>
	</div>

	{#if i < projectList.length - 1}
		<span class="block text-white/40">------------</span>
	{/if}
{/each}
<button
	class="text-console text-inside-project text-white text-left mt-6 underline decoration-white/50 underline-offset-4 transition-opacity hover:opacity-80"
	on:click={() => {
		const contact = document.getElementById('contact');
		contact.scrollIntoView({ behavior: 'smooth' });
	}}>For more projects, let's connect!</button
>
