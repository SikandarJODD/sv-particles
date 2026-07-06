// API DOCS: https://dummyjson.com/docs/products
import { type State } from "@vincjo/datatables/server";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

export type Product = {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	stock: number;
	brand: string;
};

type ProductsResponse = {
	products: Product[];
	total: number;
};

export async function getProductCategories(): Promise<string[]> {
	const response = await fetch(`${PRODUCTS_API_URL}/category-list`);

	if (!response.ok) {
		throw new Error(`Failed to fetch product categories: ${response.status}`);
	}

	return response.json();
}

export async function getProducts(state: State<Product>): Promise<Product[]> {
	const category = state.filters?.find((filter) => filter.field === "category")?.value;
	const params = new URLSearchParams({
		limit: String(state.rowsPerPage),
		skip: String(state.offset),
	});

	for (const filter of state.filters ?? []) {
		if (filter.field === "category" || filter.value == null || filter.value === "") {
			continue;
		}

		params.set(String(filter.field), String(filter.value));
	}

	const search = state.search?.trim();

	if (search && !category) {
		params.set("q", search);
	}

	if (state.sort?.field) {
		params.set("sortBy", String(state.sort.field));
	}

	if (state.sort?.direction) {
		params.set("order", state.sort.direction);
	}

	const endpoint = category
		? `${PRODUCTS_API_URL}/category/${encodeURIComponent(String(category))}`
		: search
			? `${PRODUCTS_API_URL}/search`
			: PRODUCTS_API_URL;
	const response = await fetch(`${endpoint}?${params.toString()}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch products: ${response.status}`);
	}

	const { products, total }: ProductsResponse = await response.json();
	state.setTotalRows(total);

	return products;
}
