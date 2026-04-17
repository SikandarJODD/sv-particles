import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type AvatarEntry = {
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

const avatarEntries: AvatarEntry[] = [
	{ file: 'basic-avatar.svelte', name: 'Basic Avatar' },
	{ file: 'fallback-only.svelte', name: 'Fallback Only' },
	{ file: 'with-different-sizes.svelte', name: 'With Different Sizes' },
	{ file: 'with-different-radii.svelte', name: 'With Different Radii' },
	{ file: 'overlapping-avatar-group.svelte', name: 'Overlapping Avatar Group' },
	{ file: 'small-overlapping-avatar-group.svelte', name: 'Small Overlapping Avatar Group' },
	{ file: 'large-overlapping-avatar-group.svelte', name: 'Large Overlapping Avatar Group' },
	{ file: 'with-user-icon-fallback.svelte', name: 'With User Icon Fallback' },
	{ file: 'with-emerald-status-dot.svelte', name: 'With Emerald Status Dot' },
	{ file: 'with-muted-status-dot.svelte', name: 'With Muted Status Dot' },
	{ file: 'rounded-with-emerald-status-dot.svelte', name: 'Rounded With Emerald Status Dot' },
	{ file: 'with-notification-badge.svelte', name: 'With Notification Badge' },
	{ file: 'with-rounded-notification-badge.svelte', name: 'With Rounded Notification Badge' },
	{ file: 'with-verify-badge.svelte', name: 'With Verify Badge' }
];

const getData = ({ file, name }: AvatarEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace('.svelte', '');

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		components: ['avatar'],
		installation_url: `/av/${id}.json`,
		code: {
			filename: file,
			code: rawModules[moduleKey]
		}
	};
};

export const avatarData: Data[] = avatarEntries.map(getData);
