<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { getProductCategories, getProducts, type Product } from "$lib/api/products";
	import * as Select from "$lib/components/ui/select";
	import * as Table from "$lib/components/ui/table";
	import { onMount } from "svelte";
	import {
		Datatable,
		TableHandler,
		type State,
		type TableHandlerInterface,
	} from "@vincjo/datatables/server";
	import { ThSort } from "$lib/components/ui/data-table";

	const ALL_CATEGORIES = "__all__";

	const handler = new TableHandler<Product>([], { rowsPerPage: 10 });
	const table = handler as TableHandlerInterface<Product>;
	const categoryFilter = handler.createFilter("category");

	let categories = $state<string[]>([]);
	let isLoadingCategories = $state(true);
	let selectedCategory = $state(ALL_CATEGORIES);

	onMount(async () => {
		try {
			categories = await getProductCategories();
		} finally {
			isLoadingCategories = false;
		}
	});

	function formatCategory(category: string) {
		return category
			.split("-")
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join(" ");
	}

	function setCategory(category: string) {
		selectedCategory = category;

		if (category === ALL_CATEGORIES) {
			categoryFilter.clear();
			handler.setPage(1);
			return;
		}

		categoryFilter.value = category;
		categoryFilter.set();
	}

	handler.load((state: State<Product>) => getProducts(state));
	handler.invalidate();
</script>

<div class="mx-auto max-w-5xl py-10">
	<Datatable {table} headless>
		{#snippet header()}
			<Select.Root
				type="single"
				value={selectedCategory}
				items={[
					{ value: ALL_CATEGORIES, label: "All categories" },
					...categories.map((category) => ({
						value: category,
						label: formatCategory(category),
					})),
				]}
				onValueChange={setCategory}
			>
				<Select.Trigger class="min-w-56">
					<SelectPrimitive.Value
						placeholder={isLoadingCategories
							? "Loading categories..."
							: "All categories"}
					/>
				</Select.Trigger>
				<Select.Content class="h-80">
					<Select.Group>
						<Select.Label>Product category</Select.Label>
						<Select.Item value={ALL_CATEGORIES} label="All categories">
							All categories
						</Select.Item>
						{#if !isLoadingCategories}
							{#each categories as category (category)}
								<Select.Item value={category} label={formatCategory(category)}>
									{formatCategory(category)}
								</Select.Item>
							{/each}
						{/if}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		{/snippet}
		<div class="mt-2 overflow-hidden rounded-md border bg-background">
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
	</Datatable>
</div>
