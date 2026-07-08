<script lang="ts">
	import Columns2Icon from "@lucide/svelte/icons/columns-2";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Table from "$lib/components/ui/table";
	import {
		Datatable,
		TableHandler,
		type State,
		type TableHandlerInterface,
	} from "@vincjo/datatables/server";
	import { getProducts, type Product } from "$lib/api/products";
	import { Button } from "$lib/components/ui/button";

	const handler = new TableHandler<Product>([], { rowsPerPage: 10, selectBy: "id" });
	const table = handler as TableHandlerInterface<Product>;
	handler.load((state: State<Product>) => getProducts(state));
	handler.invalidate();

	const view = handler.createView([
		{
			index: 0,
			name: "ID",
			isVisible: true,
		},
		{
			index: 1,
			name: "Title",
			isVisible: true,
		},
		{
			index: 2,
			name: "Category",
			isVisible: true,
		},
		{
			index: 3,
			name: "Brand",
			isVisible: true,
		},
		{
			index: 4,
			name: "Price",
			isVisible: true,
		},
		{
			index: 5,
			name: "Stock",
			isVisible: true,
		},
	]);
</script>

<div class="mx-auto w-4xl py-10">
	<Datatable {table} headless>
		{#snippet header()}
			<div></div>
			<div>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Button {...props} variant="outline" size="sm">
								<Columns2Icon strokeWidth={1.6} />
								View
							</Button>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-46 shadow-none" side="right">
						<DropdownMenu.Group>
							<DropdownMenu.Label>Column Visibility</DropdownMenu.Label>
							<DropdownMenu.Separator />
							{#each view.columns as column (column.index)}
								<DropdownMenu.CheckboxItem
									closeOnSelect={false}
									checked={column.isVisible}
									onCheckedChange={() => {
										column.toggle?.();
									}}
								>
									{column.name}
								</DropdownMenu.CheckboxItem>
							{/each}
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		{/snippet}
		<div class="mt-2 overflow-hidden rounded-md border bg-background">
			<Table.Root>
				<Table.Header>
					<Table.Row
						class="*:border-b *:border-border! hover:bg-transparent [&>:not(:last-child)]:border-r"
					>
						<Table.Head>ID</Table.Head>
						<Table.Head>Title</Table.Head>
						<Table.Head class="text-center">Category</Table.Head>
						<Table.Head class="text-center">Brand</Table.Head>
						<Table.Head class="text-center">Price</Table.Head>
						<Table.Head class="text-right">Stock</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each handler.rows as product (product.id)}
						<Table.Row
							class="*:border-border not-last:*:border-b hover:bg-transparent [&>:not(:last-child)]:border-r"
						>
							<Table.Cell class="font-medium">{product.id}</Table.Cell>
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
	</Datatable>
</div>
