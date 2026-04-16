<script lang="ts">
	import * as InputGroup from "$lib/components/ui/input-group/index.js";
	import { Spinner } from "$lib/components/ui/spinner";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
</script>

<InputGroup.Root class="max-w-3xs">
	<InputGroup.Input
		placeholder="Searching..."
		type="search"
		class="placeholder:text-sm"
		disabled
	/>
	<InputGroup.Addon align="inline-end">
		<Spinner />
	</InputGroup.Addon>
</InputGroup.Root>
