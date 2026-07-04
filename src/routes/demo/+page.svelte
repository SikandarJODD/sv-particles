<script lang="ts">
	import BasicTable from "$lib/components/particles/data-table/basic-table.svelte";
	import SearchTable from "$particles/data-table/search-table.svelte";
	import SimpleTable from "$particles/data-table/simple-table.svelte";
	import SortableTable from "$particles/data-table/sortable-table.svelte";
</script>

<div class="flex h-screen items-center justify-center">
	<div class="w-full max-w-5xl space-y-6">
		<BasicTable />
		<SimpleTable />
		<SortableTable />
		<SearchTable />
	</div>
</div>
