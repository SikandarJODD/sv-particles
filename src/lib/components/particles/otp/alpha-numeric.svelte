<script lang="ts">
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import * as Field from "$lib/components/ui/field/index.js";
	import { REGEXP_ONLY_DIGITS_AND_CHARS } from "bits-ui";
	const OTP_LENGTH = 6;
</script>

<Field.Set>
	<Field.Field>
		<Field.Label>Recovery code</Field.Label>
		<InputOTP.Root maxlength={OTP_LENGTH} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
			{#snippet children({ cells })}
				<InputOTP.Group>
					{#each cells as cell (cell)}
						<InputOTP.Slot {cell} />
					{/each}
				</InputOTP.Group>
			{/snippet}
		</InputOTP.Root>
		<Field.Description>
			Accept letters and numbers for backup codes such as A7C9XZ.
		</Field.Description>
	</Field.Field>
</Field.Set>
