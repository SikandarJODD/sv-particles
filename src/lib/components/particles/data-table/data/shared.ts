import type { SupportedLanguage } from "$lib/components/extra/code/shiki";
import { createBlockCodeTree, type BlockShowcaseItem } from "$lib/blocks/showcase";
import type { Component } from "svelte";
import docsSource from "../docs.md?raw";
import dataTableSource from "$lib/components/ui/data-table/data-table.svelte?raw";
import indexSource from "$lib/components/ui/data-table/index.ts?raw";
import inlineEditSource from "$lib/components/ui/data-table/inline-edit.svelte?raw";
import rowCountSource from "$lib/components/ui/data-table/row-count.svelte?raw";
import rowsPerPageSource from "$lib/components/ui/data-table/rows-per-page.svelte?raw";
import tablePaginationSource from "$lib/components/ui/data-table/table-pagination.svelte?raw";
import tableSearchSource from "$lib/components/ui/data-table/table-search.svelte?raw";
import thSortSource from "$lib/components/ui/data-table/th-sort.svelte?raw";

type ShowcaseFile = {
	id: string;
	path: string;
	code: string;
	lang: SupportedLanguage;
};

type CreateDataTableShowcaseOptions = {
	id: string;
	title: string;
	description: string;
	previewComponent: Component;
	defaultFileId: string;
	files: ShowcaseFile[];
};

const baseDataTableFiles: ShowcaseFile[] = [
	{
		id: "ui/data-table/index.ts",
		path: "ui/data-table/index.ts",
		code: indexSource,
		lang: "typescript",
	},
	{
		id: "ui/data-table/data-table.svelte",
		path: "ui/data-table/data-table.svelte",
		code: dataTableSource,
		lang: "svelte",
	},
	{
		id: "ui/data-table/table-search.svelte",
		path: "ui/data-table/table-search.svelte",
		code: tableSearchSource,
		lang: "svelte",
	},
	{
		id: "ui/data-table/rows-per-page.svelte",
		path: "ui/data-table/rows-per-page.svelte",
		code: rowsPerPageSource,
		lang: "svelte",
	},
	{
		id: "ui/data-table/table-pagination.svelte",
		path: "ui/data-table/table-pagination.svelte",
		code: tablePaginationSource,
		lang: "svelte",
	},
	{
		id: "ui/data-table/row-count.svelte",
		path: "ui/data-table/row-count.svelte",
		code: rowCountSource,
		lang: "svelte",
	},
	{
		id: "ui/data-table/th-sort.svelte",
		path: "ui/data-table/th-sort.svelte",
		code: thSortSource,
		lang: "svelte",
	},
	{
		id: "ui/data-table/inline-edit.svelte",
		path: "ui/data-table/inline-edit.svelte",
		code: inlineEditSource,
		lang: "svelte",
	},
	{
		id: "docs.md",
		path: "data-table/docs.md",
		code: docsSource,
		lang: "markdown",
	},
];

function withBaseDataTableFiles(files: ShowcaseFile[]) {
	const seen = new Set<string>();

	return [...files, ...baseDataTableFiles].filter((file) => {
		if (seen.has(file.id)) {
			return false;
		}

		seen.add(file.id);
		return true;
	});
}

export function createDataTableShowcase({
	id,
	title,
	description,
	previewComponent,
	defaultFileId,
	files,
}: CreateDataTableShowcaseOptions): BlockShowcaseItem {
	return {
		id,
		title,
		description,
		previewComponent,
		codeTree: createBlockCodeTree(defaultFileId, withBaseDataTableFiles(files)),
	};
}
