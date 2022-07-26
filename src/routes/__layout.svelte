<script lang="ts">
	import Nav from '../../src/components/nav.svelte';
	import SkewButton from '../../src/components/SkewButton.svelte';
	import '../../src/styles/globals.css';
</script>

<div class="container">
	<Nav />
	<slot />
	<SkewButton />
</div>

<style>
	.container {
		background-color: var(--primary-color-900);
		color: white;
		height: 100vh;
	}
</style>
