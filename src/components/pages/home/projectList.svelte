<script>
	import { projects as projectList } from '$lib/portfolioData';

	let selectedFilter = 'selected';

	const filteredProject = (filter) => {
		if (filter === 'selected') {
			// Return just 4 random projects from the list
			const shuffled = [...projectList].sort(() => 0.5 - Math.random());
			return shuffled.slice(0, 4);
		} else {
			return projectList.filter((project) => project.filter === filter);
		}
	};

	const filterList = ['selected', 'frontend', 'fullstack', 'backend', 'mobile', 'research'];

	const handleFilterClick = (filter) => {
		selectedFilter = filter;
		const projectSection = document.getElementById('project');
		projectSection.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<h2
	class="text-console text-inside-project bg-white px-2 py-1 my-4 font-semibold text-background-2 w-fit"
>
	Project List
</h2>

<div class="flex flex-wrap gap-2">
	{#each filterList as filter}
		<button
			class="text-console text-white text-sm bg-white/10 px-2 w-fit transition-opacity hover:opacity-80"
			on:click={() => handleFilterClick(filter)}
		>
			{filter}
		</button>
	{/each}
</div>

{#each filteredProject(selectedFilter) as project, i}
	<div class="flex flex-col text-console text-white border-l border-white/70 ps-3 md:ps-4 my-4">
		<div class="mb-2 flex flex-wrap items-center gap-2 text-white/70">
			<span class="text-[10px] md:text-xs uppercase tracking-[0.2em]">{project.filter}</span>
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

		{#if project.link !== ''}
			<a
				href={project.link}
				target="__blank"
				rel="noreferrer"
				class="mt-4 inline-flex w-fit items-center gap-1 text-sm text-white/90 underline decoration-white/50 underline-offset-4 transition-opacity hover:opacity-80"
				>visit ↗</a
			>
		{/if}
	</div>

	{#if i < filteredProject(selectedFilter).length - 1}
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
