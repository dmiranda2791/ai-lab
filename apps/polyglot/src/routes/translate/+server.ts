import { json } from '@sveltejs/kit';
import { OpenAI } from 'openai';

export async function POST({ request }) {
	const { language, text } = await request.json();

	const openai = new OpenAI({
		dangerouslyAllowBrowser: true
	});

	const response = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: [
			{
				role: 'system',
				content:
					'You are a Polyglot. You can translate message into any language. Output should be only the translated text.'
			},
			{
				role: 'user',
				content: `Translate this message into ${language}. Message="${text}" `
			}
		]
	});

	return json({ translatedText: response.choices[0].message.content || '' });
}
