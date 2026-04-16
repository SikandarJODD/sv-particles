<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	const style = tv({
		base: 'border-border w-full rounded-xl border',
		variants: {
			variant: {
				default: 'bg-card',
				secondary: 'bg-secondary/50 border-transparent'
			}
		}
	});

	type Variant = VariantProps<typeof style>['variant'];

	export type PMCommandProps = {
		variant?: Variant;
		class?: string;
		agents?: Agent[];
		agent?: Agent;
		command: Command;
		args: string[];
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Command, Agent } from 'package-manager-detector';
	import { resolveCommand } from 'package-manager-detector/commands';
	import ClipboardIcon from '@lucide/svelte/icons/clipboard';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Tabs from '$lib/components/ui/tabs';
	import { CopyButton } from '../copy-button';

	let {
		variant = 'default',
		class: className,
		command,
		agents = ['pnpm', 'npm', 'yarn', 'bun'],
		args,
		agent = $bindable('pnpm')
	}: PMCommandProps = $props();

	let cmd = $derived(resolveCommand(agent, command, args));

	let commandText = $derived(`${cmd?.command} ${cmd?.args.join(' ')}`);
</script>

<div data-slot="pm-command" class={cn(style({ variant }), className)}>
	<div class="flex place-items-center justify-between gap-2 border-b border-border px-2 py-0.5">
		<div class="flex place-items-center gap-2 pl-1.5">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-5 sm:size-4"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><!-- Icon from Huge Icons by Hugeicons - undefined --><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21m4-14L8 17"
					/></svg
				>
			</div>
			<Tabs.Root bind:value={agent}>
				<Tabs.List class="h-auto bg-transparent p-0">
					{#each agents as pm (pm)}
						<Tabs.Trigger value={pm} class="h-7 data-active:bg-neutral-100 shadow-none! border-none font-mono text-sm font-light">
							{pm}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
			</Tabs.Root>
		</div>
		<Tooltip.Provider delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<CopyButton text={commandText} class="size-6 text-muted-foreground [&_svg]:size-3">
							{#snippet icon()}
								<ClipboardIcon />
							{/snippet}
						</CopyButton>
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content>Copy to Clipboard</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</div>
	<div class="no-scrollbar overflow-x-auto p-3">
		<span class="pl-1 font-mono text-sm leading-none font-light text-nowrap text-primary dark:text-muted-foreground">
			{commandText}
		</span>
	</div>
</div>

<style>
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
