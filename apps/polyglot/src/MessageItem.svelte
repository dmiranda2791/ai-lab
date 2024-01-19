<script>
	/**
	 * @type {{ sender: string; text: any; }}
	 */
	export let message;
</script>

<div class="message-item {message.sender === 'me' ? 'sent' : 'received'}">
	<p>{message.text}</p>
</div>

<style>
	.message-item {
		margin: 15px 0;
		padding: 10px 10px;
		font-family: 'Poppins', sans-serif;
		font-weight: 800;
		color: #ffffff;
	}
	.message-item p {
		margin: 0;
	}
	.sent {
		background-color: #65da65;
		text-align: right;
		border-radius: 2px 10px 10px 10px;
	}
	.received {
		background-color: #035a9d;
		border-radius: 10px 2px 10px 10px;
	}
</style>
