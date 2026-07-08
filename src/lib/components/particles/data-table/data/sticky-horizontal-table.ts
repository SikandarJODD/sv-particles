import productsApiSource from "$lib/api/products.ts?raw";
import StickyHorizontalTable from "../sticky-horizontal-table.svelte";
import stickyColumnDropdownSource from "../sticky-column-dropdown.svelte?raw";
import stickyHorizontalTableSource from "../sticky-horizontal-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const stickyHorizontalTableShowcase = createDataTableShowcase({
	id: "sticky-horizontal-data-table",
	title: "Sticky Horizontal Data Table",
	description: "Horizontally scrollable table with left and right pinned columns.",
	previewComponent: StickyHorizontalTable,
	defaultFileId: "sticky-horizontal-table.svelte",
	files: [
		{
			id: "sticky-horizontal-table.svelte",
			path: "data-table/sticky-horizontal-table.svelte",
			code: stickyHorizontalTableSource,
			lang: "svelte",
		},
		{
			id: "sticky-column-dropdown.svelte",
			path: "data-table/sticky-column-dropdown.svelte",
			code: stickyColumnDropdownSource,
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
