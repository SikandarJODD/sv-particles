<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Svelte, TypeScript } from '$lib/icons';
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
		return TerminalIcon;
	});
</script>

<div class="rounded-lg border border-border">
	<div class="flex h-9 items-center justify-between border-b border-border px-6">
		<div class="flex items-center gap-2">
			<Icon class="size-4" />
			<span class="text-sm font-medium">{code.filename}</span>
		</div>
	</div>
	<div>
		<ScrollArea>
			<Code.Root lang="typescript" class="w-full border-none" {...code} />
		</ScrollArea>
	</div>
</div>
