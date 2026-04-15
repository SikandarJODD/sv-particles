<script lang="ts">
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
</script>

<div>
	<p>Installation</p>
	<PMCommand args={[installation_url]} command="execute" />
	<div>Code</div>
	<PreviewCode {code} />
</div>
