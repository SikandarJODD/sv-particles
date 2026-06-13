<script lang="ts">
	import { page } from '$app/state';
	import SEO from '$lib/components/seo.svelte';
	import { deepMerge } from 'svelte-meta-tags';
	import type { JsonLdProps, MetaTagsProps } from 'svelte-meta-tags';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	const pageData = $derived(
		page.data as {
			pageMetaTags?: MetaTagsProps;
			pageSchema?: JsonLdProps['schema'];
		}
	);

	const meta = $derived(deepMerge(data.baseMetaTags, pageData.pageMetaTags));
</script>

<SEO {meta} schema={pageData.pageSchema} />

<div class="p-4 md:p-10">
	{@render children()}
</div>
