<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade, fly } from 'svelte/transition';

	let node: any;
	export let id: number;
</script>

<header />

<IntersectionObserver element={node} let:intersecting threshold={0}>
	<div class="container" bind:this={node}>
		{#if intersecting}
			{#if id % 2 == 0}
				<div class="card-img-left" in:fly={{ x: -600, duration: 500, delay: id * 10 }} out:fade>
					<div class="img-container">
						<img src="tlbg.png" alt="Alt" />
					</div>
					<h2>
						Have text here that gives off the intro of the upcoming projects and the first project,
						on scroll changes the project grid on the left and updates text here, with option to
						view more details. Might look more geeky and cooler.
					</h2>
				</div>
			{:else}
				<div class="card-img-right" in:fly={{ x: 600, duration: 500, delay: id * 10 }} out:fade>
					<h2>
						Have text here that gives off the intro of the upcoming projects and the first project,
						on scroll changes the project grid on the left and updates text here, with option to
						view more details. Might look more geeky and cooler.
					</h2>
					<div class="img-container">
						<img src="tlbg.png" alt="Alt" />
					</div>
				</div>
			{/if}
		{/if}
	</div>
</IntersectionObserver>

<style>
	.container {
		margin-inline: 4rem;
	}

	.img-container {
		display: block;
	}
	.card-img-left {
		display: grid;
		grid-template-columns: repeat(2, 600px);
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.card-img-right {
		display: grid;
		grid-template-columns: repeat(2, 600px);
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	img {
		max-width: 600px;
	}

	h2 {
		/* width: 500px; */
		/* flex-basis: 30%; */
	}
</style>
