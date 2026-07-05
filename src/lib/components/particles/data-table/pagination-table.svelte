<script lang="ts">
	import * as Table from "$lib/components/ui/table";
	import {
		Datatable,
		TableHandler,
		ThSort,
		type State,
		type TableHandlerInterface,
	} from "@vincjo/datatables/server";
	import { getProducts, type Product } from "$lib/api/products";
	import { TablePagination } from "$lib/components/ui/data-table";

	const handler = new TableHandler<Product>([], { rowsPerPage: 10 });
	const table = handler as TableHandlerInterface<Product>;

	handler.load((state: State<Product>) => getProducts(state));
	handler.invalidate();
</script>

<div class="mx-auto max-w-5xl py-10">
	<Datatable {table} headless>
		<div class="overflow-hidden rounded-md border bg-background">
			<Table.Root>
				<Table.Header>
					<Table.Row
						class="*:border-b *:border-border! hover:bg-transparent [&>:not(:last-child)]:border-r"
					>
						<ThSort {table} field="title">Title</ThSort>
						<ThSort {table} field="category">Category</ThSort>
						<ThSort {table} field="brand">Brand</ThSort>
						<ThSort {table} field="price">Price</ThSort>
						<ThSort {table} field="stock">Stock</ThSort>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each handler.rows as product (product.id)}
						<Table.Row
							class="*:border-border not-last:*:border-b hover:bg-transparent [&>:not(:last-child)]:border-r"
						>
							<Table.Cell class="font-medium">{product.title}</Table.Cell>
							<Table.Cell class="text-center">{product.category}</Table.Cell>
							<Table.Cell class="text-center">{product.brand}</Table.Cell>
							<Table.Cell class="text-center">${product.price.toFixed(2)}</Table.Cell>
							<Table.Cell class="text-right">{product.stock}</Table.Cell>
						</Table.Row>
					{:else}
						<Table.Row>
							<Table.Cell colspan={5} class="py-6 text-center text-muted-foreground">
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
			<div></div>
			<TablePagination {table} />
		{/snippet}
	</Datatable>
</div>
