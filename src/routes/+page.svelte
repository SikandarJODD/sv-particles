<script lang="ts">
	import Preview from '$lib/components/structure/preview/Preview.svelte';
	import { data } from '$particles/button/data';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<Preview {...data} />
</div>
