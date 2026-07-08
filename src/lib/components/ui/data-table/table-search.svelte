<script lang="ts" generics="Row extends Record<string, unknown>">
	import SearchIcon from "@lucide/svelte/icons/search";
	import * as InputGroup from "$lib/components/ui/input-group";
	import { Spinner } from "$lib/components/ui/spinner";
	import { cn } from "$lib/utils.js";
	import type { TableHandlerInterface } from "@vincjo/datatables/server";

	type Props = {
		table: TableHandlerInterface<Row>;
		placeholder?: string;
		class?: string;
	};
	let { table, placeholder = "Search...", class: className }: Props = $props();

	// svelte-ignore state_referenced_locally
	const search = table.createSearch();
</script>

<InputGroup.Root class={cn("max-w-xs", className)}>
	<InputGroup.Addon>
		{#if "isLoading" in table && table.isLoading && search.value.length > 0}
			<Spinner />
		{:else}
			<SearchIcon />
		{/if}
	</InputGroup.Addon>

	<InputGroup.Input
		type="search"
		{placeholder}
		bind:value={search.value}
		oninput={() => {
			search.set();
		}}
	/>
</InputGroup.Root>
