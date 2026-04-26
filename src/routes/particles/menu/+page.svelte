<script lang="ts">
	import Preview from '$lib/components/structure/preview/Preview.svelte';
	import { menuData } from '$particles/menu/data';
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	{#each menuData as item (item.id)}
		<Preview {...item} />
	{/each}
</div>