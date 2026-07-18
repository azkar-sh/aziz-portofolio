<script>
	import { projects as projectList } from '$lib/portfolioData';
</script>

<span class="text-console text-inside-project bg-white px-2 py-1 my-4 font-semibold"
	>Project List ↲
</span>

{#each projectList as project, i}
	<div class="flex flex-col text-console text-white border-l ps-2 my-4 border-white" key={i}>
		<div class="flex flex-col lg:flex-row gap-2 lg:items-center">
			<a
				href={project.link}
				target="__blank"
				class="text-inside-project bg-white font-semibold p-1 text-background-2 w-fit"
				>{project.name}</a
			>
		</div>
		<div class="flex flex-col gap-2 text-white/70">
			<p class="text-tag-project">{project.description}</p>
		</div>
		<div class="flex flex-col lg:flex-row gap-2 lg:items-center">
			<a
				href={project.link}
				target="__blank"
				class="text-inside-project bg-white font-semibold p-1 text-background-2 w-fit"
				>Go To Website ⬈</a
			>
		</div>
	</div>

	{#if i < projectList.length - 1}
		<span class="text-console text-white"> ------------ </span>
	{/if}
{/each}
