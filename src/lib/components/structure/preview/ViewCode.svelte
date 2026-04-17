<script lang="ts">
	import type { CodeType } from "$lib/components/extra/code/types";
	import { Button } from "$lib/components/ui/button";
	import * as Drawer from "$lib/components/ui/drawer/index.js";
	import PreviewContent from "./PreviewContent.svelte";
	type Props = {
		installation_url: string;
		code: CodeType | CodeType[];
		folder_structure?: string | undefined;
	};
	let { installation_url, code, folder_structure = "" }: Props = $props();
</script>

<Drawer.Root shouldScaleBackground={false} direction="right" handleOnly>
	<Drawer.Trigger>
		<Button
			size="sm"
			variant="outline"
			class="rounded-lg bg-transparent text-xs hover:bg-muted!"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><!-- Icon from Huge Icons by Hugeicons - undefined --><g
					fill="none"
					stroke="#888888"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					><path
						d="m18 16l1.84 1.586c.773.667 1.16 1 1.16 1.414s-.387.747-1.16 1.414L18 22m-4-6l-1.84 1.586c-.773.667-1.16 1-1.16 1.414s.387.747 1.16 1.414L14 22"
					/><path
						d="M20 13.003V7.82c0-1.694 0-2.54-.268-3.217c-.43-1.087-1.342-1.945-2.497-2.35C16.517 2 15.617 2 13.818 2c-3.148 0-4.722 0-5.98.441c-2.02.71-3.615 2.211-4.37 4.114C3 7.74 3 9.221 3 12.185v2.546c0 3.07 0 4.605.848 5.672c.243.305.53.576.855.805c.912.643 2.147.768 4.297.792"
					/><path
						d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"
					/></g
				></svg
			>
			View code</Button
		>
	</Drawer.Trigger>
	<Drawer.Content class="data-[vaul-drawer-direction=right]:sm:max-w-4xl">
		<div data-vaul-no-drag data-view-code-selectable>
			<PreviewContent {installation_url} {code} {folder_structure} />
		</div>
	</Drawer.Content>
</Drawer.Root>

<style>
	:global([data-vaul-drawer] [data-view-code-selectable]),
	:global([data-vaul-drawer] [data-view-code-selectable] pre),
	:global([data-vaul-drawer] [data-view-code-selectable] code),
	:global([data-vaul-drawer] [data-view-code-selectable] .shiki),
	:global([data-vaul-drawer] [data-view-code-selectable] .shiki *) {
		user-select: text !important;
	}
</style>
