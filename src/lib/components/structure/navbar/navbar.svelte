<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	const items = [
		{ href: "/", label: "home" },
		{ href: "/particles/button", label: "buttons" },
		{ href: "/particles/avatars", label: "avatars" },
		{ href: "/particles/input", label: "input" },
		{ href: "/particles/input-group", label: "input-group" },
		{ href: "/particles/alert-dialog", label: "alert-dialog" },
	];
</script>

<nav class="flex flex-wrap justify-center gap-4 py-2 text-sm">
	{#each items as item (item.href)}
		<Button variant="ghost" class="font-light" href={item.href}>{item.label}</Button>
	{/each}
</nav>
