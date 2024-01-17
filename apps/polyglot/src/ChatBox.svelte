<script lang="ts">
	import InstructionPanel from './Instructions.svelte';
	import MessageList from './MessageList.svelte';
	import LanguageSelection from './LanguageSelection.svelte';
	import MessageComposer from './MessageComposer.svelte';

	let language = 'fr';
	let messages: { text: string; sender: string }[] = [];

	function handleSend(event: CustomEvent<{ text: string }>) {
		const message = event.detail.text;
		const newMsg = {
			text: message,
			sender: 'me'
		};
		messages = [...messages, newMsg];

		translate(message, language);
	}

	function handleLanguageSelect(event: CustomEvent<{ language: string }>) {
		language = event.detail.language;
	}

	async function translate(text: string, language: string) {
		const response = await fetch('/translate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text, language })
		});

		const responseJson = await response.json();

		messages = [...messages, { sender: 'received', text: responseJson.translatedText }];
	}
</script>

<div class="translation-container">
	<InstructionPanel />
	<MessageList {messages} />
	<MessageComposer on:send={handleSend} />
	<LanguageSelection on:language-select={handleLanguageSelect} />
</div>

<style>
	.translation-container {
		border: 4px solid #252f42;
		border-radius: 15px;
		margin: 30px 20px;
		padding: 20px 10px;
	}
</style>
