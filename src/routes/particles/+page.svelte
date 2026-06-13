<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="space-y-2">
	<h1 class="text-3xl font-semibold tracking-tight">{data.heading}</h1>
	<p class="max-w-3xl text-sm text-muted-foreground md:text-base">{data.intro}</p>
</section>

<div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
	{#each data.sections as section (section.path)}
		<a
			href={section.path}
			class="rounded-xl border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent/40"
		>
			<h2 class="text-lg font-medium">{section.title}</h2>
			<p class="mt-2 text-sm text-muted-foreground">{section.description}</p>
		</a>
	{/each}
</div>
