<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<div class="flex -space-x-[0.6rem]">
	<Avatar.Root size="lg" class="ring-2 ring-background">
		<Avatar.Image
			src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
			alt="U1"
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root size="lg" class="ring-2 ring-background">
		<Avatar.Image
			src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=96&h=96&dpr=2&q=80"
			alt="U2"
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root size="lg" class="ring-2 ring-background">
		<Avatar.Image
			src="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?w=96&h=96&dpr=2&q=80"
			alt="U3"
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
</div>
