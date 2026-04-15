<script lang="ts">
	let showPassword = $state(false);
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { buttonVariants } from '$lib/components/ui/button';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
</script>

<InputGroup.Root>
	<InputGroup.Input
		placeholder="Enter your password"
		aria-label="Password with toggle visiblity"
		type={showPassword ? 'text' : 'password'}
	/>
	<InputGroup.Addon align="inline-end">
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger
					aria-label={showPassword ? 'Hide password' : 'Show password'}
					class={buttonVariants({ variant: 'ghost', size: 'icon-xs' })}
				>
					{#if showPassword}
						<EyeOffIcon />
					{:else}
						<EyeIcon />
					{/if}f
				</Tooltip.Trigger>
				<Tooltip.Content>
					{showPassword ? 'Hide password' : 'Show password'}
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</InputGroup.Addon>
</InputGroup.Root>
