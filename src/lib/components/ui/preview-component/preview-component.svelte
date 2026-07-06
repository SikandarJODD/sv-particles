<script lang="ts">
	import type { Snippet } from "svelte";
	import { Tabs, TabsContent, TabsList, TabsTrigger } from "$lib/components/ui/tabs";
	import { cn } from "$lib/utils.js";

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className }: Props = $props();
</script>

<Tabs value="preview" class={cn("w-full gap-3", className)}>
	<TabsList>
		<TabsTrigger value="preview">Preview</TabsTrigger>
		<TabsTrigger value="code">Code</TabsTrigger>
	</TabsList>

	<TabsContent value="preview" class="rounded-lg border p-4">
		{@render children?.()}
	</TabsContent>

	<TabsContent value="code" class="rounded-lg border p-4"></TabsContent>
</Tabs>
