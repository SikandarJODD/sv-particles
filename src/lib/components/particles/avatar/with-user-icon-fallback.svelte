<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import UserIcon from "@lucide/svelte/icons/user";
</script>

<Avatar.Root>
	<Avatar.Fallback>
		<UserIcon class="size-4" />
	</Avatar.Fallback>
</Avatar.Root>
