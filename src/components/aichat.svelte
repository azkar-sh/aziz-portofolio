<script>
	import Icon from '@iconify/svelte';
	import { tick } from 'svelte';
	import { chatStore } from '../store/chatStore.js';
	import { styleStore } from '../store/styleStore.js';

	let currentTheme = 'code';
	let isOpen = false;
	let input = '';
	let isLoading = false;
	let errorMessage = '';
	let scrollEl;

	let messages = [
		{
			role: 'assistant',
			content: "Hi, I'm Aziz's AI assistant. Ask me anything about his work, skills, or experience."
		}
	];

	styleStore.subscribe((value) => {
		currentTheme = value?.theme ?? 'code';
	});

	chatStore.subscribe((value) => {
		isOpen = value?.isOpen ?? false;
	});

	const closeChat = () => chatStore.update((value) => ({ ...value, isOpen: false }));

	const scrollToBottom = async () => {
		await tick();
		scrollEl?.scrollTo({ top: scrollEl.scrollHeight, behavior: 'smooth' });
	};

	const sendMessage = async () => {
		const trimmed = input.trim();
		if (!trimmed || isLoading) return;

		messages = [...messages, { role: 'user', content: trimmed }];
		input = '';
		errorMessage = '';
		isLoading = true;
		scrollToBottom();

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: trimmed })
			});

			const data = await res.json();

			if (!res.ok) {
				errorMessage = data?.message || 'Something went wrong. Please try again.';
			} else {
				messages = [...messages, { role: 'assistant', content: data.message }];
			}
		} catch {
			errorMessage = 'Network error. Please check your connection and try again.';
		} finally {
			isLoading = false;
			scrollToBottom();
		}
	};

	const handleKeydown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	};
</script>

{#if isOpen}
	<div
		class="fixed z-30 bottom-20 right-4 left-4 md:left-auto md:right-24 md:bottom-6 md:w-96 w-auto h-[70vh] max-h-[520px] flex flex-col overflow-hidden {currentTheme ===
		'code'
			? 'bg-[#070F2B]/95 border border-white/10 shadow-[0_0_0_1px_rgba(148,163,184,0.12),0_20px_34px_rgba(2,6,23,0.55)] text-console rounded-md'
			: 'bg-gradient-to-b from-slate-500/90 to-black/90 border border-white/15 shadow-2xl text-modern rounded-3xl'} backdrop-blur-xl"
	>
		<div
			class="flex items-center justify-between px-3 py-2 border-b {currentTheme === 'code'
				? 'border-white/10'
				: 'border-white/15'}"
		>
			<div class="flex items-center gap-2 min-w-0">
				{#if currentTheme === 'code'}
					<button
						class="w-3 h-3 flex justify-center items-center rounded-full bg-red-400/80"
						on:click={closeChat}
					>
						<Icon icon="mdi:close" class="w-2 h-2 text-black/80" />
					</button>
					<button class="w-3 h-3 rounded-full bg-yellow-400/80" on:click={closeChat}></button>
					<button class="w-3 h-3 rounded-full bg-green-400/80" on:click={closeChat}></button>
					<span class="ml-2 text-xs text-white/60 truncate">ai@aziz:~$ chat</span>
				{:else}
					<Icon icon="solar:chat-round-dots-linear" class="w-5 h-5 text-white/80" />
					<span class="text-sm font-semibold text-white/90 truncate">Ask Aziz's AI</span>
				{/if}
			</div>
		</div>

		<div bind:this={scrollEl} class="flex-1 overflow-y-auto p-3 space-y-3 text-sm flex flex-col">
			{#each messages as msg}
				<div
					class="max-w-[85%] px-3 py-2 whitespace-pre-wrap break-words {msg.role === 'user'
						? currentTheme === 'code'
							? 'self-end bg-white text-background-1 rounded'
							: 'self-end bg-white/95 text-background-2 rounded-2xl'
						: currentTheme === 'code'
							? 'self-start border border-white/15 bg-white/5 text-white rounded'
							: 'self-start bg-white/10 text-white rounded-2xl'}"
				>
					{msg.content}
				</div>
			{/each}

			{#if isLoading}
				<div
					class="max-w-[85%] px-3 py-2 self-start flex items-center gap-1 {currentTheme === 'code'
						? 'border border-white/15 bg-white/5 text-white/70 rounded'
						: 'bg-white/10 text-white/70 rounded-2xl'}"
				>
					<span class="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]"
					></span>
					<span class="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]"
					></span>
					<span class="w-1.5 h-1.5 rounded-full bg-current animate-bounce"></span>
				</div>
			{/if}

			{#if errorMessage}
				<div
					class="max-w-[85%] px-3 py-2 self-start text-red-300 border border-red-400/30 bg-red-400/10 rounded"
				>
					{errorMessage}
				</div>
			{/if}
		</div>

		<form
			class="flex items-center gap-2 p-2 border-t {currentTheme === 'code'
				? 'border-white/10'
				: 'border-white/15'}"
			on:submit|preventDefault={sendMessage}
		>
			<input
				class="flex-1 bg-transparent outline-none placeholder:text-white/40 text-white px-2 py-2 text-sm {currentTheme ===
				'code'
					? 'text-console'
					: 'text-modern'}"
				type="text"
				placeholder="Type a message..."
				bind:value={input}
				on:keydown={handleKeydown}
				disabled={isLoading}
			/>
			<button
				type="submit"
				class="p-2 rounded-md disabled:opacity-40 transition-colors {currentTheme === 'code'
					? 'hover:bg-white/10 text-cyan-300'
					: 'hover:bg-white/15 text-white'}"
				disabled={isLoading || !input.trim()}
				aria-label="Send message"
			>
				<Icon icon="material-symbols:send-rounded" class="w-5 h-5" />
			</button>
		</form>
	</div>
{/if}
