import BasicTable from "../basic-table.svelte";
import basicTableSource from "../basic-table.svelte?raw";
import productApiSource from "../api/product.ts?raw";
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
	],
});
