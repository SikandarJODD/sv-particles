<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion/index.js";
	const items = [
		{
			content:
				"Svelte Particles is built on top of shadcn-svelte and provide a set of pre-styled components that you can use to quickly build your UI.",
			id: "item-1",
			title: "What is Svelte Particles?",
		},
		{
			content:
				'Head to the "Quick start" guide in the docs. It will walk you through the steps to get Svelte Particles up and running in your project.',
			id: "item-2",
			title: "How do I get started?",
		},
		{
			content: "Of course! Svelte Particles is free and open source.",
			id: "item-3",
			title: "Can I use it for my project?",
		},
	];
</script>

<Accordion.Root type="multiple" class="w-full sm:max-w-[70%]" value={["item-1"]}>
	{#each items as item}
		<Accordion.Item value={item.id}>
			<Accordion.Trigger>{item.title}</Accordion.Trigger>
			<Accordion.Content>
				<p>
					{item.content}
				</p>
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
