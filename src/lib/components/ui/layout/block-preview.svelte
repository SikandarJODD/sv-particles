<script lang="ts">
	import type { BlockCodeTree } from "$lib/blocks/showcase";
	import type { Component } from "svelte";
	import { scale } from "svelte/transition";
	import { Button } from "../button";
	import CodeEditor from "./code-editor.svelte";

	interface BlockPreviewProps {
		id: string;
		title: string;
		description?: string;
		codeTree: BlockCodeTree;
		previewComponent: Component;
	}

	const radioItem =
		"rounded-(--radius) duration-200 flex h-8 items-center justify-center gap-2 px-2.5 transition-[color] data-[state=checked]:bg-muted";
	const MIN_PREVIEW_HEIGHT = 520;

	let {
		id,
		title,
		description = "",
		codeTree,
		previewComponent: PreviewComponent,
	}: BlockPreviewProps = $props();

	let mode = $state<"preview" | "code">("preview");
</script>

<section class="group scroll-mb-24">
	<div class="relative max-w-2xl py-3">
		<div class="flex flex-wrap items-end gap-x-2 gap-y-1">
			<h2 {id} class="text-xl font-medium text-primary cursor-pointer">
				{title}
			</h2>
		</div>
		{#if description}
			<p class="mt-1.5 text-[13px] leading-5 text-muted-foreground">
				{description}
			</p>
		{/if}
	</div>

	<div>
		<div class="flex w-fit items-center gap-0.5">
			<Button
				variant={mode === "preview" ? "secondary" : "ghost"}
				onclick={() => (mode = "preview")}
				class={radioItem}
				size="sm"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					class="sm:opacity-80"
					color="currentColor"
				>
					<path
						d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
						stroke="currentColor"
						stroke-width="1.5"
					></path>
					<path
						opacity="0.4"
						d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
						stroke="currentColor"
						stroke-width="1.5"
					></path>
				</svg>
				<span class="text-[13px]">Preview</span>
			</Button>

			<Button
				variant={mode === "code" ? "secondary" : "ghost"}
				onclick={() => (mode = "code")}
				size="sm"
				class={radioItem}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.4"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path class="sm:opacity-50" d="M7 8l-4 4l4 4" />
					<path class="sm:opacity-50" d="M17 8l4 4l-4 4" />
					<path d="M14 4l-4 16" />
				</svg>
				<span class="text-[13px]">Code</span>
			</Button>
		</div>

		<div
			class="relative mt-2 max-w-6xl overflow-hidden rounded-lg border px-0"
			style={`--preview-min-height: ${MIN_PREVIEW_HEIGHT}px;`}
		>
			{#if mode === "preview"}
				<div
					class="flex min-h-(--preview-min-height) w-full items-center justify-center overflow-hidden"
				>
					<div>
						<PreviewComponent />
					</div>
				</div>
			{:else}
				<div class="bg-white dark:bg-transparent">
					<CodeEditor {codeTree} />
				</div>
			{/if}
		</div>
	</div>
</section>
