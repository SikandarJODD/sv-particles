<script lang="ts">
	import * as Table from "$lib/components/ui/table";
	import {
		Datatable,
		TableHandler,
		type State,
		type TableHandlerInterface,
	} from "@vincjo/datatables/server";
	import { getProducts, type Product } from "$lib/api/products";
	import { ThSearch, ThSort } from "$lib/components/ui/data-table";

	const handler = new TableHandler<Product>([], { rowsPerPage: 10 });
	const table = handler as TableHandlerInterface<Product>;

	handler.load((state: State<Product>) => getProducts(state));
	handler.invalidate();
</script>

<div class="mx-auto max-w-5xl py-10">
	<Datatable {table} headless>
		{#snippet header()}
			<ThSearch {table} placeholder="Search products..." class="w-60" />
		{/snippet}
		<div class="mt-2 overflow-hidden rounded-md border bg-background">
			<Table.Root class="table-fixed">
				<Table.Header>
					<Table.Row
						class="*:border-b *:border-border! hover:bg-transparent [&>:not(:last-child)]:border-r"
					>
						<Table.Head class="w-80">Title</Table.Head>
						<Table.Head>Category</Table.Head>
						<Table.Head>Brand</Table.Head>
						<Table.Head>Stock</Table.Head>
						<Table.Head>Price</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each handler.rows as product (product.id)}
						<Table.Row
							class="*:border-border not-last:*:border-b hover:bg-transparent [&>:not(:last-child)]:border-r"
						>
							<Table.Cell class="font-medium">{product.title}</Table.Cell>
							<Table.Cell>{product.category}</Table.Cell>
							<Table.Cell>{product.brand}</Table.Cell>
							<Table.Cell class="text-center">{product.stock}</Table.Cell>
							<Table.Cell class="text-right">${product.price.toFixed(2)}</Table.Cell>
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
	</Datatable>
</div>
