import type { Component } from 'svelte';
import ButtonWithIcon from './button-with-icon.svelte';
import ButtonWithIconRaw from './button-with-icon.svelte?raw';
import type { CodeType } from '$lib/components/extra/code/types';

type Data = {
	preview: Component;
	code: CodeType | CodeType[];
	title: string;
	installation_url: string;
	folder_structure?: string;
};

export let data: Data = {
	preview: ButtonWithIcon,
	code: {
		code: ButtonWithIconRaw,
		filename: 'button-with-icon.svelte'
	},
	title: 'Button with Icon',
	installation_url: 'https://sv-particles.com/docs/installation'
};
