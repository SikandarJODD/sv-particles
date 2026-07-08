<script lang="ts" generics="Row extends Record<string, unknown>">
	import { type Snippet } from "svelte";
	import type { TableHandlerInterface } from "@vincjo/datatables/server";
	import { RowCount, RowsPerPage, TablePagination, TableSearch } from "./index";
	import { cn } from "$lib/utils";

	type Props = {
		table: TableHandlerInterface<Row>;
		children: Snippet;
		basic?: boolean;
		headless?: boolean;
		header?: Snippet;
		footer?: Snippet;
	};

	let { table, children, basic = false, headless = false, header, footer }: Props = $props();

	// svelte-ignore state_referenced_locally
	table.on("change", () => (table.element ? (table.element.scrollTop = 0) : ""));
</script>

<section
	bind:clientWidth={table.clientWidth}
	class={cn("flex h-full flex-col rounded-[inherit] bg-inherit", !headless && "overflow-hidden")}
>
	<header class="flex w-full flex-wrap items-center justify-between gap-3">
		{#if header}
			{@render header()}
		{:else if basic}
			<TableSearch {table} />
			<RowsPerPage {table} />
		{/if}
	</header>

	<article
		bind:this={table.element}
		class={[
			"thin-scrollbar min-h-0 flex-1 overflow-auto bg-inherit",
			"[&_.hidden]:hidden",
			!headless &&
				"[&_table]:w-full [&_table]:border-separate [&_table]:border-spacing-0 [&_tbody_td]:border-b [&_tbody_td]:border-border [&_tbody_td]:bg-inherit [&_tbody_td]:px-5 [&_tbody_td]:py-1 [&_tbody_td:not(:last-child)]:border-r [&_tbody_tr]:bg-inherit [&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-muted/30 [&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10 [&_thead]:bg-inherit [&_thead_tr]:bg-inherit [&_thead_tr_th]:bg-inherit [&_thead_tr_th]:px-5 [&_thead_tr_th]:py-2 [&_u.highlight]:rounded-sm [&_u.highlight]:bg-amber-300/60 [&_u.highlight]:no-underline",
		]}
	>
		{@render children()}
	</article>

	<footer
		class={[
			"flex w-full flex-wrap items-center justify-between gap-3",
			basic && "border-t border-border pt-2",
		]}
	>
		{#if footer}
			{@render footer()}
		{:else if basic}
			<RowCount {table} />
			<TablePagination {table} />
		{/if}
	</footer>
</section>
