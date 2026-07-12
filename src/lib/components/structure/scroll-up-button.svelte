<script lang="ts">
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
	import { Button } from "$lib/components/ui/button";
	import { scrollY } from "svelte/reactivity/window";
	import { fade, fly, scale } from "svelte/transition";

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	let shouldShow = $derived((scrollY.current ?? 0) > 200);
</script>

{#if shouldShow}
	<div in:fade={{ duration: 200 }} out:fade|global={{ duration: 150 }}>
		<Button
			type="button"
			variant="outline"
			size="icon-lg"
			class="fixed bottom-20 cursor-pointer right-7 z-50 rounded-full shadow-none md:bottom-6 md:right-3 md:left-auto"
			aria-label="Scroll to top"
			title="Scroll to top"
			onclick={scrollToTop}
		>
			<ArrowUpIcon />
		</Button>
	</div>
{/if}
