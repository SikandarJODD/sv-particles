<script lang="ts" generics="Row extends Record<string, unknown>">
	import { Select as SelectPrimitive } from 'bits-ui';
	import * as Select from '$lib/components/ui/select';
	import type { TableHandlerInterface } from '@vincjo/datatables/server';
	import { cn } from '$lib/utils';

	type Props = {
		table: TableHandlerInterface<Row>;
		options?: number[];
		class?: string;
	};

	let { table, options = [5, 10, 20, 50, 100], class: className = '' }: Props = $props();

	function handleValueChange(value: string) {
		const rowsPerPage = Number(value);
		if (Number.isNaN(rowsPerPage) || rowsPerPage === table.rowsPerPage) return;

		table.rowsPerPage = rowsPerPage;
		table.setPage(1);
	}
</script>

<aside
	class={cn(
		'text-muted-foreground mx-4 my-2 flex h-8 items-center justify-start gap-2 text-sm',
		className
	)}
>
	{#if table.clientWidth > 600}
		<span>{table.i18n.show}</span>
	{/if}

	<Select.Root
		type="single"
		value={String(table.rowsPerPage)}
		items={options.map((option) => ({ value: String(option), label: String(option) }))}
		onValueChange={handleValueChange}
	>
		<Select.Trigger class="h-8 min-w-16 px-3 py-1 text-sm">
			<SelectPrimitive.Value placeholder={String(options[0] ?? table.rowsPerPage)} />
		</Select.Trigger>
		<Select.Content class="p-0.5">
			{#each options as option (option)}
				<Select.Item value={String(option)} label={String(option)}>
					{option}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	{#if table.clientWidth > 600}
		<span>{table.i18n.entries}</span>
	{/if}
</aside>