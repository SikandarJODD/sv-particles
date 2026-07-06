<script lang="ts">
	import ArrowLeftToLineIcon from "@lucide/svelte/icons/arrow-left-to-line";
	import ArrowRightToLineIcon from "@lucide/svelte/icons/arrow-right-to-line";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import PinOffIcon from "@lucide/svelte/icons/pin-off";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

	type PinSide = "left" | "right" | null;

	interface Props {
		label: string;
		side: PinSide;
		onStickLeft: () => void;
		onStickRight: () => void;
		onUnstick: () => void;
	}

	let { label, side, onStickLeft, onStickRight, onUnstick }: Props = $props();
</script>

{#if side}
	<Button
		variant="ghost"
		size="icon-xs"
		class="-mr-1 shrink-0 rounded-full shadow-none hover:bg-background/80"
		aria-label={`Unpin ${label} column`}
		title={`Unpin ${label} column`}
		onclick={onUnstick}
	>
		<PinOffIcon class="opacity-70" strokeWidth={1.7} />
	</Button>
{:else}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					variant="ghost"
					size="icon-xs"
					class="-mr-1 shrink-0 rounded-full shadow-none hover:bg-background/80"
					aria-label={`Pin options for ${label} column`}
					title={`Pin options for ${label} column`}
				>
					<EllipsisIcon class="opacity-60" strokeWidth={1.7} />
				</Button>
			{/snippet}
		</DropdownMenu.Trigger>

		<DropdownMenu.Content
			align="end"
			class="w-44 bg-popover/95 p-1 shadow-none backdrop-blur-sm supports-[backdrop-filter]:bg-popover/90"
		>
			<DropdownMenu.Label>{label}</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item onclick={onStickLeft}>
				<ArrowLeftToLineIcon class="opacity-60" strokeWidth={1.7} />
				Stick to left
			</DropdownMenu.Item>
			<DropdownMenu.Item onclick={onStickRight}>
				<ArrowRightToLineIcon class="opacity-60" strokeWidth={1.7} />
				Stick to right
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/if}
