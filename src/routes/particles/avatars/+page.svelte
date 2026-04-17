<script lang="ts">
	import Preview from '$lib/components/structure/preview/Preview.svelte';
	import { avatarData } from '$particles/avatar/data';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each avatarData as item (item.id)}
		<Preview {...item} />
	{/each}
</div>