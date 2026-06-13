<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { activeElement } from "runed";
	import Navbar from "$lib/components/structure/navbar/navbar.svelte";
	import KeyNavigation from '$lib/components/structure/navbar/key-navigation.svelte';
	import ScrollUpButton from '$lib/components/structure/scroll-up-button.svelte';
	import Footer from "$lib/components/landing/footer.svelte";
	import { getParticleCategoryDirectionTarget, navigationKeys } from '$lib/navigation/nav';

	let { children } = $props();
	const isParticles = $derived(page.url.pathname.startsWith('/particles/'));

	function isTypingElement() {
		return (
			activeElement.current?.matches(
				'input, textarea, select, [contenteditable="true"], [role="textbox"]'
			) ?? false
		);
	}

	function navigateParticleCategory(direction: 'next' | 'prev') {
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

	navigationKeys.onKeys(['ArrowRight'], () => {
		navigateParticleCategory('next');
	});

	navigationKeys.onKeys(['ArrowLeft'], () => {
		navigateParticleCategory('prev');
	});
</script>

<Navbar />
<ModeWatcher defaultMode='dark' />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class='max-w-7xl mx-auto'>
	{@render children()}
</div>
{#if isParticles}
	<KeyNavigation />
	<ScrollUpButton />
{/if}
<Footer />
