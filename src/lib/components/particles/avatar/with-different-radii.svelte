<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<div class="flex items-center gap-4">
	<Avatar.Root class='after:rounded-md'>
		<Avatar.Image
			class="rounded-md"
			src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
			alt="@SikandarJODD"
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root class='after:rounded-xl'>
		<Avatar.Image
			class="rounded-xl"
			src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
			alt="@SikandarJODD"
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root class='after:rounded-full'>
		<Avatar.Image
			src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
			alt="@SikandarJODD"
		/>
		<Avatar.Fallback>SB</Avatar.Fallback>
	</Avatar.Root>
</div>
