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
	<div class="px-container flex justify-center flex-col h-full text-console">PROJECT MODERN</div>
</section>
