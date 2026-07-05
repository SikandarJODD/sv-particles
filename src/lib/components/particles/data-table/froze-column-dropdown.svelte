<script lang="ts" generics="Row extends Record<string, unknown>">
	import ArrowLeftToLineIcon from "@lucide/svelte/icons/arrow-left-to-line";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import PinOffIcon from "@lucide/svelte/icons/pin-off";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

	type ViewColumn<Row> = {
		index: number;
		name?: keyof Row | string;
		isFrozen?: boolean;
		element?: HTMLElement;
	};

	interface Props {
		column: ViewColumn<Row>;
		columns: ViewColumn<Row>[];
	}

	let { column, columns }: Props = $props();

	function syncFrozenColumns() {
		const table = column.element;
		if (!table) return;

		for (const current of columns) {
			table.querySelectorAll(`tr > *:nth-child(${current.index + 1})`).forEach((cell) => {
				const element = cell as HTMLElement;
				element.style.position = "";
				element.style.left = "";
				element.style.width = "";
			});
		}

		let left = 0;

		for (const current of columns) {
			if (!current.isFrozen) continue;

			const header = table.querySelector(
				`thead th:nth-child(${current.index + 1})`
			) as HTMLElement | null;

			if (!header) continue;

			const { width } = header.getBoundingClientRect();

			table.querySelectorAll(`tr > *:nth-child(${current.index + 1})`).forEach((cell) => {
				const element = cell as HTMLElement;
				element.style.position = "sticky";
				element.style.left = `${left}px`;
				element.style.width = `${width}px`;
			});

			left += width;
		}
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="ghost"
				size="icon-xs"
				class="-mr-1 shrink-0 rounded-full shadow-none hover:bg-background/80"
				aria-label={`${column.isFrozen ? "Frozen" : "Freeze"} options for column`}
				title={`${column.isFrozen ? "Frozen" : "Freeze"} options for column`}
			>
				{#if column.isFrozen}
					<PinOffIcon class="opacity-70" strokeWidth={1.7} />
				{:else}
					<EllipsisIcon class="opacity-60" strokeWidth={1.7} />
				{/if}
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content
		align="end"
		class="w-44 bg-popover/95 p-1 shadow-none backdrop-blur-sm supports-[backdrop-filter]:bg-popover/90"
	>
		<DropdownMenu.Label>{column.name}</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.CheckboxItem
			bind:checked={column.isFrozen}
			onCheckedChange={syncFrozenColumns}
			closeOnSelect={false}
		>
			<ArrowLeftToLineIcon class="opacity-60" strokeWidth={1.7} />
			Freeze column
		</DropdownMenu.CheckboxItem>
	</DropdownMenu.Content>
</DropdownMenu.Root>
