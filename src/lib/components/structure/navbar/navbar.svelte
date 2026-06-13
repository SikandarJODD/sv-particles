<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	const items = [
		{ href: "/", label: "home" },
		{ href: "/particles/button", label: "buttons" },
		{ href: "/particles/avatars", label: "avatars" },
		{ href: "/particles/input", label: "input" },
		{ href: "/particles/input-group", label: "input-group" },
		{ href: "/particles/input-otp", label: "input-otp" },
		{ href: "/particles/alert-dialog", label: "alert-dialog" },
		{ href: "/particles/menu", label: "menu" },
	];
</script>

<nav class="flex flex-wrap justify-center items-center z-[999] gap-4 h-14 text-sm">
	{#each items as item (item.href)}
		<Button variant="ghost" class="font-light" href={item.href}>{item.label}</Button>
	{/each}
</nav>
