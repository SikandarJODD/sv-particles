<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<div class="relative">
	<Avatar.Root class="after:border-none">
		<Avatar.Image
			src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
			alt="U1"
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
	<span
		aria-hidden="true"
		class="absolute inset-e-0 bottom-0 size-2 rounded-full bg-muted-foreground outline-2 outline-background"
	></span>
</div>
