<script>
	import { styleStore } from '../store/styleStore';
	import Hero from '../components/pages/home/hero.svelte';
	import About from '../components/pages/home/about.svelte';
	import Project from '../components/pages/home/project.svelte';
	import Contact from '../components/pages/home/contact.svelte';
	import Toast from '../components/toast.svelte';
	import HeroModern from '../components/pages/home-modern/hero.svelte';
	import AboutModern from '../components/pages/home-modern/about.svelte';
	import ProjectModern from '../components/pages/home-modern/project.svelte';
	import ContactModern from '../components/pages/home-modern/contact.svelte';

	let style = 'code';

	styleStore.subscribe((value) => {
		style = value?.theme ?? 'code';
	});
</script>

<Toast />

{#if style === 'code' || style === undefined}
	<Hero />
	<About />
	<Project />
	<Contact />
{:else}
	<HeroModern />
	<AboutModern />
	<ProjectModern />
	<ContactModern />
{/if}
