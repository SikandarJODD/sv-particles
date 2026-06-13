<script lang="ts">
	import { page } from "$app/state";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { navItems } from "$lib/navigation/nav";
	import { SITE_NAME } from "$lib/seo/particles";
	import { cn } from "$lib/utils";
	import MenuIcon from "@lucide/svelte/icons/menu";
	import ThemeSwitch from "../ui/theme-switch/theme-switch.svelte";
	let open = $state(false);
	$inspect(open, "open");
</script>

<div class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur md:hidden">
	<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
		<a href="/" class="text-sm font-medium tracking-tight">{SITE_NAME}</a>
		<div class="flex items-center gap-2">
			<ThemeSwitch />
			<DropdownMenu.Root bind:open onOpenChange={(value) => (open = value)}>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button
							variant="outline"
							aria-expanded={open}
							aria-label={open ? "Close menu" : "Open menu"}
							size="icon-sm"
							{...props}
						>
							<MenuIcon class="h-4 w-4" strokeWidth={1.4} />
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>

				<DropdownMenu.Content align="end" class="min-w-52">
					{#each navItems as item (item.href)}
						<DropdownMenu.Item
							class={cn(
								"cursor-pointer",
								page.url.pathname === item.href &&
									"bg-accent text-accent-foreground"
							)}
						>
							{#snippet child({ props })}
								<a
									href={item.href}
									{...props}
									aria-current={page.url.pathname === item.href
										? "page"
										: undefined}
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
</div>
