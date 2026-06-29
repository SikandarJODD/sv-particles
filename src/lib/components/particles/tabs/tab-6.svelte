<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<Tabs.Root value="tab-1" class="items-center">
	<Tabs.List class="gap-0 bg-transparent px-0">
		<Tabs.Trigger
			value="tab-1"
			class="rounded-sm border! border-muted first:rounded-r-none! data-active:bg-muted! py-4!"
			>Tab 1</Tabs.Trigger
		>
		<Tabs.Trigger value="tab-2" class="rounded-none! border-y! border-y-muted data-active:border-x data-active:bg-muted! py-4!"
			>Tab 2</Tabs.Trigger
		>
		<Tabs.Trigger
			value="tab-3"
			class="rounded-sm border! border-muted last:rounded-l-none data-active:bg-muted! py-4!"
			>Tab 3</Tabs.Trigger
		>
	</Tabs.List>
	<Tabs.Content value="tab-1">
		<p class="p-4 text-center text-xs text-muted-foreground">Content for Tab 1</p>
	</Tabs.Content>
	<Tabs.Content value="tab-2">
		<p class="p-4 text-center text-xs text-muted-foreground">Content for Tab 2</p>
	</Tabs.Content>
	<Tabs.Content value="tab-3">
		<p class="p-4 text-center text-xs text-muted-foreground">Content for Tab 3</p>
	</Tabs.Content>
</Tabs.Root>
