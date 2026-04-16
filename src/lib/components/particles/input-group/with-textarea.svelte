<script lang="ts">
	import * as InputGroup from "$lib/components/ui/input-group/index.js";
	import SearchIcon from "@lucide/svelte/icons/search";
</script>

<InputGroup.Root class="max-w-2xs">
	<InputGroup.Textarea placeholder="Ask, Search or Chat..." />
	<InputGroup.Addon align="inline-end">
		<InputGroup.Button>Search</InputGroup.Button>
	</InputGroup.Addon>
</InputGroup.Root>
