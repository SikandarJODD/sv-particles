import productsApiSource from "$lib/api/products.ts?raw";
import docsSource from "../docs.md?raw";
import SortableTable from "../sortable-table.svelte";
import sortableTableSource from "../sortable-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const sortableTableShowcase = createDataTableShowcase({
	id: "sortable-data-table",
	title: "Sortable Data Table",
	description: "Fixed-width product table with sortable column headers.",
	previewComponent: SortableTable,
	defaultFileId: "sortable-table.svelte",
	files: [
		{
			id: "sortable-table.svelte",
			path: "data-table/sortable-table.svelte",
			code: sortableTableSource,
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
