<script lang="ts" generics="Row extends Record<string, unknown>">
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import ChevronUpIcon from "@lucide/svelte/icons/chevron-up";
	import { cn, type WithoutChildren } from "$lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLThAttributes } from "svelte/elements";
	import type { TableHandlerInterface } from "@vincjo/datatables/server";

	type Field<Row extends Record<string, unknown>> = Parameters<
		TableHandlerInterface<Row>["createSort"]
	>[0];

	type Props = WithoutChildren<HTMLThAttributes> & {
		table: TableHandlerInterface<Row>;
		field: Field<Row>;
		direction?: "asc" | "desc";
		children: Snippet;
		btnClass?: string;
	};

	let {
		table,
		field,
		direction = "asc",
		children,
		class: className,
		btnClass = "",
		...restProps
	}: Props = $props();

	// svelte-ignore state_referenced_locally
	const sort = table.createSort(field).init(direction);
</script>

<th
	scope="col"
	aria-sort={sort.isActive ? (sort.direction === "asc" ? "ascending" : "descending") : "none"}
	class={cn("h-10 border-b border-border bg-inherit p-0 text-left align-middle", className)}
	{...restProps}
>
	<button
		type="button"
		onclick={() => sort.set()}
		class={cn(
			"flex w-full cursor-pointer items-center justify-between gap-2 px-5 py-2 text-left text-sm leading-4 font-medium whitespace-nowrap text-foreground/80 transition-colors outline-none select-none hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
			sort.isActive && "text-foreground",
			btnClass
		)}
	>
		<span class="whitespace-pre-wrap">
			{@render children()}
		</span>

		{#if sort.direction === "asc"}
			<ChevronUpIcon
				class={cn(
					"size-4 shrink-0 transition-colors",
					sort.isActive ? "text-foreground" : "text-muted-foreground"
				)}
			/>
		{:else}
			<ChevronDownIcon
				class={cn(
					"size-4 shrink-0 transition-colors",
					sort.isActive ? "text-foreground" : "text-muted-foreground"
				)}
			/>
		{/if}
	</button>
</th>

<style>
	/*
	th {
		background: inherit;
		padding: 8px 20px;
		white-space: nowrap;
		font-size: 13px;
		user-select: none;
		border-bottom: 1px solid var(--grey, #e0e0e0);
		cursor: pointer;
	}
	th strong {
		white-space: pre-wrap;
		font-size: 13.5px;
		line-height: 16px;
		text-align: left;
	}
	div.flex {
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
	}
	span {
		padding-left: 8px;
	}
	span:before,
	span:after {
		border: 4px solid transparent;
		content: "";
		display: block;
		height: 0;
		width: 0;
	}
	span:before {
		border-bottom-color: var(--grey, #e0e0e0);
		margin-top: 2px;
	}
	span:after {
		border-top-color: var(--grey, #e0e0e0);
		margin-top: 2px;
	}
	th.active span.asc:before {
		border-bottom-color: var(--font-grey, #9e9e9e);
	}
	th.active span.desc:after {
		border-top-color: var(--font-grey, #9e9e9e);
	}
	*/
</style>
