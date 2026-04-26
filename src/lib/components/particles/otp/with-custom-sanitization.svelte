<script lang="ts">
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import * as Field from "$lib/components/ui/field/index.js";
	const OTP_LENGTH = 4;
	// Custom pattern for tier code (digits 0-3 only)
	let pattern = "^[0-3]*$";
</script>

<Field.Set>
	<Field.Field>
		<Field.Label>Tier code</Field.Label>
		<InputOTP.Root maxlength={OTP_LENGTH} {pattern}>
			{#snippet children({ cells })}
				<InputOTP.Group>
					{#each cells as cell (cell)}
						<InputOTP.Slot {cell} />
					{/each}
				</InputOTP.Group>
			{/snippet}
		</InputOTP.Root>
		<Field.Description>Digits 0-3 only.</Field.Description>
	</Field.Field>
</Field.Set>
