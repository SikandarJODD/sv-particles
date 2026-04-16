<script lang="ts">
	import type { CodeType } from '$lib/components/extra/code/types';
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import PreviewContent from './PreviewContent.svelte';
	type Props = {
		installation_url: string;
		code: CodeType | CodeType[];
		folder_structure?: string | undefined;
	};
	let { installation_url, code, folder_structure = '' }: Props = $props();
</script>

<Drawer.Root shouldScaleBackground={false} direction="right">
	<Drawer.Trigger>
		<Button size="sm" variant="secondary">View Code</Button>
	</Drawer.Trigger>
	<Drawer.Content class="data-[vaul-drawer-direction=right]:sm:max-w-4xl">
		<PreviewContent {installation_url} {code} {folder_structure} />
	</Drawer.Content>
</Drawer.Root>
