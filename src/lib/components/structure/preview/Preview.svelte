<script lang="ts">
	import type { CodeType } from '$lib/components/extra/code/types';
	import type { Component } from 'svelte';
	import ViewCode from './ViewCode.svelte';

	type Props = {
		preview: Component;
		code: CodeType | CodeType[];
		title: string;
		installation_url: string; // for installation command - will use it inside pmcommand
		folder_structure?: string | undefined; // for showcasing the folder-structue
	};
	let props: Props = $props();
	let PreviewComponent = $derived(props.preview);
</script>

<div>
	<div>
		<h2 class="mb-4 text-2xl font-bold">{props.title}</h2>
		<div class="mb-6 min-h-80 border">
			<PreviewComponent />
		</div>
		<ViewCode {...props} />
	</div>
</div>
