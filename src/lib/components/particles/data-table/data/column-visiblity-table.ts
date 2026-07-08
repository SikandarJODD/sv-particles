import productsApiSource from "$lib/api/products.ts?raw";
import ColumnVisiblityTable from "../column-visiblity-table.svelte";
import columnVisiblityTableSource from "../column-visiblity-table.svelte?raw";
import docsSource from "../docs.md?raw";
import { createDataTableShowcase } from "./shared";

export const columnVisiblityTableShowcase = createDataTableShowcase({
	id: "column-visiblity-data-table",
	title: "Column Visibility Data Table",
	description: "Product table with a view menu for toggling visible columns.",
	previewComponent: ColumnVisiblityTable,
	defaultFileId: "column-visiblity-table.svelte",
	files: [
		{
			id: "column-visiblity-table.svelte",
			path: "data-table/column-visiblity-table.svelte",
			code: columnVisiblityTableSource,
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
