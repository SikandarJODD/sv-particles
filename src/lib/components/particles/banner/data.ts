import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type BannerEntry = {
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

const bannerEntries: BannerEntry[] = [
	{ file: 'banner-1.svelte', name: 'Banner 1' },
	{ file: 'banner-2.svelte', name: 'Banner 2' },
	{ file: 'banner-3.svelte', name: 'Banner 3' },
	{ file: 'banner-4.svelte', name: 'Banner 4' },
	{ file: 'banner-5.svelte', name: 'Banner 5' },
	{ file: 'banner-6.svelte', name: 'Banner 6' },
	{ file: 'banner-7.svelte', name: 'Banner 7' },
	{ file: 'banner-8.svelte', name: 'Banner 8' },
	{ file: 'banner-9.svelte', name: 'Banner 9' },
	{ file: 'banner-10.svelte', name: 'Banner 10' },
	{ file: 'banner-11.svelte', name: 'Banner 11' },
	{ file: 'banner-12.svelte', name: 'Banner 12' }
];

const getData = ({ file, name }: BannerEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace('.svelte', '');

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		code: {
			filename: file,
			code: rawModules[moduleKey]
		},
		installation_url: `/ba/${id}.json`
	};
};

export const bannerData: Data[] = bannerEntries.map(getData);
