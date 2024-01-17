<script>
	import MessageItem from './MessageItem.svelte';

	/**
	 * @type {{ text: string, sender: string}[]}
	 */
	export let messages;
</script>

<div class="message-list">
	{#each messages as message}
		<MessageItem {message} on:send />
	{/each}
</div>

<style>
</style>
