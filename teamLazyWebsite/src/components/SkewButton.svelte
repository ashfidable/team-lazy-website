<script>
	export let color;
</script>

<a style:--bg-clr={color}><slot /></a>

<style>
	a {
		--bg-clr: gray;
		display: inline-block;
		color: white;
		position: relative;
		border: none;
		background-color: transparent;
		padding: 0.9rem 2rem;
		isolation: isolate;
		/* z-index: 1; */
	}

	a::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: var(--bg-clr);
		transform: skewX(-30deg);
		z-index: -1;
	}

	a:hover::before {
		border: 2px solid var(--accent-color-500);
	}
</style>
