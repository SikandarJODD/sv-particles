<script lang="ts">
	import type { CodeType } from '$lib/components/extra/code/types';
	import type { Component } from 'svelte';
	import ViewCode from './ViewCode.svelte';

	type Props = {
		preview: Component;
		code: CodeType | CodeType[];
		name: string;
		installation_url: string; // for installation command - will use it inside pmcommand
		folder_structure?: string | undefined; // for showcasing the folder-structue
	};
	let props: Props = $props();
	let PreviewComponent = $derived(props.preview);
</script>

<div>
	<div>
		<h2 class="text-base">{props.name}</h2>
		<div class="mb-2 flex min-h-80 items-center justify-center border">
			<PreviewComponent />
		</div>
		<div class='flex justify-end'>
			<ViewCode {...props} />
		</div>
	</div>
</div>
