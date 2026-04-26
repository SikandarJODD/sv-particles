<script lang="ts">
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import * as Field from "$lib/components/ui/field/index.js";
	import { REGEXP_ONLY_DIGITS } from "bits-ui";
	import { cn } from "$lib/utils";
	const OTP_LENGTH = 6;
	let value = $state("");
</script>

<Field.Set>
	<Field.Field>
		<Field.Label>Verification code</Field.Label>
		<InputOTP.Root bind:value maxlength={OTP_LENGTH} pattern={REGEXP_ONLY_DIGITS}>
			{#snippet children({ cells })}
				<InputOTP.Group>
					{#each cells as cell, index (cell)}
						{@const newCell = {
							...cell,
							hasFakeCaret: index === 0,
						}}
						<InputOTP.Slot
							cell={newCell}
						/>
					{/each}
				</InputOTP.Group>
			{/snippet}
		</InputOTP.Root>
		<Field.Description
			>Enter the {OTP_LENGTH}-digit verification code sent to your email.</Field.Description
		>
	</Field.Field>
</Field.Set>
