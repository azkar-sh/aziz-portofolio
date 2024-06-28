<script>
	import { onMount, onDestroy } from 'svelte';

	let mouseX = 0;
	let mouseY = 0;
	let color = 'blue'; // Initial color

	// Function to update mouse position
	const updateMousePosition = (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	};

	// Update color based on cursor direction
	const updateColor = () => {
		if (mouseX > window.innerWidth / 2) {
			color = 'red';
		} else {
			color = 'blue';
		}
	};

	// Listen for mousemove event
	onMount(() => {
		window.addEventListener('mousemove', updateMousePosition);
		window.addEventListener('mousemove', updateColor);
	});

	// Cleanup event listeners on component destruction
	onDestroy(() => {
		window.removeEventListener('mousemove', updateMousePosition);
		window.removeEventListener('mousemove', updateColor);
	});
</script>

<div class="cursor" style="transform: translate({$mouseX - 10}px, {$mouseY - 10}px);"></div>

<style>
	.cursor {
		position: fixed;
		width: 20px;
		height: 20px;
		border-radius: 50%;

		pointer-events: none;
		z-index: 9999;
		top: 0;
		left: 0;
		transition: background-color 0.3s ease; /* Smooth color transition */
	}
</style>
