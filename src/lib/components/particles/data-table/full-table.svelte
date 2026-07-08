<script lang="ts">
	import Columns2Icon from "@lucide/svelte/icons/columns-2";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import * as Table from "$lib/components/ui/table";
	import { Button } from "$lib/components/ui/button";
	import {
		DataTable,
		RowCount,
		RowsPerPage,
		TablePagination,
		TableSearch,
		ThSort,
	} from "$lib/components/ui/data-table";
	import { getProducts, type Product } from "$lib/api/products";
	import {
		TableHandler,
		type State,
		type TableHandlerInterface,
	} from "@vincjo/datatables/server";

	const handler = new TableHandler<Product>([], { rowsPerPage: 10, selectBy: "id" });
	const table = handler as TableHandlerInterface<Product>;

	handler.load((state: State<Product>) => getProducts(state));
	handler.invalidate();

	const view = handler.createView([
		{ index: 0, name: "ID", isVisible: true },
		{ index: 1, name: "Title", isVisible: true },
		{ index: 2, name: "Category", isVisible: true },
		{ index: 3, name: "Brand", isVisible: true },
		{ index: 4, name: "Price", isVisible: true },
		{ index: 5, name: "Stock", isVisible: true },
	]);

	const visibleColumnCount = $derived(view.columns.filter((column) => column.isVisible).length);
	const emptyColspan = $derived(Math.max(visibleColumnCount + 1, 1));
	const someRowsSelected = $derived(handler.rowCount.selected > 0 && !handler.isAllSelected);
</script>

<div class="mx-auto w-full max-w-5xl py-10">
	<DataTable {table} headless>
		{#snippet header()}
			<div class="flex min-w-0 flex-1">
				<TableSearch {table} placeholder="Search products..." class="w-full sm:max-w-xs" />
			</div>

			<div class="flex flex-wrap items-center justify-end gap-2">
				<RowsPerPage {table} class="mx-0 my-0 shrink-0" />

				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Button {...props} variant="outline" size="sm">
								<Columns2Icon strokeWidth={1.6} />
								Columns
							</Button>
						{/snippet}
					</DropdownMenu.Trigger>

					<DropdownMenu.Content class="w-52" align="end">
						<DropdownMenu.Group>
							<DropdownMenu.Label>Toggle columns</DropdownMenu.Label>
							<DropdownMenu.Separator />

							{#each view.columns as column (column.index)}
								<DropdownMenu.CheckboxItem
									closeOnSelect={false}
									checked={column.isVisible}
									disabled={visibleColumnCount === 1 && column.isVisible}
									onCheckedChange={() => column.toggle?.()}
								>
									{column.name}
								</DropdownMenu.CheckboxItem>
							{/each}
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		{/snippet}

		<div class="mt-3 rounded-sm border bg-background ">
			<Table.Root class="min-w-full table-fixed">
				<Table.Header class=''>
					<Table.Row
					>
						<Table.Head class="w-12 bg-inherit border-b border-border">
							<Checkbox
								aria-label="Select all rows"
								checked={handler.isAllSelected}
								indeterminate={someRowsSelected}
								onCheckedChange={() => handler.selectAll()}
							/>
						</Table.Head>

						{#if view.columns[0]?.isVisible}
							<ThSort {table} field="id" class="w-20">ID</ThSort>
						{/if}

						{#if view.columns[1]?.isVisible}
							<ThSort {table} field="title" class="w-80 max-w-80 min-w-80"
								>Title</ThSort
							>
						{/if}

						{#if view.columns[2]?.isVisible}
							<ThSort {table} field="category">Category</ThSort>
						{/if}

						{#if view.columns[3]?.isVisible}
							<ThSort {table} field="brand">Brand</ThSort>
						{/if}

						{#if view.columns[4]?.isVisible}
							<ThSort {table} field="price" class="text-right" btnClass="justify-end">
								Price
							</ThSort>
						{/if}

						{#if view.columns[5]?.isVisible}
							<ThSort {table} field="stock" class="text-right" btnClass="justify-end">
								Stock
							</ThSort>
						{/if}
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{#each handler.rows as product (product.id)}
						<Table.Row
							data-state={handler.selected.includes(product.id)
								? "selected"
								: undefined}
							
						>
							<Table.Cell class="w-12">
								<Checkbox
									aria-label={`Select ${product.title}`}
									checked={handler.selected.includes(product.id)}
									onCheckedChange={() => handler.select(product.id)}
								/>
							</Table.Cell>

							{#if view.columns[0]?.isVisible}
								<Table.Cell class="font-medium">{product.id}</Table.Cell>
							{/if}

							{#if view.columns[1]?.isVisible}
								<Table.Cell class="w-80 max-w-80 min-w-80  font-medium">
									{product.title}
								</Table.Cell>
							{/if}

							{#if view.columns[2]?.isVisible}
								<Table.Cell>{product.category}</Table.Cell>
							{/if}

							{#if view.columns[3]?.isVisible}
								<Table.Cell>{product.brand}</Table.Cell>
							{/if}

							{#if view.columns[4]?.isVisible}
								<Table.Cell class="text-right">
									${product.price.toFixed(2)}
								</Table.Cell>
							{/if}

							{#if view.columns[5]?.isVisible}
								<Table.Cell class="text-right">{product.stock}</Table.Cell>
							{/if}
						</Table.Row>
					{:else}
						<Table.Row>
							<Table.Cell
								colspan={emptyColspan}
								class="py-8 text-center text-muted-foreground"
							>
								{#if handler.isLoading}
									Loading products...
								{:else}
									No products match the current table state.
								{/if}
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>

		{#snippet footer()}
			<RowCount {table} />
			<TablePagination {table} />
		{/snippet}
	</DataTable>
</div>
