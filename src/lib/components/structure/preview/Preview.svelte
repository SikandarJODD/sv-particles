<script lang="ts">
	import type { CodeType } from "$lib/components/extra/code/types";
	import { CopyButton } from "$lib/components/extra/copy-button";
	import type { Component } from "svelte";
	import ClipboardIcon from "@lucide/svelte/icons/clipboard";
	import InfoIcon from "@lucide/svelte/icons/info";
	import { Frame, FrameFooter, FramePanel, FrameTitle } from "$lib/components/ui/frame";
	import ViewCode from "./ViewCode.svelte";

	type Props = {
		preview: Component;
		code: CodeType | CodeType[];
		name: string;
		installation_url: string; // for installation command - will use it inside pmcommand
		folder_structure?: string | undefined; // for showcasing the folder-structue
	};
	let props: Props = $props();
	let PreviewComponent = $derived(props.preview);
</script>

<Frame class="w-full overflow-hidden border">
	<FramePanel class="flex  min-h-80 items-center justify-center overflow-hidden">
		<PreviewComponent />
	</FramePanel>
	<FrameFooter class="flex items-center justify-between pt-1.5 pr-0.5 pb-1 pl-2">
		<div class="flex items-center gap-1">
			<InfoIcon class="size-3.5 text-muted-foreground" />
			<FrameTitle class="text-xs font-normal text-neutral-500 dark:text-primary!"
				>{props.name}</FrameTitle
			>
		</div>
		<ViewCode {...props} />
	</FrameFooter>
</Frame>
