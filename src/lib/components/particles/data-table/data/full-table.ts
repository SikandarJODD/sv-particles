import productsApiSource from "$lib/api/products.ts?raw";
import FullTable from "../full-table.svelte";
import fullTableSource from "../full-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const fullTableShowcase = createDataTableShowcase({
	id: "full-data-table",
	title: "Full Data Table",
	description:
		"Complete product table with search, sorting, rows-per-page, pagination, row count, and column visibility.",
	previewComponent: FullTable,
	defaultFileId: "full-table.svelte",
	files: [
		{
			id: "full-table.svelte",
			path: "data-table/full-table.svelte",
			code: fullTableSource,
			lang: "svelte",
		},
		{
			id: "lib/api/products.ts",
			path: "api/products.ts",
			code: productsApiSource,
			lang: "typescript",
		},
	],
});
