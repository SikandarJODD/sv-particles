import type { Component } from "svelte";
import type { Data } from "$lib/types/structure";

type MenuEntry = {
	file: string;
	name: string;
};

const previewModules = import.meta.glob("./*.svelte", {
	eager: true,
	import: "default",
}) as Record<string, Component>;

const rawModules = import.meta.glob("./*.svelte", {
	eager: true,
	import: "default",
	query: "?raw",
}) as Record<string, string>;

const menuEntries: MenuEntry[] = [
	{ file: "basic-menu.svelte", name: "Basic Menu" },
	{ file: "with-checkbox.svelte", name: "With Checkbox" },
	// { file: "with-checkbox-items-as-switches.svelte", name: "With Checkbox Items As Switches" },
	{ file: "with-radio-group.svelte", name: "With Radio Group" },
	{ file: "with-link.svelte", name: "With Link" },
	{ file: "with-group-labels.svelte", name: "With Group Labels" },
	{ file: "nested-menu.svelte", name: "Nested Menu" },
	{ file: "close-on-click.svelte", name: "Close On Click" },
];

const getData = ({ file, name }: MenuEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace(".svelte", "");

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		components: ["menu"],
		installation_url: `/m/${id}.json`,
		code: {
			filename: file,
			code: rawModules[moduleKey],
		},
	};
};

export const menuData: Data[] = menuEntries.map(getData);
