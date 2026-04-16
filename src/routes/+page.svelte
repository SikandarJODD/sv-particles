<script lang="ts">
	import Preview from '$lib/components/structure/preview/Preview.svelte';
	import { buttonData } from '$particles/button/data';
</script>

<div class="p-10">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each buttonData as item}
			<Preview {...item} />
		{/each}
	</div>
</div>
