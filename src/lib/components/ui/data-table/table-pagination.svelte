<script lang="ts" generics="Row extends DataRow">
	import * as Button from "$lib/components/ui/button";
	import * as ButtonGroup from "$lib/components/ui/button-group";
	import { cn } from "$lib/utils";
	import type { Row as DataRow, TableHandlerInterface } from "@vincjo/datatables/server";

	type Props = {
		table: TableHandlerInterface<Row>;
	};

	let { table }: Props = $props();

	const pagesWithEllipsis = $derived(table.pagesWithEllipsis as ReadonlyArray<number | null>);
	const isFirstPage = $derived(table.currentPage === 1);
	const isLastPage = $derived(table.currentPage === table.pageCount);
</script>

<section class="mx-4 my-2 flex">
	{#if table.pages === undefined}
		{@render nopage()}
	{:else if table.clientWidth < 600}
		{@render small()}
	{:else}
		{@render ellipsis()}
	{/if}
</section>

{#snippet nopage()}
	<ButtonGroup.Root>
		<Button.Root
			type="button"
			variant="outline"
			size="icon-sm"
			disabled={isFirstPage}
			aria-label="Previous page"
			onclick={() => table.setPage("previous")}
		>
			&#10094;
		</Button.Root>
		<ButtonGroup.Text class="h-8 min-w-20 px-3 text-muted-foreground">
			Page <span class="font-semibold text-foreground">{table.currentPage}</span>
		</ButtonGroup.Text>
		<Button.Root
			type="button"
			variant="outline"
			size="icon-sm"
			aria-label="Next page"
			onclick={() => table.setPage("next")}
		>
			&#10095;
		</Button.Root>
	</ButtonGroup.Root>
{/snippet}

{#snippet small()}
	<ButtonGroup.Root>
		<Button.Root
			type="button"
			variant="outline"
			size="icon-sm"
			disabled={isFirstPage}
			aria-label="First page"
			onclick={() => table.setPage(1)}
		>
			&#10092;&#10092;
		</Button.Root>
		<Button.Root
			type="button"
			variant="outline"
			size="icon-sm"
			disabled={isFirstPage}
			aria-label="Previous page"
			onclick={() => table.setPage("previous")}
		>
			&#10094;
		</Button.Root>
		<Button.Root
			type="button"
			variant="outline"
			size="icon-sm"
			disabled={isLastPage}
			aria-label="Next page"
			onclick={() => table.setPage("next")}
		>
			&#10095;
		</Button.Root>
		<Button.Root
			type="button"
			variant="outline"
			size="icon-sm"
			disabled={isLastPage}
			aria-label="Last page"
			onclick={() => table.setPage("last")}
		>
			&#10093;&#10093;
		</Button.Root>
	</ButtonGroup.Root>
{/snippet}

{#snippet ellipsis()}
	<ButtonGroup.Root>
		<Button.Root
			type="button"
			variant="outline"
			size="sm"
			class="min-w-18"
			disabled={isFirstPage}
			onclick={() => table.setPage("previous")}
		>
			{table.i18n.previous ?? "Previous"}
		</Button.Root>
		{#each pagesWithEllipsis as page, index (`${page ?? "ellipsis"}-${index}`)}
			{const isEllipsis = $derived(page === null)}
			{const isCurrentPage = $derived(table.currentPage === page)}

			<Button.Root
				type="button"
				variant={isCurrentPage ? "secondary" : "outline"}
				size="icon-sm"
				class={cn(
					"border border-border! text-muted-foreground",
					isEllipsis && "pointer-events-none hover:bg-background",
					isCurrentPage && "border-border text-primary"
				)}
				disabled={isEllipsis}
				aria-current={isCurrentPage ? "page" : undefined}
				onclick={() => page !== null && table.setPage(page)}
			>
				{isEllipsis ? "..." : page}
			</Button.Root>
		{/each}
		<Button.Root
			type="button"
			variant="outline"
			size="sm"
			class="min-w-18"
			disabled={isLastPage}
			onclick={() => table.setPage("next")}
		>
			{table.i18n.next ?? "Next"}
		</Button.Root>
	</ButtonGroup.Root>
{/snippet}
