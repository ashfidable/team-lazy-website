<script lang="ts">
	export let href: string = '/';
	export let src: string = 'tlbg.png';
	export let title: string = 'Title of the recent news';
	export let body: string =
		'Some text regarding the news, a card kind of view. Idk if this would work or not';
</script>

<div class="card">
	<div class="container">
		<a {href}>
			<img {src} alt={title} />
			<h3><b>{title}</b></h3>
			<p>{body}</p>
		</a>
	</div>
</div>

<style>
	.card {
		/* Add shadows to create the "card" effect */
		display: inline-block;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	/* Add some padding inside the card container */
	.container {
		width: 480px;
		padding: 1rem;
	}

	img {
		display: inline-block;
		width: 100%;
		aspect-ratio: 16 / 9;
	}

	h3 {
		padding-top: 10px;
		color: var(--accent-color-500);
	}

	p {
		padding-top: 10px;
	}
</style>
