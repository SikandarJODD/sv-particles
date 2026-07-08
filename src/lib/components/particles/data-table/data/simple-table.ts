import productsApiSource from "$lib/api/products.ts?raw";
import docsSource from "../docs.md?raw";
import SimpleTable from "../simple-table.svelte";
import simpleTableSource from "../simple-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const simpleTableShowcase = createDataTableShowcase({
	id: "simple-data-table",
	title: "Simple Data Table",
	description: "Minimal sortable product table with the shared server handler.",
	previewComponent: SimpleTable,
	defaultFileId: "simple-table.svelte",
	files: [
		{
			id: "simple-table.svelte",
			path: "data-table/simple-table.svelte",
			code: simpleTableSource,
			lang: "svelte",
		},
		{
			id: "lib/api/products.ts",
			path: "lib/api/products.ts",
			code: productsApiSource,
			lang: "typescript",
		},
		{
			id: "docs.md",
			path: "data-table/docs.md",
			code: docsSource,
			lang: "text",
		},
	],
});
