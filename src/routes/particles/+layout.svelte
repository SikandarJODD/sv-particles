<script lang="ts">
	import Navbar from "$lib/components/structure/navbar/navbar.svelte";

	let { children } = $props();
</script>

<div class="p-10">
	{@render children()}
</div>
