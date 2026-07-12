import productsApiSource from "$lib/api/products.ts?raw";
import FilterTable from "../filter-table.svelte";
import filterTableSource from "../filter-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const filterTableShowcase = createDataTableShowcase({
	id: "filter-data-table",
	title: "Filter Data Table",
	description: "Product table with category filtering backed by the product API.",
	previewComponent: FilterTable,
	defaultFileId: "filter-table.svelte",
	files: [
		{
			id: "filter-table.svelte",
			path: "data-table/filter-table.svelte",
			code: filterTableSource,
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
