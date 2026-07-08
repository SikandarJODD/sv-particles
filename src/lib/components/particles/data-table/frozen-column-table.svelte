<script lang="ts">
	import Columns2Icon from "@lucide/svelte/icons/columns-2";
	import FrozeColumnDropdown from "$particles/data-table/froze-column-dropdown.svelte";
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
			isFrozen: false,
		},
		{
			index: 1,
			name: "Title",
			isVisible: true,
			isFrozen: false,
		},
		{
			index: 2,
			name: "Category",
			isVisible: true,
			isFrozen: true,
		},
		{
			index: 3,
			name: "Brand",
			isVisible: true,
			isFrozen: false,
		},
		{
			index: 4,
			name: "Price",
			isVisible: true,
			isFrozen: false,
		},
		{
			index: 5,
			name: "Stock",
			isVisible: true,
			isFrozen: false,
		},
	]);

	const getFrozenState = (index: number) => (view.columns[index]?.isFrozen ? "true" : undefined);
</script>

<div class="mx-auto w-4xl py-10">
	<Datatable {table} headless>
		{#snippet header()}
			<div></div>
			<div>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Button
								{...props}
								variant="outline"
								size="sm"
								class="bg-background/80 shadow-none backdrop-blur-sm supports-[backdrop-filter]:bg-background/70"
							>
								<Columns2Icon strokeWidth={1.6} />
								View
							</Button>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content
						class="w-46 bg-popover/95 shadow-none backdrop-blur-sm supports-[backdrop-filter]:bg-popover/90"
						side="right"
					>
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
		<div
			class="mt-2 overflow-x-auto rounded-xl border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
		>
			<Table.Root class="table-fixed border-separate border-spacing-0">
				<Table.Header>
					<Table.Row
						class="bg-muted/50 *:border-b *:border-border! hover:bg-transparent [&>:not(:last-child)]:border-r"
					>
						<Table.Head
							class="w-30 data-[frozen=true]:z-20 data-[frozen=true]:bg-muted/90 data-[frozen=true]:backdrop-blur-sm"
							data-frozen={getFrozenState(0)}
						>
							<div class="flex items-center justify-between gap-2">
								<span class="truncate">ID</span>
								{#if view.columns[0]}
									<FrozeColumnDropdown
										column={view.columns[0]}
										columns={view.columns}
									/>
								{/if}
							</div>
						</Table.Head>
						<Table.Head
							class="w-72 data-[frozen=true]:z-20 data-[frozen=true]:bg-muted/90 data-[frozen=true]:backdrop-blur-sm"
							data-frozen={getFrozenState(1)}
						>
							<div class="flex items-center justify-between gap-2">
								<span class="truncate">Title</span>
								{#if view.columns[1]}
									<FrozeColumnDropdown
										column={view.columns[1]}
										columns={view.columns}
									/>
								{/if}
							</div>
						</Table.Head>
						<Table.Head
							class="w-80 text-center data-[frozen=true]:z-20 data-[frozen=true]:bg-muted/90 data-[frozen=true]:backdrop-blur-sm"
							data-frozen={getFrozenState(2)}
						>
							<div class="flex items-center justify-between gap-2">
								<span class="truncate">Category</span>
								{#if view.columns[2]}
									<FrozeColumnDropdown
										column={view.columns[2]}
										columns={view.columns}
									/>
								{/if}
							</div>
						</Table.Head>
						<Table.Head
							class="w-80 text-center data-[frozen=true]:z-20 data-[frozen=true]:bg-muted/90 data-[frozen=true]:backdrop-blur-sm"
							data-frozen={getFrozenState(3)}
						>
							<div class="flex items-center justify-between gap-2">
								<span class="truncate">Brand</span>
								{#if view.columns[3]}
									<FrozeColumnDropdown
										column={view.columns[3]}
										columns={view.columns}
									/>
								{/if}
							</div>
						</Table.Head>
						<Table.Head
							class="w-80 text-center data-[frozen=true]:z-20 data-[frozen=true]:bg-muted/90 data-[frozen=true]:backdrop-blur-sm"
							data-frozen={getFrozenState(4)}
						>
							<div class="flex items-center justify-between gap-2">
								<span class="truncate">Price</span>
								{#if view.columns[4]}
									<FrozeColumnDropdown
										column={view.columns[4]}
										columns={view.columns}
									/>
								{/if}
							</div>
						</Table.Head>
						<Table.Head
							class="w-80 text-right data-[frozen=true]:z-20 data-[frozen=true]:bg-muted/90 data-[frozen=true]:backdrop-blur-sm"
							data-frozen={getFrozenState(5)}
						>
							<div class="flex items-center justify-between gap-2">
								<span class="truncate">Stock</span>
								{#if view.columns[5]}
									<FrozeColumnDropdown
										column={view.columns[5]}
										columns={view.columns}
									/>
								{/if}
							</div>
						</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each handler.rows as product (product.id)}
						<Table.Row
							class="*:border-border not-last:*:border-b hover:bg-transparent [&>:not(:last-child)]:border-r"
						>
							<Table.Cell
								class="font-medium data-[frozen=true]:z-10 data-[frozen=true]:bg-background/90 data-[frozen=true]:backdrop-blur-sm"
								data-frozen={getFrozenState(0)}
							>
								{product.id}
							</Table.Cell>
							<Table.Cell
								class="font-medium data-[frozen=true]:z-10 data-[frozen=true]:bg-background/90 data-[frozen=true]:backdrop-blur-sm"
								data-frozen={getFrozenState(1)}
							>
								{product.title}
							</Table.Cell>
							<Table.Cell
								class="text-center data-[frozen=true]:z-10 data-[frozen=true]:bg-background/90 data-[frozen=true]:backdrop-blur-sm"
								data-frozen={getFrozenState(2)}
							>
								{product.category}
							</Table.Cell>
							<Table.Cell
								class="text-center data-[frozen=true]:z-10 data-[frozen=true]:bg-background/90 data-[frozen=true]:backdrop-blur-sm"
								data-frozen={getFrozenState(3)}
							>
								{product.brand}
							</Table.Cell>
							<Table.Cell
								class="text-center data-[frozen=true]:z-10 data-[frozen=true]:bg-background/90 data-[frozen=true]:backdrop-blur-sm"
								data-frozen={getFrozenState(4)}
							>
								${product.price.toFixed(2)}
							</Table.Cell>
							<Table.Cell
								class="text-right data-[frozen=true]:z-10 data-[frozen=true]:bg-background/90 data-[frozen=true]:backdrop-blur-sm"
								data-frozen={getFrozenState(5)}
							>
								{product.stock}
							</Table.Cell>
						</Table.Row>
					{:else}
						<Table.Row>
							<Table.Cell colspan={6} class="py-6 text-center text-muted-foreground">
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
