<script lang="ts">
	import { page } from "$app/state";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
	import Badge from "./spell/badge/badge.svelte";

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
				},
				{
					title: "Alert Dialog",
					url: "/particles/alert-dialog",
				},
				{
					title: "Avatars",
					url: "/particles/avatars",
				},
				{
					title: "Banner",
					url: "/particles/banner",
					badge: "new",
				},
				{
					title: "Button",
					url: "/particles/button",
				},
				{
					title: "Input",
					url: "/particles/input",
				},
				{
					title: "Input Group",
					url: "/particles/input-group",
				},
				{
					title: "Input OTP",
					url: "/particles/input-otp",
				},
				{
					title: "Menu",
					url: "/particles/menu",
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
								<Sidebar.MenuButton isActive={isActive(item.url)} class='flex justify-between items-center'>
									{#snippet child({ props })}
										<a href={item.url} {...props}>
											<span>
												{item.title}
											</span>
											{#if item.badge === "new"}
												<Badge variant="emerald">New</Badge>
											{/if}
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
