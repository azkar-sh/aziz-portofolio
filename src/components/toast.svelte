<script>
	import Icon from '@iconify/svelte';
	import { styleStore } from '../store/styleStore.js';
	import { onMount } from 'svelte';

	let style;
	let isShow = false;

	styleStore.subscribe((value) => {
		style = value;
	});

	const handleStyleChange = (theme) => {
		styleStore.update((value) => ({ ...value, theme }));
		let home = document.getElementById('hero');
		home.scrollIntoView({ behavior: 'smooth' });
	};

	onMount(() => {
		const contact = document.getElementById('contact');
		if (contact) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && style.theme === 'code') {
						isShow = true;
					} else {
						isShow = false;
					}
				});
			});

			observer.observe(contact);
		}
	});
</script>

{#if isShow}
	<div class="absolute w-full bg-transparent p-2 z-20 animate__animated animate__fadeInDown">
		<div
			class="p-4 bg-white/90 backdrop-blur-md rounded flex flex-row justify-between items-center"
		>
			<span class="text-base md:text-xl">
				Boring with the design?
				<span class="font-semibold"> Click The Icon </span>
			</span>

			<button
				class="flex flex-row items-center gap-3 text-white p-2 hover:bg-white/30 hover:shadow-lg rounded-md active:scale-95 transition-all duration-300 relative"
				on:click={() => handleStyleChange('modern')}
			>
				<Icon icon="clarity:design-line" class="md:w-7 md:h-7 w-6 h-6 text-black" />
				<div class="w-2 h-2 bg-blue-700 rounded-full top-0 absolute left-0 animate-ping"></div>
			</button>
		</div>
	</div>
{/if}
