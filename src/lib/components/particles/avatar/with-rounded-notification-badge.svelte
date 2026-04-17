<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import { Badge } from "$lib/components/ui/badge";
</script>

<div class="relative">
	<Avatar.Root class="after:border-none">
		<Avatar.Image
			src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
			alt="U1"
            class='rounded-lg'
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
	<Badge
		class="absolute -inset-e-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full px-1 text-xs outline-2 outline-background outline-solid sm:text-[0.625rem]"
	>
		6
	</Badge>
</div>
