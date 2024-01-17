<script>
	import { createEventDispatcher } from 'svelte';
	const languages = ['fr', 'sp', 'jpn'];

	const dispatch = createEventDispatcher();
</script>

<footer class="language-selection">
	{#each languages as language}
		<button on:click={() => dispatch('language-select', { language })}>
			<img src="/{language}-flag.png" alt="${language}" class="flag-icon" />
		</button>
	{/each}
</footer>

<style>
	.language-selection {
		display: flex;
		justify-content: center;
		padding: 20px;
	}

	.language-selection button {
		border: none;
		background-color: transparent;
	}

	.flag-icon {
		margin: 0 10px;
		border: 1px solid #999999;
	}
</style>
