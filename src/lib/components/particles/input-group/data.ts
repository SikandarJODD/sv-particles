import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type InputGroupEntry = {
	file: string;
	name: string;
};

const previewModules = import.meta.glob('./*.svelte', {
	eager: true,
	import: 'default'
}) as Record<string, Component>;

const rawModules = import.meta.glob('./*.svelte', {
	eager: true,
	import: 'default',
	query: '?raw'
}) as Record<string, string>;

const inputGroupEntries: InputGroupEntry[] = [
	{ file: 'basic-input-group.svelte', name: 'Basic Input Group' },
	{ file: 'end-icon.svelte', name: 'End Icon' },
	{ file: 'start-text.svelte', name: 'Start Text' },
	{ file: 'end-text.svelte', name: 'End Text' },
	{ file: 'start-and-end-text.svelte', name: 'Start And End Text' },
	{ file: 'end-tooltip.svelte', name: 'End Tooltip' },
	{ file: 'keyboard-shortcut.svelte', name: 'Keyboard Shortcut' },
	{ file: 'with-inner-label.svelte', name: 'With Inner Label' },
	{ file: 'disabled.svelte', name: 'Disabled' },
	{ file: 'loading-spinner.svelte', name: 'Loading Spinner' },
	{ file: 'with-textarea.svelte', name: 'With Textarea' },
	{ file: 'with-icon-button.svelte', name: 'With Icon Button' },
	{ file: 'with-button.svelte', name: 'With Button' },
	{ file: 'with-badge.svelte', name: 'With Badge' },
	{ file: 'with-badge-and-menu.svelte', name: 'With Badge And Menu' },
	{ file: 'mini-editor-group-toggle.svelte', name: 'Mini Editor Group Toggle' },
	{ file: 'with-search.svelte', name: 'With Search' },
	{ file: 'with-start-tooltip.svelte', name: 'With Start Tooltip' },
	{ file: 'with-clear-button.svelte', name: 'With Clear Button' },
	{ file: 'search-input-with-loader-and-voice.svelte', name: 'Search Input With Loader And Voice' },
	{ file: 'with-character-count.svelte', name: 'With Character Count' },
	{ file: 'password-input-with-strength-inidicator.svelte', name: 'Password Input With Strength Indicator' },
	{ file: 'code-snippet-with-language-selector.svelte', name: 'Code Snippet With Language Selector' },
	{ file: 'message-composer-with-attachments.svelte', name: 'Message Composer With Attachments' },
	{ file: 'chat-input-with-voice-and-send-button.svelte', name: 'Chat Input With Voice And Send Button' },
	{ file: 'with-start-text-end-tooltip.svelte', name: 'With Start Text End Tooltip' },
	{ file: 'input-group-with-mimicking-url-bar.svelte', name: 'Input Group With Mimicking URL Bar' },
	{ file: 'with-keyboard-shortcut-search.svelte', name: 'With Keyboard Shortcut Search' },
	{ file: 'start-loading-spinner.svelte', name: 'Start Loading Spinner' },
	{ file: 'end-loading-spinner.svelte', name: 'End Loading Spinner' }
];

const getData = ({ file, name }: InputGroupEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace('.svelte', '');

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		components: ['input-group'],
		installation_url: `/ig/${id}.json`,
		code: {
			filename: file,
			code: rawModules[moduleKey]
		}
	};
};

export const inputGroupData: Data[] = inputGroupEntries.map(getData);
