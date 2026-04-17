<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: MenubarPrimitive.RootProps = $props();
</script>

<!-- border p-1  -->
<MenubarPrimitive.Root
	bind:ref
	data-slot="menubar"
	class={cn("flex h-9 items-center gap-1 rounded-md shadow-xs", className)}
	{...restProps}
/>
