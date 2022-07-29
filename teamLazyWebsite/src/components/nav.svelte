<script>
	import SkewLink from '@components/SkewLink.svelte';
</script>

<header class="group">
	<nav>
		<h1><a href="/">Logo</a></h1>
		<ul>
			<div>
				<SkewLink color="#261d1d" href="/">Home</SkewLink>
			</div>
			<div>
				<SkewLink color="#261d1d" href="/">Home</SkewLink>
			</div>
			<div>
				<SkewLink color="#261d1d" href="/">Home</SkewLink>
			</div>
			<div>
				<SkewLink color="#261d1d" href="/">Home</SkewLink>
			</div>
			<div>
				<SkewLink color="#261d1d" href="/">Home</SkewLink>
			</div>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 10px 50px;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}

	nav ul {
		display: flex;
		list-style: none;
		gap: 1rem;
	}
</style>
