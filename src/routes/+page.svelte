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
		<!-- <img src="/images/landing/abstract.webp" alt="" loading="lazy" /> -->
		<canvas id="gradient-canvas" data-transition-in />
		<Menu />

		<div class="name">
			<span class="name-small">MATHéO</span>
			<span class="name-big">GUERRAZZI</span>
		</div>
	</section>
</main>
