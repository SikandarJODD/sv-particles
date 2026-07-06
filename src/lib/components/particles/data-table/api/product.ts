import { type State } from "@vincjo/datatables/server";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

export type Product = {
	id: number;
	title: string;
	category: string;
	price: number;
	stock: number;
};

type ProductsResponse = {
	products: Product[];
	total: number;
};

export async function getProducts(state: State<Product>): Promise<Product[]> {
	const params = new URLSearchParams({
		limit: String(state.rowsPerPage),
		skip: String(state.offset),
	});

	const search = state.search?.trim();

	if (search) {
		params.set("q", search);
	}

	if (state.sort?.field) {
		params.set("sortBy", String(state.sort.field));
	}

	if (state.sort?.direction) {
		params.set("order", state.sort.direction);
	}

	const endpoint = search ? `${PRODUCTS_API_URL}/search` : PRODUCTS_API_URL;
	const response = await fetch(`${endpoint}?${params.toString()}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch products: ${response.status}`);
	}

	const { products, total }: ProductsResponse = await response.json();
	state.setTotalRows(total);

	return products;
}
