<script>
	import Menu from '$components/Menu.svelte';
	import { Gradient } from '$lib/Gradient';
	import { onMount } from 'svelte';

	onMount(async () => {
		const gradient = new Gradient();
		gradient.initGradient('#gradient-canvas');
	});
</script>

<main>
	<section id="landing">
		<canvas id="gradient-canvas" data-transition-in />
		
		<Menu />

		<div class="name">
			<span class="name-small">MATHéO</span>
			<span class="name-big">GUERRAZZI</span>
		</div>
	</section>

	<section id="technologies"></section>

	<section id="projects"></section>

	<section id="socials"></section>

	<section id="contact"></section>
</main>
