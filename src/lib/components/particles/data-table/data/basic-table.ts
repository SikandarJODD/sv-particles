import { createBlockCodeTree, type BlockShowcaseItem } from "$lib/blocks/showcase";
import BasicTable from "../basic-table.svelte";
import basicTableSource from "../basic-table.svelte?raw";
import productApiSource from "../api/product.ts?raw";
import docsSource from "../docs.md?raw";

export const basicTableShowcase: BlockShowcaseItem = {
	id: "basic-data-table",
	title: "Basic Data Table",
	description: "Simple product table with search, sorting, and pagination.",
	previewComponent: BasicTable,
	codeTree: createBlockCodeTree("basic-table.svelte", [
		{
			id: "basic-table.svelte",
			path: "table/basic-table.svelte",
			code: basicTableSource,
			lang: "svelte",
		},
		{
			id: "api/product.ts",
			path: "api/product.ts",
			code: productApiSource,
			lang: "typescript",
		},
		{
			id: "docs.md",
			path: "docs.md",
			code: docsSource,
			lang: "text",
		},
	]),
};
