<script lang="ts">
	import MenuIcon from "@lucide/svelte/icons/menu";
	import { page } from "$app/state";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { navItems } from "$lib/navigation/nav";
	import { SITE_NAME } from "$lib/seo/particles";
	import { cn } from "$lib/utils";
</script>

<div class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur md:hidden">
	<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
		<a href="/" class="text-sm font-medium tracking-tight">{SITE_NAME}</a>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button
						variant="secondary"
						size="icon-sm"
						aria-label="Open navigation menu"
						{...props}
					>
						<MenuIcon />
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>

			<DropdownMenu.Content align="end" class="min-w-52">
				{#each navItems as item (item.href)}
					<DropdownMenu.Item
						class={cn(
							"cursor-pointer",
							page.url.pathname === item.href && "bg-accent text-accent-foreground"
						)}
					>
						{#snippet child({ props })}
							<a
								href={item.href}
								{...props}
								aria-current={page.url.pathname === item.href ? "page" : undefined}
							>
								{item.label}
							</a>
						{/snippet}
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
