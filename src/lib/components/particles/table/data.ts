import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type OtpEntry = {
    file: string;
    name: string;
    new?: boolean;
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

/*
"basic-table.svelte",
    "with-images.svelte",
    "without-horizontal-divider.svelte",
    "striped-table.svelte",
    "with-vertical-lines.svelte",
    "dense-table.svelte",
    "table-with-row-selection.svelte",
    "card-table.svelte",
    "vertical-table.svelte",
    "table-with-sticky-header.svelte",
    "unique-table.svelte",
    "basic-data-table-with-vincjo.svelte",
    "data-table-with-filters.svelte",
    "resizable-sortable-table.svelte",
    "pinnable-columns-table.svelte",
    "draggable-columns-table.svelte",
    "expanding-sub-rows-table.svelte",
    "paginated-table.svelte",
    "complex-table.svelte",
*/
const tableEntries: OtpEntry[] = [
    { file: 'basic-table.svelte', name: 'Basic Table' },
    { file: 'with-images.svelte', name: 'Table with Images' },
    { file: 'without-horizontal-divider.svelte', name: 'Table without Horizontal Divider' },
    { file: 'striped-table.svelte', name: 'Striped Table' },
];

const getData = ({ file, name }: OtpEntry): Data => {
    const moduleKey = `./${file}`;
    const id = file.replace('.svelte', '');

    return {
        id,
        name,
        preview: previewModules[moduleKey],
        components: ['input-otp'],
        installation_url: `/o/${id}.json`,
        code: {
            filename: file,
            code: rawModules[moduleKey]
        }
    };
};

export const tableData: Data[] = tableEntries.map(getData);
