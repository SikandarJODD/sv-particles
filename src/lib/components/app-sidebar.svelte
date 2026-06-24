<script lang="ts">
	import { page } from "$app/state";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
	import Badge from "./spell/badge/badge.svelte";
	import { cn } from "$lib/utils";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
	// {
	// 	title: "Getting Started",
	// 	url: "#",
	// 	items: [
	// 		{
	// 			title: "Installation",
	// 			url: "#",
	// 		},
	// 		{
	// 			title: "Project Structure",
	// 			url: "#",
	// 		},
	// 	],
	// },

	type SubSidebarItem = {
		title: string;
		url: string;
		count: number;
		badge?: "new" | "updated" | "beta";
	};
	type SidebarItem = {
		title: string;
		url: string;
		items?: SubSidebarItem[];
	};
	const data: SidebarItem[] = [
		{
			title: "Components",
			url: "#",
			items: [
				{
					title: "Accordion",
					url: "/particles/accordion",
					count: 4,
				},
				{
					title: "Alert Dialog",
					url: "/particles/alert-dialog",
					count: 2,
				},
				{
					title: "Avatars",
					url: "/particles/avatars",
					count: 14,
				},
				{
					title: "Banner",
					url: "/particles/banner",
					count: 12,
					badge: "new",
				},
				{
					title: "Button",
					url: "/particles/button",
					count: 32,
				},
				{
					title: "Input",
					url: "/particles/input",
					count: 12,
				},
				{
					title: "Input Group",
					url: "/particles/input-group",
					count: 30,
				},
				{
					title: "Input OTP",
					url: "/particles/input-otp",
					count: 6,
				},
				{
					title: "Menu",
					url: "/particles/menu",
					count: 7,
				},
				{
					title: "Tabs",
					url: "/particles/tabs",
					count: 20,
					badge: "beta",
				},
			],
		},
	];

	let isActive = (url: string) => {
		return url === page.url.pathname;
	};
</script>

<Sidebar.Root class="mt-14" {...restProps} bind:ref>
	<Sidebar.Content>
		<!-- We create a Sidebar.Group for each parent. -->
		{#each data as group (group.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton
									isActive={isActive(item.url)}
									class="flex w-full items-center justify-between gap-2"
								>
									{#snippet child({ props })}
										<a href={item.url} {...props}>
											<span class="min-w-0 truncate">
												{item.title}
											</span>
											<span class="flex items-center gap-1.5">
												{#if item.badge === "new"}
													<Badge
														variant="emerald"
														class="rounded-full px-2 text-xs">New</Badge
													>
												{:else if item.badge === "updated"}
													<Badge
														variant="blue"
														class="rounded-full px-2 text-xs"
														>Updated</Badge
													>
												{:else if item.badge === "beta"}
													<Badge
														variant="yellow"
														class="rounded-full px-2 text-xs"
														>Beta</Badge
													>
												{/if}
												<span
													class={cn(
														"flex size-6 items-center justify-center rounded-full font-mono text-[10px] leading-none",
														isActive(item.url)
															? "bg-card/50"
															: "bg-secondary text-secondary-foreground"
													)}
												>
													{item.count}
												</span>
											</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
