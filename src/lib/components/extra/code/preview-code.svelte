<script lang="ts">
	import MultiCode from './multi-code.svelte';
	import SingleCode from './single-code.svelte';
	import type { CodeType } from './types';

	type Props = {
		code: CodeType | CodeType[];
	};
	let { code }: Props = $props();
</script>

{#if Array.isArray(code)}
	<MultiCode {code} />
{:else}
	<SingleCode {code} />
{/if}
