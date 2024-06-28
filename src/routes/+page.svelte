<script>
	import { styleStore } from '../store/styleStore';
	import Hero from '../components/pages/home/hero.svelte';
	import Project from '../components/pages/home/project.svelte';
	import Contact from '../components/pages/home/contact.svelte';
	import Toast from '../components/toast.svelte';
	import HeroModern from '../components/pages/home-modern/hero.svelte';
	import ProjectModern from '../components/pages/home-modern/project.svelte';
	import ContactModern from '../components/pages/home-modern/contact.svelte';

	let style = 'code';

	styleStore.subscribe((value) => {
		style = value.theme;
	});

	console.log(style);
</script>

<Toast />

<svelte:head>
	<title>Aziz Akbar Ashshiddiq</title>
</svelte:head>

{#if style === 'code' || style === undefined}
	<Hero />
	<Project />
	<Contact />
{:else}
	<HeroModern />
	<ProjectModern />
	<ContactModern />
{/if}
