<script lang="ts">
	import * as Table from "$lib/components/ui/table";
	import {
		TableHandler,
		type State,
		type TableHandlerInterface,
	} from "@vincjo/datatables/server";
	import { getProducts, type Product } from "./api/product";
	import {
		DataTable,
		RowsPerPage,
		TablePagination,
		RowCount,
		ThSort,
	} from "$lib/components/ui/data-table";

	const handler = new TableHandler<Product>([], { rowsPerPage: 5 });
	const table = handler as TableHandlerInterface<Product>;

	handler.load((state: State<Product>) => getProducts(state));
	handler.invalidate();
</script>

<div class="mx-auto w-4xl py-10">
	<DataTable {table} headless>
		{#snippet header()}
			<div></div>
			<RowsPerPage {table} />
		{/snippet}
		<div class="mt-2 overflow-hidden rounded-md border bg-background">
			<Table.Root class='table-fixed'>
				<Table.Header>
					<Table.Row class="hover:bg-transparent">
						<ThSort {table} class='w-90' field="title">Product</ThSort>
						<ThSort {table} field="category">Category</ThSort>
						<ThSort {table} field="price">Price</ThSort>
						<ThSort {table} field="stock">Stock</ThSort>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{#each handler.rows as product (product.id)}
						<Table.Row>
							<Table.Cell class="font-medium">{product.title}</Table.Cell>
							<Table.Cell class="capitalize">{product.category}</Table.Cell>
							<Table.Cell>${product.price.toFixed(2)}</Table.Cell>
							<Table.Cell>{product.stock}</Table.Cell>
						</Table.Row>
					{:else}
						<Table.Row>
							<Table.Cell colspan={4} class="py-8 text-center text-muted-foreground">
								{#if handler.isLoading}
									Loading products...
								{:else}
									No products found.
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
