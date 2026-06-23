<script lang="ts">
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import { Button } from "$lib/components/ui/button";
</script>

<div class="relative flex h-full min-h-[calc(100svh-7.5rem)] md:min-h-[calc(100vh-7rem)] items-center justify-center">
	<div
		class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
	></div>
	<div class="mx-auto max-w-7xl px-6">
		<div class="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
			<div>
				<a
					href="/particles/input-group"
					class="group mx-auto flex w-fit items-center gap-2 rounded-full border border-teal-500/40 bg-teal-200/40 p-1 pl-4 md:shadow-md shadow-teal-100 transition-colors duration-300 dark:bg-teal-800/20 dark:shadow-xl dark:shadow-teal-950/30"
				>
					<span class="text-xs md:text-sm text-teal-500">New Input Group Blocks</span>
					<div
						class="size-6 overflow-hidden rounded-full bg-teal-300 duration-500 group-hover:bg-teal-300 dark:bg-teal-900/70 dark:group-hover:bg-teal-900"
					>
						<div
							class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
						>
							<span class="flex size-6">
								<ArrowRight class="m-auto size-3 -rotate-45  dark:text-teal-300" />
							</span>
							<span class="flex size-6">
								<ArrowRight class="m-auto size-3 -rotate-45 dark:text-teal-200" />
							</span>
						</div>
					</div>
				</a>
			</div>

			<h1
				class="mt-8 bg-linear-to-b font-gp-circle from-teal-500 to-teal-400 bg-clip-text text-6xl tracking-tight text-balance text-transparent md:text-7xl lg:mt-16 xl:text-[5.25rem] dark:to-white"
			>
				Svelte Qblocks
			</h1>
			<p class="mx-auto mt-8 max-w-2xl font-gp-circle text-lg text-muted-foreground">
				Useful Shadcn-Svelte blocks built with Svelte 5, Tailwind CSS and
				TypeScript.
			</p>

			<div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
				<Button
					href="/particles/button"
					size="lg"
					class="rounded-full border-none px-5 text-base"
				>
					View Components
				</Button>
				<Button
					href="https://github.com/SikandarJODD/sv-particles"
					size="lg"
					variant="secondary"
					class="h-11 rounded-full px-5"
					target="_blank"
				>
					<svg viewBox="0 0 1024 1024" fill="none"
						><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
							transform="scale(64)"
							fill="currentColor"
						/></svg
					>
					Github
				</Button>
			</div>
		</div>
	</div>
</div>
