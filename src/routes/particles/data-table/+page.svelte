<script lang="ts">
	import { BlockPreview } from "$lib/components/ui/layout";
	import { dataTableShowcases } from "$particles/data-table/data";
</script>

<section class="space-y-2">
	<h1 class="text-3xl font-semibold tracking-tight">Data Table</h1>
	<p class="max-w-3xl text-sm text-muted-foreground md:text-base">
		A simple data table example using `@vincjo/datatables` with a small product API helper.
	</p>
</section>

<div class="mt-6 space-y-10">
	{#each dataTableShowcases as showcase (showcase.id)}
		<BlockPreview {...showcase} />
	{/each}
</div>
