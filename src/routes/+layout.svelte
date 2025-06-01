<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '$lib/main.scss';
	import ScrollToTop from '$components/ScrollToTop.svelte';
</script>

<slot />

<ScrollToTop 
	threshold={200}
	position="bottom-right"
	size="small"
	behavior="auto"
/>