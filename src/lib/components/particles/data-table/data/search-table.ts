import productsApiSource from "$lib/api/products.ts?raw";
import SearchTable from "../search-table.svelte";
import searchTableSource from "../search-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const searchTableShowcase = createDataTableShowcase({
	id: "search-data-table",
	title: "Search Data Table",
	description: "Product table with built-in search controls and server-backed results.",
	previewComponent: SearchTable,
	defaultFileId: "search-table.svelte",
	files: [
		{
			id: "search-table.svelte",
			path: "data-table/search-table.svelte",
			code: searchTableSource,
			lang: "svelte",
		},
		{
			id: "lib/api/products.ts",
			path: "lib/api/products.ts",
			code: productsApiSource,
			lang: "typescript",
		},
	],
});
