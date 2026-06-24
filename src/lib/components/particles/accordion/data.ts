import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type AccordionEntry = {
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

const accordionEntries: AccordionEntry[] = [
	{ file: 'basic.svelte', name: 'Basic' },
	{ file: 'multiple-panels.svelte', name: 'Multiple Panels' },
	{ file: 'with-one-panel.svelte', name: 'With One Panel' },
	{ file: 'controlled.svelte', name: 'Controlled' }
];

const getData = ({ file, name }: AccordionEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace('.svelte', '');

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		components: ['accordion'],
		installation_url: `/ac/${id}.json`,
		code: {
			filename: file,
			code: rawModules[moduleKey]
		}
	};
};

export const accordionData: Data[] = accordionEntries.map(getData);
