import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type InputEntry = {
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

const inputEntries: InputEntry[] = [
	{ file: 'basic-input.svelte', name: 'Basic Input' },
	{ file: 'disabled-input.svelte', name: 'Disabled Input' },
	{ file: 'file-input.svelte', name: 'File Input' },
	{ file: 'with-label.svelte', name: 'With Label' },
	{ file: 'with-label-and-required-indicator.svelte', name: 'With Label And Required Indicator' },
	{ file: 'with-optional-label.svelte', name: 'With Optional Label' },
	{ file: 'readonly-input.svelte', name: 'Readonly Input' },
	{ file: 'pill-shaped.svelte', name: 'Pill Shaped' },
	{ file: 'button-using-group.svelte', name: 'Button Using Group' },
	{ file: 'characters-remaining-count.svelte', name: 'Characters Remaining Count' },
	{ file: 'password-input-with-strength-indicator.svelte', name: 'Password Input With Strength Indicator' },
	// { file: 'password-input-toggle.svelte', name: 'Password Input Toggle' },
	{ file: 'with-custom-border-background.svelte', name: 'With Custom Border Background' }
];

const getData = ({ file, name }: InputEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace('.svelte', '');

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		components: ['input'],
		installation_url: `/i/${id}.json`,
		code: {
			filename: file,
			code: rawModules[moduleKey]
		}
	};
};

export const inputData: Data[] = inputEntries.map(getData);
