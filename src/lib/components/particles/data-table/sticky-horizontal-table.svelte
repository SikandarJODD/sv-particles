<script lang="ts">
	import StickyColumnDropdown from "$particles/data-table/sticky-column-dropdown.svelte";
	import * as Table from "$lib/components/ui/table";
	import {
		Datatable,
		TableHandler,
		type State,
		type TableHandlerInterface,
	} from "@vincjo/datatables/server";
	import { getProducts, type Product } from "$lib/api/products";

	type PinSide = "left" | "right" | null;
	type StickyColumn = {
		key: keyof Product;
		label: string;
		width: number;
		align?: "left" | "center" | "right";
		pin: PinSide;
	};
	type RenderedColumn = {
		column: StickyColumn;
		index: number;
	};

	const handler = new TableHandler<Product>([], { rowsPerPage: 10, selectBy: "id" });
	const table = handler as TableHandlerInterface<Product>;
	handler.load((state: State<Product>) => getProducts(state));
	handler.invalidate();

	let columns: StickyColumn[] = $state([
		{ key: "id", label: "ID", width: 120, pin: null },
		{ key: "title", label: "Title", width: 288, pin: null },
		{ key: "category", label: "Category", width: 240, align: "center", pin: null },
		{ key: "brand", label: "Brand", width: 220, align: "center", pin: null },
		{ key: "price", label: "Price", width: 160, align: "center", pin: null },
		{ key: "stock", label: "Stock", width: 128, align: "right", pin: null },
	]);
	let renderedColumns = $derived.by(() => {
		const left: RenderedColumn[] = [];
		const center: RenderedColumn[] = [];
		const right: RenderedColumn[] = [];

		columns.forEach((column, index) => {
			const item = { column, index };

			if (column.pin === "left") {
				left.push(item);
				return;
			}

			if (column.pin === "right") {
				right.push(item);
				return;
			}

			center.push(item);
		});

		return [...left, ...center, ...right];
	});

	function setPin(index: number, side: Exclude<PinSide, null>) {
		columns[index].pin = side;
	}

	function clearPin(index: number) {
		columns[index].pin = null;
	}

	function getLeftOffset(index: number) {
		let offset = 0;

		for (let current = 0; current < index; current += 1) {
			if (columns[current].pin === "left") {
				offset += columns[current].width;
			}
		}

		return offset;
	}

	function getRightOffset(index: number) {
		let offset = 0;

		for (let current = columns.length - 1; current > index; current -= 1) {
			if (columns[current].pin === "right") {
				offset += columns[current].width;
			}
		}

		return offset;
	}

	function getTableWidth() {
		return columns.reduce((total, column) => total + column.width, 0);
	}

	function getAlignmentClass(column: StickyColumn) {
		if (column.align === "center") return "text-center";
		if (column.align === "right") return "text-right";
		return "text-left";
	}

	function getPinnedClass(column: StickyColumn, isHeader = false) {
		if (!column.pin) return "";
		return isHeader
			? "z-20 bg-muted/90 backdrop-blur-sm"
			: "z-10 bg-background/95 backdrop-blur-sm";
	}

	function getBorderClass(renderIndex: number) {
		const current = renderedColumns[renderIndex];

		if (!current) return "";

		if (current.column.pin === "left") {
			const nextColumn = renderedColumns[renderIndex + 1];
			return nextColumn?.column.pin === "left" ? "" : "border-r border-border";
		}

		if (current.column.pin === "right") {
			const previousColumn = renderedColumns[renderIndex - 1];
			return previousColumn?.column.pin === "right" ? "" : "border-l border-border";
		}

		return "";
	}

	function getCellStyle(index: number, isHeader = false) {
		const column = columns[index];
		const styles = [`width: ${column.width}px`, `min-width: ${column.width}px`];

		if (column.pin === "left") {
			styles.push("position: sticky", `left: ${getLeftOffset(index)}px`);
		} else if (column.pin === "right") {
			styles.push("position: sticky", `right: ${getRightOffset(index)}px`);
		}

		styles.push(`z-index: ${column.pin ? (isHeader ? 20 : 10) : 0}`);

		return styles.join("; ");
	}

	function formatValue(product: Product, column: StickyColumn) {
		if (column.key === "price") {
			return `$${product.price.toFixed(2)}`;
		}

		return String(product[column.key]);
	}
</script>

<div class="mx-auto max-w-5xl py-10">
	<Datatable {table} headless>
		<div class="mt-2 overflow-hidden rounded-md border bg-background">
			<Table.Root
				class="table-fixed border-separate border-spacing-0"
				style={`width: ${getTableWidth()}px`}
			>
				<Table.Header>
					<Table.Row
						class="bg-muted/50 *:border-b *:border-border! hover:bg-transparent [&>:not(:last-child)]:border-r"
					>
						{#each renderedColumns as item, renderIndex (item.column.key)}
							<Table.Head
								class={`h-10 ${getAlignmentClass(item.column)} ${getPinnedClass(item.column, true)} ${getBorderClass(renderIndex)}`}
								style={getCellStyle(item.index, true)}
							>
								<div class="flex items-center justify-between gap-2">
									<span class="truncate">{item.column.label}</span>
									<StickyColumnDropdown
										label={item.column.label}
										side={item.column.pin}
										onStickLeft={() => setPin(item.index, "left")}
										onStickRight={() => setPin(item.index, "right")}
										onUnstick={() => clearPin(item.index)}
									/>
								</div>
							</Table.Head>
						{/each}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each handler.rows as product (product.id)}
						<Table.Row
							class="*:border-border not-last:*:border-b hover:bg-transparent [&>:not(:last-child)]:border-r"
						>
							{#each renderedColumns as item, renderIndex (item.column.key)}
								<Table.Cell
									class={`${item.column.key === "id" || item.column.key === "title" ? "font-medium" : ""} ${getAlignmentClass(item.column)} ${getPinnedClass(item.column)} ${getBorderClass(renderIndex)}`}
									style={getCellStyle(item.index)}
								>
									{formatValue(product, item.column)}
								</Table.Cell>
							{/each}
						</Table.Row>
					{:else}
						<Table.Row>
							<Table.Cell colspan={columns.length} class="py-6 text-center text-muted-foreground">
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
