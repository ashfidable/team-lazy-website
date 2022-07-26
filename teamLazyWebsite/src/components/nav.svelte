<script>
	import SkewButton from './SkewButton.svelte';
</script>

<header class="group">
	<nav>
		<h1><a href="#">Logo</a></h1>
		<ul>
			<!-- <li class="home selected"><a href="#"><span>Home</span></a></li>
			<li class="about"><a href="#"><span>Projects</span></a></li>
			<li class="work"><a href="#"><span>Tools</span></a></li>
			<li class="contact"><a href="#"><span>About</span></a></li> -->
			<div><SkewButton color="#261d1d"><a href="#"><span>Home</span></a></SkewButton></div>
			<div><SkewButton color="#261d1d"><a href="#"><span>Home</span></a></SkewButton></div>
			<div><SkewButton color="#261d1d"><a href="#"><span>Home</span></a></SkewButton></div>
			<div><SkewButton color="#261d1d"><a href="#"><span>Home</span></a></SkewButton></div>
			<div><SkewButton color="#261d1d"><a href="#"><span>Home</span></a></SkewButton></div>
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
