<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer/index.js';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<Drawer.Root shouldScaleBackground={false} direction="right">
		<Drawer.Trigger>Open</Drawer.Trigger>
		<Drawer.Content class='data-[vaul-drawer-direction=right]:sm:max-w-4xl'>Coding is fun</Drawer.Content>
	</Drawer.Root>
</div>
