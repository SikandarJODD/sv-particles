<script lang="ts">
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import { REGEXP_ONLY_DIGITS } from "bits-ui";
</script>

<InputOTP.Root maxlength={6} pattern={REGEXP_ONLY_DIGITS}>
	{#snippet children({ cells })}
		<InputOTP.Group>
			{#each cells as cell (cell)}
				<InputOTP.Slot {cell} />
			{/each}
		</InputOTP.Group>
	{/snippet}
</InputOTP.Root>
