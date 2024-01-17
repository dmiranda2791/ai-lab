<script>
	// JavaScript or Svelte-specific logic can be added here if needed
</script>

<header>
	<div class="background">
		<img class="" src="/worldmap.png" alt="World Map" />
	</div>
	<div class="content">
		<img class="parrot" src="/parrot.png" alt="Parrot" />
		<div>
			<h1>Pollyglot</h1>
			<p>Perfect Translation Every Time</p>
		</div>
	</div>
</header>

<style>
	header {
		position: relative;
	}
	.background {
		position: relative;
		width: 100%;
		height: 200px;
		display: flex;
		justify-content: center;
		padding: 0;
		margin: 0;
	}
	.background img {
		width: 100%;
		height: auto;
		display: block;
	}
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.content div {
		margin-left: 2rem;
	}

	.content .parrot {
		width: 100px;
		height: auto;
	}

	.content h1 {
		font-family: 'Big Shoulders Display';
		color: #32cd32;
		font-size: 2.5rem;
		margin: 0 0;
	}

	.content p {
		font-size: 0.7rem;
		color: #ffffff;
		margin: 0;
		font-family: 'Poppins', sans-serif;
	}
</style>
