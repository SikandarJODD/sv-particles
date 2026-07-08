import productsApiSource from "$lib/api/products.ts?raw";
import FrozeColumnDropdown from "../froze-column-dropdown.svelte?raw";
import FrozenColumnTable from "../frozen-column-table.svelte";
import frozenColumnTableSource from "../frozen-column-table.svelte?raw";
import { createDataTableShowcase } from "./shared";

export const frozenColumnTableShowcase = createDataTableShowcase({
	id: "frozen-column-data-table",
	title: "Frozen Column Data Table",
	description: "Scrollable product table with per-column freezing controls.",
	previewComponent: FrozenColumnTable,
	defaultFileId: "frozen-column-table.svelte",
	files: [
		{
			id: "frozen-column-table.svelte",
			path: "data-table/frozen-column-table.svelte",
			code: frozenColumnTableSource,
			lang: "svelte",
		},
		{
			id: "froze-column-dropdown.svelte",
			path: "data-table/froze-column-dropdown.svelte",
			code: FrozeColumnDropdown,
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
