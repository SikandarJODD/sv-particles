<script lang="ts" module>
	export type LightSwitchProps = {
		variant?: "outline" | "ghost";
		size?: ButtonSize;
	};

	import { MediaQuery } from "svelte/reactivity";

	let large = new MediaQuery("min-width: 800px");
</script>

<script lang="ts">
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { toggleMode } from "mode-watcher";
	import Button, { type ButtonSize } from "$lib/components/ui/button/button.svelte";

	let { variant = "outline", size = "default" }: LightSwitchProps = $props();
</script>

<Button onclick={toggleMode} {variant} size={large.current ? "icon" : "icon-sm"} class="shadow-none">
	<SunIcon class="scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90" />
	<MoonIcon class="absolute scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0" />
	<span class="sr-only">Toggle theme</span>
</Button>
