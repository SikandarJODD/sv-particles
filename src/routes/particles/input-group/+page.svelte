<script lang="ts">
	import Preview from '$lib/components/structure/preview/Preview.svelte';
	import { inputGroupData } from '$particles/input-group/data';
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each inputGroupData as item (item.id)}
		<Preview {...item} />
	{/each}
</div>