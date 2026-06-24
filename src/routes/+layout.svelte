<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import MobileNav from "$lib/components/structure/mobile-nav.svelte";
	import Navbar from "$lib/components/structure/navbar/navbar.svelte";
	import ScrollUpButton from "$lib/components/structure/scroll-up-button.svelte";
	import { getParticleCategoryDirectionTarget, navigationKeys } from "$lib/navigation/nav";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { activeElement } from "runed";
	import "./layout.css";

	let { children } = $props();

	const isParticles = $derived(page.url.pathname.startsWith("/particles/"));

	function isTypingElement() {
		return (
			activeElement.current?.matches(
				'input, textarea, select, [contenteditable="true"], [role="textbox"]'
			) ?? false
		);
	}

	function navigateParticleCategory(direction: "next" | "prev") {
		if (isTypingElement()) {
			return;
		}

		const target = getParticleCategoryDirectionTarget(page.url.pathname, direction);
		if (!target) {
			return;
		}

		void goto(target.href);
	}

	navigationKeys.onKeys(["d"], () => {
		if (isTypingElement()) return;
		toggleMode();
	});

	navigationKeys.onKeys(["ArrowRight"], () => {
		navigateParticleCategory("next");
	});

	navigationKeys.onKeys(["ArrowLeft"], () => {
		navigateParticleCategory("prev");
	});
</script>

<ModeWatcher defaultMode="system" />
<MobileNav />
<Navbar />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{@render children()}
{#if isParticles}
	<ScrollUpButton />
{/if}
