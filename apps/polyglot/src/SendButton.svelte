<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleButtonClick() {
		dispatch('click');
	}
</script>

<button on:click={handleButtonClick} class="send-button"
	><img src="/send-btn.png" alt="Send button" />
</button>

<style>
	.send-button {
		border: none;
		background-color: transparent;
	}
</style>
