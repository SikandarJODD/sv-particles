<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
</script>

<Button class="rounded-full ps-1">
	<Avatar.Root class="size-6">
		<Avatar.Image src="https://github.com/SikandarJODD.png" alt="@SikandarJODD" />
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
	@SikandarJODD
</Button>
