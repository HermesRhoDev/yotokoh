<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	let isActive = false;

	function toggleActive() {
		isActive = !isActive;
	}

	function handleNavClick(event: MouseEvent) {
		if (!(event.target instanceof HTMLLIElement)) {
			isActive = false;
		}
	}
</script>

{#if isActive}
	<nav in:fade={{ duration: 300 }} out:fade={{ duration: 300 }} on:click={handleNavClick}>
		<ul>
			<li
				class="anton-regular"
				in:fly={{ y: 20, duration: 300, delay: 300 }}
				out:fly={{ y: -20, duration: 300 }}
			>
				ACCUEIL
			</li>
			<li
				class="anton-regular"
				in:fly={{ y: 20, duration: 300, delay: 500 }}
				out:fly={{ y: -20, duration: 300, delay: 100 }}
			>
				PROJETS
			</li>
			<li
				class="anton-regular"
				in:fly={{ y: 20, duration: 300, delay: 700 }}
				out:fly={{ y: -20, duration: 300, delay: 200 }}
			>
				CONTACT
			</li>
		</ul>
	</nav>
{/if}

<button class="anton-regular" class:active={isActive} on:click={toggleActive}>
	{isActive ? 'fermer' : 'menu'}
</button>

<main>
	<section id="landing"></section>
	<section id="aboutme"></section>
	<section id="projects"></section>
	<section id="contact"></section>
</main>