<script lang="ts">
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import * as Field from "$lib/components/ui/field/index.js";
	import { REGEXP_ONLY_DIGITS } from "bits-ui";
	const OTP_LENGTH = 6;

	let value = $state("");
	let inValidCode = $state(false);
	let valid = $derived(value.length === OTP_LENGTH && value === "123456");
</script>

<Field.Set>
	<Field.Field>
		<Field.Label>Verification code</Field.Label>
		<InputOTP.Root
			maxlength={OTP_LENGTH}
			bind:value
			pattern={REGEXP_ONLY_DIGITS}
			onValueChange={(nextValue) => {
				// so this would be true when the user has entered a complete code that is not correct
				// like 112233 then inValidCode would become true
				// but if user enter 123456 then it becomes valid and inValidCode would be false
				inValidCode = nextValue.length === OTP_LENGTH ? nextValue !== "123456" : false;

			}}
			aria-invalid={inValidCode}
			aria-describedby="otp-description"
		>
			{#snippet children({ cells })}
				<InputOTP.Group>
					{#each cells as cell (cell)}
						<InputOTP.Slot aria-invalid={inValidCode} {cell} />
					{/each}
				</InputOTP.Group>
			{/snippet}
		</InputOTP.Root>
		{#if !valid && !inValidCode}
			<Field.Description>Enter `123456` to pass validation.</Field.Description>
		{/if}
		{#if valid}
			<Field.Description class="text-green-600">Code verified!</Field.Description>
		{/if}
		{#if inValidCode}
			<Field.Description>Code must be 123456.</Field.Description>
		{/if}
	</Field.Field>
</Field.Set>
