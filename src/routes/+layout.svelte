<script>
	import '../app.css';
	import 'animate.css';
	import Navbar from '../components/navbar.svelte';
</script>

<div class="flex flex-col-reverse md:flex-row-reverse bg-background-2 h-screen w-screen">
	<Navbar />
	<div class="w-full h-full overflow-auto">
		<slot />
	</div>
</div>
