<script lang="ts">
	import Nav from '@components/nav.svelte';
	import '../../src/styles/globals.css';
</script>

<div class="container">
	<Nav />
	<slot />
</div>

<style>
	.container {
		background-color: var(--primary-color-900);
		color: white;
		height: 100vh;
	}
</style>
