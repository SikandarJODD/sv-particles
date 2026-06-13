<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { ModeWatcher, setMode, toggleMode } from "mode-watcher";
	import { activeElement, PressedKeys } from "runed";
	import Navbar from "$lib/components/structure/navbar/navbar.svelte";
	import Footer from "$lib/components/landing/footer.svelte";

	let { children } = $props();

	let keys = new PressedKeys();
	keys.onKeys(["d"], () => {
		if (
			activeElement.current?.localName === "input" ||
			activeElement.current?.localName === "textarea"
		)
			return;
		toggleMode();
	});
</script>

<Navbar />
<ModeWatcher defaultMode='dark' />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class='max-w-7xl mx-auto'>
	{@render children()}
</div>
<Footer />
