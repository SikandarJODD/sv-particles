import BasicTable from "../basic-table.svelte";
import basicTableSource from "../basic-table.svelte?raw";
import productApiSource from "../api/product.ts?raw";
import docsSource from "../docs.md?raw";
import dataTableSource from "$lib/components/ui/data-table/data-table.svelte?raw";
import thSortSource from "$lib/components/ui/data-table/th-sort.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const basicTableShowcase = createDataTableShowcase({
	id: "basic-data-table",
	title: "Basic Data Table",
	description: "Basic product table example using a local API helper.",
	previewComponent: BasicTable,
	defaultFileId: "basic-table.svelte",
	files: [
		{
			id: "basic-table.svelte",
			path: "data-table/basic-table.svelte",
			code: basicTableSource,
			lang: "svelte",
		},
		{
			id: "api/product.ts",
			path: "data-table/api/product.ts",
			code: productApiSource,
			lang: "typescript",
		},
		{
			id: "ui/data-table/data-table.svelte",
			path: "ui/data-table/data-table.svelte",
			code: dataTableSource,
			lang: "svelte",
		},
		{
			id: "ui/data-table/th-sort.svelte",
			path: "ui/data-table/th-sort.svelte",
			code: thSortSource,
			lang: "svelte",
		},
		{
			id: "docs.md",
			path: "data-table/docs.md",
			code: docsSource,
			lang: "text",
		},
	],
});
