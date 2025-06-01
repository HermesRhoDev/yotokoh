<script>
	import Menu from '$components/Menu.svelte';
	import { Gradient } from '$lib/Gradient';
	import { onMount } from 'svelte';

	let nameSmallLetters = [];
	let nameBigLetters = [];
	let isAnimating = false;

	const firstName = "MATHéO";
	const lastName = "GUERRAZZI";

	onMount(async () => {
		const gradient = new Gradient();
		gradient.initGradient('#gradient-canvas');
		
		// Démarrer l'animation après un court délai
		setTimeout(() => {
			animateText();
		}, 500);
	});

	function animateText() {
		isAnimating = true;
		
		// Animation du prénom
		firstName.split('').forEach((letter, index) => {
			setTimeout(() => {
				nameSmallLetters = [...nameSmallLetters, { letter, visible: true }];
			}, index * 100);
		});

		// Animation du nom (commence après le prénom)
		setTimeout(() => {
			lastName.split('').forEach((letter, index) => {
				setTimeout(() => {
					nameBigLetters = [...nameBigLetters, { letter, visible: true }];
				}, index * 100);
			});
		}, firstName.length * 100 + 200);
	}
</script>

<main>
	<section id="landing">
		<canvas id="gradient-canvas" data-transition-in />
		
		<Menu />

		<div class="name">
			<span class="name-small">
				{#each nameSmallLetters as { letter, visible }, i}
					<span 
						class="letter" 
						class:visible={visible}
						style="--delay: {i * 0.1}s"
					>
						{letter}
					</span>
				{/each}
			</span>
			<span class="name-big">
				{#each nameBigLetters as { letter, visible }, i}
					<span 
						class="letter" 
						class:visible={visible}
						style="--delay: {i * 0.1}s"
					>
						{letter}
					</span>
				{/each}
			</span>
		</div>
	</section>

	<section id="technologies"></section>
	<section id="projects"></section>
	<section id="socials"></section>
	<section id="contact"></section>
</main>

<style>
	.letter {
		display: inline-block;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.3s ease-out;
		transition-delay: var(--delay);
	}

	.letter.visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Effet supplémentaire pour plus de style */
	.letter {
		animation: none;
	}

	.letter.visible {
		animation: letterAppear 0.6s ease-out forwards;
	}

	@keyframes letterAppear {
		0% {
			opacity: 0;
			transform: translateY(30px) scale(0.8);
		}
		50% {
			transform: translateY(-5px) scale(1.05);
		}
		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>