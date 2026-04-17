import type { Data } from "$lib/types/structure";
import BasicKbd from "./basic-kbd.svelte";
import BasicKbdRaw from "./basic-kbd.svelte?raw";

export let kbdData: Data[] = [
	{
		id: "default-kbd",
		name: "Keyboard Shortcut",
		components: ["kbd"],
		preview: BasicKbd,
		code: {
			filename: "basic-kbd.svelte",
			code: BasicKbdRaw,
		},
		installation_url: "/r/default-kbd.json",
	},
];
