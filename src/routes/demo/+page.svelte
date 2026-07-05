<script lang="ts">
	import BasicTable from "$lib/components/particles/data-table/basic-table.svelte";
	import ColumnVisiblityTable from "$particles/data-table/column-visiblity-table.svelte";
	import FrozenColumnTable from "$particles/data-table/frozen-column-table.svelte";
	import PaginationTable from "$particles/data-table/pagination-table.svelte";
	import SearchTable from "$particles/data-table/search-table.svelte";
	import SimpleTable from "$particles/data-table/simple-table.svelte";
	import SortableTable from "$particles/data-table/sortable-table.svelte";
	import StickyHorizontalTable from "$particles/data-table/sticky-horizontal-table.svelte";
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-5xl space-y-6">
		<StickyHorizontalTable />
		<FrozenColumnTable />
		<ColumnVisiblityTable />
		<PaginationTable />
		<BasicTable />
		<SimpleTable />
		<SortableTable />
		<SearchTable />
	</div>
</div>
