<script lang="ts">
	import Nav from '@components/Nav.svelte';
	import NewsCard from '@components/NewsCard.svelte';
	import ScrollableContainer from '@components/ScrollableContainer.svelte';
	import AnimatedContainer from '@components/AnimatedContainer.svelte';
	import '../../src/styles/globals.css';
	import TestCarousel from '@components/TestCarousel.svelte';

	let data: any = [
		{
			title: 'Game',
			image: 'tlbg.png',
			description:
				'Have text here that gives off the intro of the upcoming projects and the first project, on scroll changes the project grid on the left and updates text here, with option to view more details. Might look more geeky and cooler.'
		},
		{
			title: 'Game',
			image: 'tlbg.png',
			description:
				'Have text here that gives off the intro of the upcoming projects and the first project, on scroll changes the project grid on the left and updates text here, with option to view more details. Might look more geeky and cooler.'
		},
		{
			title: 'Game',
			image: 'tlbg.png',
			description:
				'Have text here that gives off the intro of the upcoming projects and the first project, on scroll changes the project grid on the left and updates text here, with option to view more details. Might look more geeky and cooler.'
		}
	];
</script>

<div class="container">
	<Nav />

	<TestCarousel>
		<NewsCard />
		<NewsCard />
		<NewsCard />
		<NewsCard />
		<NewsCard />
		<NewsCard />
	</TestCarousel>
	<slot />

	{#each data as entry, id}
		<AnimatedContainer {id} />
	{/each}
</div>

<style>
	.container {
		background-color: var(--primary-color-800);
		color: white;
		height: 100%;
		margin-inline: 30rem;
	}
</style>
