import productsApiSource from "$lib/api/products.ts?raw";
import PaginationTable from "../pagination-table.svelte";
import paginationTableSource from "../pagination-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const paginationTableShowcase = createDataTableShowcase({
	id: "pagination-data-table",
	title: "Pagination Data Table",
	description: "Product table with a dedicated pagination footer.",
	previewComponent: PaginationTable,
	defaultFileId: "pagination-table.svelte",
	files: [
		{
			id: "pagination-table.svelte",
			path: "data-table/pagination-table.svelte",
			code: paginationTableSource,
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
