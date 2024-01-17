<script>
	import SendButton from './SendButton.svelte';
	let newMessage = '';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function sendMessage() {
		if (newMessage.trim() !== '') {
			dispatch('send', { text: newMessage });
			newMessage = '';
		}
	}
</script>

<div class="message-composer">
	<textarea bind:value={newMessage} placeholder="Type your message here..."></textarea>
	<SendButton on:click={sendMessage} />
</div>

<style>
	.message-composer {
		display: flex;
		background-color: #f5f5f5;
		border: 1.5px solid #586e88;
		border-radius: 10px;
		padding: 10px;
		margin: 15px 0;
	}
	textarea {
		background-color: #f5f5f5;
		border: none;
		font-family: 'Poppins', sans-serif;
		flex: 1 1 auto;
	}
</style>
