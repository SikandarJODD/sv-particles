<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { navItems } from "$lib/navigation/nav";
</script>

<nav class="flex flex-wrap items-center justify-center gap-4 py-3 text-sm md:min-h-14 md:py-0">
	{#each navItems as item (item.href)}
		<Button variant="ghost" class="font-light" href={item.href}>{item.label}</Button>
	{/each}
</nav>
