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

<section
	id="project"
	class={`min-h-screen flex items-center  ${showContent ? 'bg-background-2 ' : 'bg-white'}`}
>
	<div class="px-container flex justify-center flex-col h-full text-console">
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
	</div>
</section>
