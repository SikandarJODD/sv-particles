<script lang="ts">
	import { page } from '$app/state';
	import PreviewCode from '$lib/components/extra/code/preview-code.svelte';
	import MultiCode from '$lib/components/extra/code/preview-code.svelte';
	import type { CodeType } from '$lib/components/extra/code/types';
	import { PMCommand } from '$lib/components/extra/pm-command';

	type Props = {
		installation_url: string;
		code: CodeType | CodeType[];
		folder_structure?: string;
	};
	let { installation_url, code, folder_structure }: Props = $props();
	let url = $derived(page.url.origin + installation_url);
</script>

<div class="space-y-4 px-5 pt-6">
	<div>
		<p class="text-xl font-semibold mb-2">Installation</p>
		<PMCommand args={['shadcn-svelte@latest', 'add', url]} command="execute" />
	</div>
	<div>
		<div class="mb-2 text-xl font-semibold">Code</div>
		<PreviewCode {code} />
	</div>
</div>
