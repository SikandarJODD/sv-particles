import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type ButtonEntry = {
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

const buttonEntries: ButtonEntry[] = [
	{ file: 'default-button.svelte', name: 'Default Button' },
	{ file: 'outline-button.svelte', name: 'Outline Button' },
	{ file: 'secondary-button.svelte', name: 'Secondary Button' },
	{ file: 'destructive-button.svelte', name: 'Destructive Button' },
	{ file: 'ghost-button.svelte', name: 'Ghost Button' },
	{ file: 'link.svelte', name: 'Link' },
	{ file: 'extra-small.svelte', name: 'Extra Small' },
	{ file: 'small.svelte', name: 'Small' },
	{ file: 'large.svelte', name: 'Large' },
	{ file: 'disabled-button.svelte', name: 'Disabled Button' },
	{ file: 'icon.svelte', name: 'Icon' },
	{ file: 'small-icon.svelte', name: 'Small Icon' },
	{ file: 'large-icon.svelte', name: 'Large Icon' },
	{ file: 'button-with-icon.svelte', name: 'Button With Icon' },
	{ file: 'link-button.svelte', name: 'Link Button' },
	{ file: 'show-more-less-toggle.svelte', name: 'Show More Less Toggle' },
	{ file: 'back-link-chevron.svelte', name: 'Back Link Chevron' },
	{ file: 'card-style-button.svelte', name: 'Card Style Button' },
	{ file: 'direction-pad-controls.svelte', name: 'Direction Pad Controls' },
	{ file: 'outline-like-with-count.svelte', name: 'Outline Like With Count' },
	{ file: 'qr-code-signin.svelte', name: 'QR Code Signin' },
	{ file: 'with-avatar.svelte', name: 'With Avatar' },
	{ file: 'pill.svelte', name: 'Pill' },
	{ file: 'get-started.svelte', name: 'Get Started' },
	{ file: 'print-button.svelte', name: 'Print Button' },
	{ file: 'message-notification.svelte', name: 'Message Notification' },
	{ file: 'cancel-save.svelte', name: 'Cancel Save' },
	{ file: 'animated-status-dot.svelte', name: 'Animated Status Dot' },
	{ file: 'copy-button.svelte', name: 'Copy Button' },
	{ file: 'copy-with-feedback.svelte', name: 'Copy With Feedback' },
	{ file: 'rotating-toggle.svelte', name: 'Rotating Toggle' },
	{ file: 'hamburger-menu.svelte', name: 'Hamburger Menu' },
];

const getData = ({ file, name }: ButtonEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace('.svelte', '');

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		components: ['button'],
		installation_url: `/b/${id}.json`,
		code: {
			filename: file,
			code: rawModules[moduleKey]
		}
	};
};

export const buttonData: Data[] = buttonEntries.map(getData);