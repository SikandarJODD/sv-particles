<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Menubar from "$lib/components/ui/menubar/index.js";
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>
			{#snippet child({ props })}
				<Button variant="outline" size="sm" {...props}>Open Menu</Button>
			{/snippet}
		</Menubar.Trigger>
		<Menubar.Content >
			<Menubar.Group>
				<Menubar.GroupHeading>Playback</Menubar.GroupHeading>
				<Menubar.Label class="text-sm text-muted-foreground">Play options</Menubar.Label>
				<Menubar.Item>
					Play
					<Menubar.Shortcut>⌘P</Menubar.Shortcut>
				</Menubar.Item>
			</Menubar.Group>
			<Menubar.Item>
				New Tab
				<Menubar.Shortcut>⌘T</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>New Window</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>Share</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>Print</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
