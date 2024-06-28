<script>
	import Icon from '@iconify/svelte';
	import { styleStore } from '../store/styleStore.js';

	let style,
		isMaximized = false,
		activeSection = 'hero',
		showOptions = false;

	styleStore.subscribe((value) => {
		style = value;
	});

	const toggleMaximize = () => {
		isMaximized = !isMaximized;
		showOptions = false;
	};

	const handleScroll = (section) => {
		const hero = document.getElementById('hero');
		const project = document.getElementById('project');
		const contact = document.getElementById('contact');

		activeSection = section;

		if (section === 'hero') {
			hero.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'project') {
			project.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'contact') {
			contact.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleShowOptions = () => {
		showOptions = !showOptions;
		isMaximized = false;
	};

	const handleStyleChange = (theme) => {
		const hero = document.getElementById('hero');
		styleStore.update((value) => ({ ...value, theme }));
		showOptions = false;
		hero.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<header class="absolute md:h-full right-0 bottom-0 w-full md:w-auto z-10">
	<nav
		class="py-3 md:px-2 px-4 h-full backdrop-blur-xl flex {style === 'code'
			? 'bg-white/10 '
			: 'bg-gradient-to-b from-slate-500/85 to-black/85'}"
	>
		<div class="flex md:flex-col flex-row w-full justify-between items-center h-full">
			<button
				class="nav-button-toggle hidden md:flex md:w-full md:items-center md:justify-center"
				on:click={toggleMaximize}
			>
				<Icon
					icon="iconamoon:menu-burger-horizontal-fill"
					class="md:w-7 md:h-7 w-6 h-6 text-white/80"
				/>
			</button>
			<div class="flex flex-row md:flex-col w-full md:w-auto gap-4">
				<button class="nav-button" on:click={() => handleScroll('hero')}>
					<Icon icon="iconamoon:home" class="md:w-7 md:h-7 w-6 h-6 text-white/80" />
					{#if isMaximized}
						<span class="hidden md:inline"> HOME </span>
					{/if}
				</button>
				<button class="nav-button" on:click={() => handleScroll('project')}>
					<Icon
						icon="material-symbols:home-work-outline-rounded"
						class="md:w-7 md:h-7 w-6 h-6 text-white/80"
					/>
					{#if isMaximized}
						<span class="hidden md:inline"> PROJECTS </span>
					{/if}
				</button>
				<button class="nav-button" on:click={() => handleScroll('contact')}>
					<Icon icon="lucide:contact-round" class="md:w-7 md:h-7 w-6 h-6 text-white/80" />
					{#if isMaximized}
						<span class="hidden md:inline"> CONTACT </span>
					{/if}
				</button>
			</div>

			<div class="relative">
				<button class="nav-button" on:click={handleShowOptions}>
					<Icon icon="ic:outline-draw" class="md:w-7 md:h-7 w-6 h-6" />
					{#if isMaximized}
						<span class="hidden md:inline"> THEME </span>
					{/if}
				</button>
				{#if showOptions}
					<div
						class="absolute bottom-16 right-0 md:bottom-0 md:right-14 p-2 w-40 {style === 'code'
							? 'bg-white/10'
							: 'bg-black/75'} rounded-md shadow-lg backdrop-blur-lg"
					>
						<div class="flex flex-col gap-2 w-full">
							<button
								class="flex flex-row items-center gap-3 text-white p-2 hover:bg-white/10 hover:shadow-lg rounded-md active:scale-95 transition-all duration-300"
								on:click={() => handleStyleChange('code')}
							>
								<Icon icon="tabler:code" class="md:w-7 md:h-7 w-6 h-6" />

								<span> Code </span>
							</button>
							<button
								class="flex flex-row items-center gap-3 text-white p-2 hover:bg-white/10 hover:shadow-lg rounded-md active:scale-95 transition-all duration-300"
								on:click={() => handleStyleChange('modern')}
							>
								<Icon icon="clarity:design-line" class="md:w-7 md:h-7 w-6 h-6" />
								<span> Modern </span>
							</button>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</nav>
</header>

<style>
	.nav-button {
		@apply text-white/80 flex flex-row-reverse gap-3 items-center p-2 hover:bg-white/10 hover:shadow-lg rounded-md active:scale-95 transition-all duration-300;
	}
	.nav-button-toggle {
		@apply hover:bg-white/10 hover:shadow-lg rounded-md active:scale-95 transition-all duration-300 p-2;
	}
</style>
