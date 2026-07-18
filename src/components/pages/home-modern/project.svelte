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
	class={`text-modern min-h-screen ${showContent ? 'bg-gradient-to-br from-background-2 via-[#1f235f] to-[#11173f]' : 'bg-white'}`}
>
	<div class="px-container py-12 md:py-16 flex justify-center flex-col h-full gap-6">
		<h2 class="text-modern-display text-white text-3xl md:text-5xl font-semibold tracking-tight">
			Selected Projects
		</h2>
		<p class="text-white/85 max-w-2xl text-base md:text-lg leading-relaxed">
			Projects across portfolio, company website, job portal, and AI experimentation.
		</p>
		<ProjectList />
		<button
			class="px-5 py-3 bg-white text-background-2 w-fit rounded-full font-semibold shadow-md hover:shadow-xl transition-shadow"
			on:click={toggleToContact}
		>
			Contact
		</button>
	</div>
</section>
