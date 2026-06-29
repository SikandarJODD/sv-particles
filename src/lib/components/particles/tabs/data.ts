import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type TabEntry = {
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

const TabEntries: TabEntry[] = [
    { file: 'tab-1.svelte', name: 'Tab 1' },
    { file: 'tab-2.svelte', name: 'Tab 2' },
    { file: 'tab-3.svelte', name: 'Tab 3' },
    { file: 'tab-4.svelte', name: 'Tab 4' },
    { file: 'tab-5.svelte', name: 'Tab 5' },
    { file: 'tab-6.svelte', name: 'Tab 6' },
    { file: 'tab-7.svelte', name: 'Tab 7' },
    { file: 'tab-8.svelte', name: 'Tab 8' },
    { file: 'tab-9.svelte', name: 'Tab 9' },
    { file: 'tab-10.svelte', name: 'Tab 10' },
    { file: 'tab-11.svelte', name: 'Tab 11' },
    { file: 'tab-12.svelte', name: 'Tab 12' }
];

const getData = ({ file, name }: TabEntry): Data => {
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
        installation_url: `/tab/${id}.json`
    };
};

export const tabsData: Data[] = TabEntries.map(getData);
