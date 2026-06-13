<script lang="ts">
	import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { page } from "$app/state";
	import { Kbd } from "$lib/components/ui/kbd";
	import { navigationKeys, getParticleCategoryDirectionTarget } from "$lib/navigation/nav";
	import { cn } from "$lib/utils";
	import { Button } from "$lib/components/ui/button";
	import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";

	let canNavigate = $derived(
		Boolean(
			getParticleCategoryDirectionTarget(page.url.pathname, "prev") ||
			getParticleCategoryDirectionTarget(page.url.pathname, "next")
		)
	);

	let isLeftPressed = $derived(navigationKeys.has("ArrowLeft"));
	let isRightPressed = $derived(navigationKeys.has("ArrowRight"));

	function getKeyClass(isPressed: boolean) {
		return cn("rounded-full",isPressed && "scale-95 bg-secondary/70 text-background shadow-md");
	}
</script>

{#if canNavigate}
	<div
		class="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full p-0.5 backdrop-blur-sm"
	>
		<Button
			variant="outline"
			size="icon"
			class={getKeyClass(isLeftPressed)}
			href={getParticleCategoryDirectionTarget(page.url.pathname, "prev")?.href}
		>
			<Kbd aria-label="Previous category" class="bg-transparent">
				<ChevronLeftIcon class='size-5' strokeWidth="1.4" />
			</Kbd> 
		</Button>
		<Button
			variant="outline"
			size="icon"
			class={getKeyClass(isRightPressed)}
			href={getParticleCategoryDirectionTarget(page.url.pathname, "next")?.href}
		>
			<Kbd aria-label="Next category" class="bg-transparent">
				<ChevronRightIcon class='size-5' strokeWidth="1.4" />
			</Kbd>
		</Button>
	</div>
{/if}
