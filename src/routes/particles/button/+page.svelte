<script lang="ts">
	import type { PageProps } from './$types';
	import Preview from '$lib/components/structure/preview/Preview.svelte';
	import { buttonData } from '$particles/button/data';

	let { data }: PageProps = $props();
</script>

<section class="space-y-2">
	<h1 class="text-3xl font-semibold tracking-tight">{data.heading}</h1>
	<p class="max-w-3xl text-sm text-muted-foreground md:text-base">{data.intro}</p>
</section>

<div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
	{#each buttonData as item (item.id)}
		<Preview {...item} />
	{/each}
</div>
