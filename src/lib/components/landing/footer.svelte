<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	// import { Github, X as XLogo } from "$lib/svgs";
	import { MoonIcon, SunIcon } from "@lucide/svelte";
	import { mode, toggleMode } from "mode-watcher";

	type FooterLink = {
		label: string;
		href: string;
		external?: boolean;
	};

	const resourceLinks: FooterLink[] = [
		{ label: "Docs", href: "/docs" },
		{ label: "GitHub", href: "https://github.com/SikandarJODD/sv-particles", external: true },
		{ label: "X / Twitter", href: "https://x.com/Sikandar_Bhide", external: true },
	];

	const socialLinks = [
		{
			id: "x",
			label: "X",
			href: "https://x.com/Sikandar_Bhide",
		},
		{
			id: "github",
			label: "GitHub",
			href: "https://github.com/SikandarJODD/sv-particles",
		},
	] as const;

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative">
	<p
		class="flex items-center justify-center py-3 text-center text-xs text-muted-foreground sm:text-xs"
	>
		&copy;  <span class='font-mono mx-1'>{currentYear}</span>Svelte Particles. Built by
		<a
			class="ml-2 inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-muted-foreground"
			href="https://bhide.dev?utm_source=sv-particles"
			rel="noreferrer"
			target="_blank"
		>
			<img
				alt="Bhide Svelte avatar"
				class="size-5 rounded-full border border-border/80 object-cover"
				height="20"
				src="https://avatars.githubusercontent.com/u/93428946?v=4"
				width="20"
			/>
			Bhide Svelte
		</a>
	</p>
</footer>
