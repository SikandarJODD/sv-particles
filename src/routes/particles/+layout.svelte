<script lang="ts">
	import type { OnNavigate } from "@sveltejs/kit";
	import { onNavigate } from "$app/navigation";
	import { page } from "$app/state";
	import SEO from "$lib/components/seo.svelte";
	import KeyNavigation from "$lib/components/structure/navbar/key-navigation.svelte";
	import { particleCategoryNavItems } from "$lib/navigation/nav";
	import { deepMerge } from "svelte-meta-tags";
	import type { JsonLdProps, MetaTagsProps } from "svelte-meta-tags";
	import type { LayoutProps } from "./$types";

	let { data, children }: LayoutProps = $props();

	type ViewTransition = {
		finished: Promise<void>;
	};

	type ViewTransitionDocument = Document & {
		startViewTransition?: (callback: () => Promise<void> | void) => ViewTransition;
	};

	const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
	const mobileQuery = "(max-width: 768px)";
	const forwardTransition = "particles-forward";
	const backTransition = "particles-back";
	const routeTransitionOrder = [
		"/particles",
		...particleCategoryNavItems.map((item) => item.href),
	] as const;

	const pageData = $derived(
		page.data as {
			pageMetaTags?: MetaTagsProps;
			pageSchema?: JsonLdProps["schema"];
		}
	);

	const meta = $derived(deepMerge(data.baseMetaTags, pageData.pageMetaTags));

	function getRouteDepth(pathname: string) {
		return pathname.split("/").filter(Boolean).length;
	}

	function getNavTransition(navigation: OnNavigate) {
		if (!navigation.from?.url || !navigation.to?.url) {
			return null;
		}

		const fromPathname = navigation.from.url.pathname;
		const toPathname = navigation.to.url.pathname;

		if (fromPathname === toPathname) {
			return null;
		}

		if (!fromPathname.startsWith("/particles") && !toPathname.startsWith("/particles")) {
			return null;
		}

		if (navigation.type === "popstate") {
			return navigation.delta < 0 ? backTransition : forwardTransition;
		}

		const fromIndex = routeTransitionOrder.indexOf(
			fromPathname as (typeof routeTransitionOrder)[number]
		);
		const toIndex = routeTransitionOrder.indexOf(
			toPathname as (typeof routeTransitionOrder)[number]
		);

		if (fromIndex !== -1 && toIndex !== -1) {
			return toIndex > fromIndex ? forwardTransition : backTransition;
		}

		return getRouteDepth(toPathname) >= getRouteDepth(fromPathname)
			? forwardTransition
			: backTransition;
	}

	onNavigate((navigation) => {
		if (window.matchMedia(reduceMotionQuery).matches) return;
		if (!window.matchMedia(mobileQuery).matches) return;

		const navTransition = getNavTransition(navigation);
		if (!navTransition) return;

		const viewTransitionDocument = document as ViewTransitionDocument;
		const startViewTransition = viewTransitionDocument.startViewTransition?.bind(document);

		if (!startViewTransition) return;

		document.documentElement.dataset.navTransition = navTransition;

		return new Promise<void>((resolve) => {
			const transition = startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});

			transition.finished.finally(() => {
				delete document.documentElement.dataset.navTransition;
			});
		});
	});
</script>

<SEO {meta} schema={pageData.pageSchema} />

<div class="particles-transition-shell px-6 py-4 md:p-10">
	{@render children()}
</div>
<div class="particles-key-navigation-shell">
	<KeyNavigation />
</div>

<style>
	.particles-transition-shell {
		background: var(--background);
		isolation: isolate;
		overflow-x: clip;
		view-transition-name: particles-content;
	}

	:global(:root[data-nav-transition^="particles-"]::view-transition-old(root)),
	:global(:root[data-nav-transition^="particles-"]::view-transition-new(root)) {
		animation: none;
	}

	.particles-key-navigation-shell {
		view-transition-name: particles-key-navigation;
	}

	:global(:root[data-nav-transition^="particles-"]::view-transition-old(particles-content)),
	:global(:root[data-nav-transition^="particles-"]::view-transition-new(particles-content)) {
		backface-visibility: hidden;
		mix-blend-mode: normal;
		will-change: transform;
	}

	:global(:root[data-nav-transition^="particles-"]::view-transition-old(particles-key-navigation)),
	:global(:root[data-nav-transition^="particles-"]::view-transition-new(particles-key-navigation)) {
		animation: none;
	}

	:global(
		:root[data-nav-transition="particles-forward"]::view-transition-old(particles-content)
	) {
		animation: particles-slide-out-left 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	:global(
		:root[data-nav-transition="particles-forward"]::view-transition-new(particles-content)
	) {
		animation: particles-slide-in-right 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	:global(:root[data-nav-transition="particles-back"]::view-transition-old(particles-content)) {
		animation: particles-slide-out-right 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	:global(:root[data-nav-transition="particles-back"]::view-transition-new(particles-content)) {
		animation: particles-slide-in-left 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	@keyframes particles-slide-out-left {
		from {
			opacity: 1;
			transform: translateX(0) scale(1);
		}

		to {
			opacity: 1;
			transform: translateX(-2.5%) scale(0.985);
		}
	}

	@keyframes particles-slide-in-right {
		from {
			opacity: 1;
			transform: translateX(100%);
		}

		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes particles-slide-out-right {
		from {
			opacity: 1;
			transform: translateX(0);
		}

		to {
			opacity: 1;
			transform: translateX(100%);
		}
	}

	@keyframes particles-slide-in-left {
		from {
			opacity: 1;
			transform: translateX(-10%) scale(0.985);
		}

		to {
			opacity: 1;
			transform: translateX(0) scale(1);
		}
	}
</style>
