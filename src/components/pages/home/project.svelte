<script>
	import ProjectList from './projectList.svelte';

	let showContent = true;

	const toggleShow = () => {
		showContent = !showContent;
	};

	const toggleToContact = () => {
		const contact = document.getElementById('contact');
		contact.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section id="project" class={` min-h-screen  ${showContent ? 'bg-background-2 ' : 'bg-white'}`}>
	<div class="px-container flex justify-center flex-col h-full text-console">
		{#if showContent}
			<div class="flex flex-col gap-2 md:gap-3 border-l border-white ps-2 text-white mb-2">
				<span class="text-tag-project">
					{'<section id="project" class="flex flex-col gap-2 md:gap-3">'}
				</span>

				<div
					class="border-l border-white ps-2 translate-x-5 flex md:flex-row flex-col md:items-center gap-2 md:gap-3"
				>
					<span class="text-tag-project">
						{'<button on:click={showProject}>'}
					</span>

					<button
						class="text-background-2 bg-white p-1 text-inside-project w-fit font-semibold"
						on:click={toggleShow}
					>
						Hide Project
					</button>

					<span class="text-tag-project">
						{'</button>'}
					</span>
				</div>

				<span class="text-tag-project">
					{'</section>'}
				</span>
			</div>
			<ProjectList />
			<div class="flex md:flex-row flex-col gap-2 md:items-center mb-5">
				<span class="text-tag-project text-white">
					{'<button on:click={toggleToContact}>'}
				</span>
				<button class="p-2 bg-white w-fit" on:click={toggleToContact}>
					<span class="text-background-1 font-bold text-inside-project">Contact</span>
				</button>
				<span class="text-tag-project text-white">
					{'</button>'}
				</span>
			</div>
		{:else}
			<div class="flex flex-col gap-2 md:gap-3 border-l border-black ps-2">
				<span class="text-tag-project">
					{'<section id="project" class="flex flex-col gap-2 md:gap-3">'}
				</span>

				<div
					class="border-l border-black ps-2 translate-x-5 flex md:flex-row flex-col md:items-center gap-2 md:gap-3"
				>
					<span class="text-tag-project">
						{'<button on:click={showProject}>'}
					</span>

					<button class="text-white bg-black p-1 text-inside-project w-fit" on:click={toggleShow}>
						Show Project
					</button>

					<span class="text-tag-project">
						{'</button>'}
					</span>
				</div>

				<span class="text-tag-project">
					{'</section>'}
				</span>
			</div>
		{/if}
	</div>
</section>
