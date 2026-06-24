<script lang="ts">
	import { page } from "$app/state";
	import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import { Button } from "$lib/components/ui/button";
	import { Kbd } from "$lib/components/ui/kbd";
	import { getParticleCategoryDirectionTarget, navigationKeys } from "$lib/navigation/nav";
	import { cn } from "$lib/utils";

	let canNavigate = $derived(
		Boolean(
			getParticleCategoryDirectionTarget(page.url.pathname, "prev") ||
			getParticleCategoryDirectionTarget(page.url.pathname, "next")
		)
	);

	let isLeftPressed = $derived(navigationKeys.has("ArrowLeft"));
	let isRightPressed = $derived(navigationKeys.has("ArrowRight"));

	function getKeyClass(isPressed: boolean) {
		return cn(
			"rounded-full md:rounded-xl",
			isPressed && "scale-95 bg-secondary/70 text-background shadow-md"
		);
	}
</script>

{#if canNavigate}
	<div
		class="fixed right-6 bottom-8 z-990 flex items-center gap-2 lg:gap-1 rounded-full p-0.5 backdrop-blur-sm md:right-3 md:bottom-4"
	>
		<Button
			variant="outline"
			size="icon-sm"
			class={getKeyClass(isLeftPressed)}
			href={getParticleCategoryDirectionTarget(page.url.pathname, "prev")?.href}
		>
			<Kbd aria-label="Previous category" class="bg-transparent">
				<ChevronLeftIcon class="size-5" strokeWidth="1.4" />
			</Kbd>
		</Button>
		<Button
			variant="outline"
			size="icon-sm"
			class={getKeyClass(isRightPressed)}
			href={getParticleCategoryDirectionTarget(page.url.pathname, "next")?.href}
		>
			<Kbd aria-label="Next category" class="bg-transparent">
				<ChevronRightIcon class="size-5" strokeWidth="1.4" />
			</Kbd>
		</Button>
	</div>
{/if}
