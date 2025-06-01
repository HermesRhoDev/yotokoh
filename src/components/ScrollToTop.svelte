<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let threshold = 300;
	export let behavior = 'smooth';
	export let position = 'bottom-right';
	export let size = 'medium';
	export let className = '';

	let isVisible = false;
	let scrollY = 0;
	let ticking = false;

	function updateScrollPosition() {
		if (!ticking && browser) {
			requestAnimationFrame(() => {
				scrollY = window.scrollY;
				isVisible = scrollY > threshold;
				ticking = false;
			});
			ticking = true;
		}
	}

	function scrollToTop() {
		if (browser) {
			window.scrollTo({
				top: 0,
				behavior: behavior
			});
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			scrollToTop();
		}
	}

	$: positionClass = `scroll-to-top--${position}`;
	$: sizeClass = `scroll-to-top--${size}`;
	$: visibilityClass = isVisible ? 'scroll-to-top--visible' : 'scroll-to-top--hidden';

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', updateScrollPosition, { passive: true });

			updateScrollPosition();

			return () => {
				window.removeEventListener('scroll', updateScrollPosition);
			};
		}
	});
</script>

<svelte:window bind:scrollY />

<button
	class="scroll-to-top {positionClass} {sizeClass} {visibilityClass} {className}"
	on:click={scrollToTop}
	on:keydown={handleKeydown}
	aria-label="Retourner en haut de la page"
	title="Retourner en haut"
	type="button"
>
	<svg
		class="scroll-to-top__icon"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
	</svg>
</button>