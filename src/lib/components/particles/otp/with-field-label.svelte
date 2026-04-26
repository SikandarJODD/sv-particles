<script lang="ts">
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import * as Field from "$lib/components/ui/field/index.js";
	import { REGEXP_ONLY_DIGITS } from "bits-ui";
	const OTP_LENGTH = 4;
</script>

<Field.Set>
	<Field.Field>
		<Field.Label>Verification code</Field.Label>
		<InputOTP.Root maxlength={OTP_LENGTH} pattern={REGEXP_ONLY_DIGITS}>
			{#snippet children({ cells })}
				<InputOTP.Group>
					{#each cells as cell (cell)}
						<InputOTP.Slot {cell} />
					{/each}
				</InputOTP.Group>
			{/snippet}
		</InputOTP.Root>
		<Field.Description
			>Enter the {OTP_LENGTH}-digit verification code sent to your email.</Field.Description
		>
	</Field.Field>
</Field.Set>
