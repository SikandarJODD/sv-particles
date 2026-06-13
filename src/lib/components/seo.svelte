<script lang="ts">
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import type { JsonLdProps, MetaTagsProps } from 'svelte-meta-tags';

	type Props = {
		meta: MetaTagsProps;
		schema?: JsonLdProps['schema'];
	};

	let { meta, schema }: Props = $props();
</script>

<MetaTags {...meta} />

{#if schema}
	<JsonLd {schema} />
{/if}
