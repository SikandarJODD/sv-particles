<script lang="ts">
	import { Drawer as DrawerPrimitive } from "vaul-svelte";

	let {
		ref = $bindable(null),
		preventCycle = false,
		...restProps
	}: DrawerPrimitive.HandleProps = $props();
</script>

<DrawerPrimitive.Handle bind:ref data-slot="drawer-handle" {preventCycle} {...restProps} />
