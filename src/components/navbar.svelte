<script>
	import Icon from '@iconify/svelte';
	import { styleStore } from '../store/styleStore.js';

	let currentTheme = 'code',
		isMaximized = false,
		activeSection = 'hero',
		showOptions = false;

	styleStore.subscribe((value) => {
		currentTheme = value?.theme ?? 'code';
	});

	const toggleMaximize = () => {
		isMaximized = !isMaximized;
		showOptions = false;
	};

	const handleScroll = (section) => {
		const hero = document.getElementById('hero');
		const profile = document.getElementById('about');
		const project = document.getElementById('project');
		const contact = document.getElementById('contact');

		activeSection = section;

		if (section === 'hero') {
			hero.scrollIntoView({ behavior: 'smooth' });
		} else if (section === 'about') {
			profile.scrollIntoView({ behavior: 'smooth' });
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
		class="py-3 md:px-2 px-4 h-full backdrop-blur-xl flex {currentTheme === 'code'
			? 'bg-[#070F2B]/90 border border-white/10 shadow-[0_0_0_1px_rgba(148,163,184,0.12),0_20px_34px_rgba(2,6,23,0.55)] text-console'
			: 'bg-gradient-to-b from-slate-500/85 to-black/85'}"
	>
		<div
			class="flex md:flex-col flex-row w-full justify-between items-center h-full gap-2 md:gap-3"
		>
			<button
				class:code-theme={currentTheme === 'code'}
				class="nav-button-toggle hidden md:flex md:w-full md:items-center md:justify-center"
				on:click={toggleMaximize}
			>
				<Icon
					icon="iconamoon:menu-burger-horizontal-fill"
					class="md:w-7 md:h-7 w-6 h-6 text-white/80"
				/>
			</button>
			<div class="flex flex-row md:flex-col w-full md:w-auto gap-2 md:gap-3">
				<button
					class:code-theme={currentTheme === 'code'}
					class="nav-button"
					on:click={() => handleScroll('hero')}
				>
					<Icon
						icon={currentTheme === 'code' ? 'pixelarticons:home-sharp' : 'iconamoon:home'}
						class="md:w-7 md:h-7 w-6 h-6 text-white/80"
					/>
					{#if isMaximized}
						<span class="hidden md:inline uppercase tracking-[0.2em] text-[10px]"> HOME </span>
					{/if}
				</button>
				<button
					class:code-theme={currentTheme === 'code'}
					class="nav-button"
					on:click={() => handleScroll('about')}
				>
					<Icon
						icon={currentTheme === 'code'
							? 'pixelarticons:user'
							: 'material-symbols:person-outline-rounded'}
						class="md:w-7 md:h-7 w-6 h-6 text-white/80"
					/>
					{#if isMaximized}
						<span class="hidden md:inline uppercase tracking-[0.2em] text-[10px]"> ABOUT </span>
					{/if}
				</button>
				<button
					class:code-theme={currentTheme === 'code'}
					class="nav-button"
					on:click={() => handleScroll('project')}
				>
					<Icon
						icon={currentTheme === 'code'
							? 'pixelarticons:briefcase-sharp'
							: 'material-symbols:home-work-outline-rounded'}
						class="md:w-7 md:h-7 w-6 h-6 text-white/80"
					/>
					{#if isMaximized}
						<span class="hidden md:inline uppercase tracking-[0.2em] text-[10px]"> PROJECTS </span>
					{/if}
				</button>
				<button
					class:code-theme={currentTheme === 'code'}
					class="nav-button"
					on:click={() => handleScroll('contact')}
				>
					<Icon
						icon={currentTheme === 'code' ? 'pixelarticons:contact-sharp' : 'lucide:contact-round'}
						class="md:w-7 md:h-7 w-6 h-6 text-white/80"
					/>
					{#if isMaximized}
						<span class="hidden md:inline uppercase tracking-[0.2em] text-[10px]"> CONTACT </span>
					{/if}
				</button>
			</div>

			<div class="relative">
				<!-- <button
					class:code-theme={currentTheme === 'code'}
					class="nav-button"
					on:click={handleShowOptions}
				>
					<Icon icon="ic:outline-draw" class="md:w-7 md:h-7 w-6 h-6" />
					{#if isMaximized}
						<span class="hidden md:inline uppercase tracking-[0.2em] text-[10px]"> THEME </span>
					{/if}
				</button> -->
				{#if showOptions}
					<div
						class="absolute bottom-16 right-0 md:bottom-0 md:right-14 p-2 w-40 {currentTheme ===
						'code'
							? 'bg-[#070F2B]/95 border border-cyan-400/20 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_20px_38px_rgba(2,6,23,0.7)]'
							: 'bg-black/75'} rounded-md backdrop-blur-lg"
					>
						<div class="flex flex-col gap-2 w-full">
							<button
								class:code-theme={currentTheme === 'code'}
								class="theme-option flex flex-row items-center gap-3 text-white p-2 rounded-md active:scale-95 transition-all duration-300"
								on:click={() => handleStyleChange('code')}
							>
								<Icon icon="tabler:code" class="md:w-7 md:h-7 w-6 h-6" />

								<span class="uppercase tracking-[0.16em] text-[10px]"> Code </span>
							</button>
							<button
								class:code-theme={currentTheme === 'code'}
								class="theme-option flex flex-row items-center gap-3 text-white p-2 rounded-md active:scale-95 transition-all duration-300"
								on:click={() => handleStyleChange('modern')}
							>
								<Icon icon="clarity:design-line" class="md:w-7 md:h-7 w-6 h-6" />
								<span class="uppercase tracking-[0.16em] text-[10px]"> Modern </span>
							</button>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</nav>
</header>

<style>
	.nav-button.code-theme,
	.nav-button-toggle.code-theme,
	.theme-option.code-theme {
		color: rgba(191, 219, 254, 0.9);
	}

	.nav-button.code-theme:hover,
	.nav-button-toggle.code-theme:hover,
	.theme-option.code-theme:hover {
		background: rgba(148, 163, 184, 0.1);
		color: rgba(240, 249, 255, 1);
	}

	.theme-option {
		border: 1px solid transparent;
	}
</style>
