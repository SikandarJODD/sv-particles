<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Svelte, TypeScript } from '$lib/icons';
	import { CopyButton } from '../copy-button';
	import * as Code from './index';
	import type { CodeType } from './types';
	import TerminalIcon from '@lucide/svelte/icons/terminal';

	type Props = {
		code: CodeType;
	};
	let { code }: Props = $props();
	// let { code, lang = 'svelte', filename, hideLines = false, highlight }: CodeType = $props();

	let icons = {
		typescript: TypeScript,
		svelte: Svelte,
		bash: TerminalIcon
	};
	let Icon = $derived.by(() => {
		if (code.lang && code.lang in icons) {
			return icons[code.lang as keyof typeof icons];
		}
		return Svelte;
	});

	let isLargeCode = $derived.by(() => {
		if (code.code.split('\n').length > 15) return true;
		return false;
	});
</script>

<div class="relative overflow-hidden rounded-xl border border-border">
	<!-- Copy Button -->
	<CopyButton class="absolute top-2 right-2 z-40 text-muted-foreground" text={code.code} />
	<ScrollArea
		class={isLargeCode ? 'h-120 w-full' : 'h-fit'}
		scrollbarYClasses="h-[96%]! top-2! right-0.5!"
	>
		<Code.Root lang={code.lang || 'svelte'} class="size-full border-none" {...code}>
			<!-- <Code.CopyButton class="top-1 right-1" /> -->
		</Code.Root>
	</ScrollArea>
</div>
