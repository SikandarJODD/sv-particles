import type { Data } from "$lib/types/structure";
import AlertDialogWithBareFooter from "./alert-dialog-with-bare-footer.svelte";
import AlertDialogWithBareFooterRaw from "./alert-dialog-with-bare-footer.svelte?raw";
import BasicAlertDialog from "./basic-alert-dialog.svelte";
import BasicAlertDialogRaw from "./basic-alert-dialog.svelte?raw";

export let alertDialogData: Data[] = [
	{
		id: "basic-alert-dialog",
		name: "Basic Alert Dialog",
		components: ["alert-dialog"],
		preview: BasicAlertDialog,
		code: {
			filename: "basic-alert-dialog.svelte",
			code: BasicAlertDialogRaw,
		},
		installation_url: "/r/basic-alert-dialog.json",
	},
	{
		id: "alert-dialog-with-bare-footer",
		name: "Alert Dialog with Bare Footer",
		components: ["alert-dialog"],
		preview: AlertDialogWithBareFooter,
		code: {
			filename: "alert-dialog-with-bare-footer.svelte",
			code: AlertDialogWithBareFooterRaw,
		},
		installation_url: "/r/alert-dialog-with-bare-footer.json",
	},
];
