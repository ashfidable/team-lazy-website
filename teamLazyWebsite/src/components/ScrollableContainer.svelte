<script lang="ts">
	import Heading from '@components/Heading.svelte';
	import { onMount } from 'svelte';

	let Carousel: any; // for saving Carousel component class
	let carousel: any; // for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	const handleNextClick = () => {
		carousel.goToNext();
	};

	const handlePreviousClick = () => {
		carousel.goToPrev();
	};
</script>

<div>
	<header>
		<Heading>Recent News</Heading>
		<div>
			<button on:click={handlePreviousClick}
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
					><path fill="none" d="M0 0h24v24H0z" /><path d="M12 13v7l-8-8 8-8v7h8v2z" /></svg
				></button
			>
			<button on:click={handleNextClick}
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
					><path fill="none" d="M0 0h24v24H0z" /><path d="M12 13H4v-2h8V4l8 8-8 8z" /></svg
				></button
			>
		</div>
	</header>
	<svelte:component
		this={Carousel}
		bind:this={carousel}
		particlesToShow={3}
		particlesToScroll={2}
		arrows={false}
	>
		<slot />
	</svelte:component>
</div>

<style>
	::-webkit-scrollbar {
		display: none;
	}

	header {
		display: flex;
		justify-content: space-between;
		padding-inline: 1rem;
	}

	button {
		background-color: transparent;
		color: white;
		position: relative;
		cursor: pointer;
		isolation: isolate;
		border: 0;
	}

	button:first-of-type {
		margin-right: 0.2rem;
	}

	button::before {
		content: '';
		position: absolute;
		inset: 0;
		outline: 2px solid var(--accent-color-500);
		transform: skewX(-15deg);
		z-index: -1;
	}

	svg {
		fill: var(--accent-color-500);
	}

	button:hover::before {
		background-color: var(--accent-color-500);
	}

	button:hover svg {
		fill: white;
	}
</style>
