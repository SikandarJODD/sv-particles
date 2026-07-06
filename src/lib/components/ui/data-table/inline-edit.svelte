<script lang="ts">
	import { tick } from "svelte";

	import { Input } from "$lib/components/ui/input";
	import { cn } from "$lib/utils";
	import { fly } from "svelte/transition";

	type InlineEditValue = string | number | null | undefined;
	type InlineEditType = "text" | "email" | "number" | "tel" | "url" | "search";

	type Props = {
		id: string | number;
		field: string;
		value: InlineEditValue;
		onSuccess: (payload: {
			id: string | number;
			field: string;
			value: string | number | "";
			previousValue: InlineEditValue;
		}) => void | Promise<void>;
		type?: InlineEditType;
		placeholder?: string;
		emptyText?: string;
		disabled?: boolean;
		class?: string;
		displayClass?: string;
		inputClass?: string;
	};

	const INITIAL_PROP = Symbol("initial-prop");

	let {
		id,
		field,
		value,
		onSuccess,
		type = "text",
		placeholder = "",
		emptyText = "-",
		disabled = false,
		class: className = "",
		displayClass = "",
		inputClass = "",
	}: Props = $props();

	let isEditing = $state(false);
	let isSaving = $state(false);
	let errorMessage = $state("");
	let skipBlurCommit = false;
	let inputRef = $state<HTMLInputElement | null>(null);

	let committedValue = $state<InlineEditValue>(undefined);
	let lastPropValue = $state<InlineEditValue | typeof INITIAL_PROP>(INITIAL_PROP);
	let draftValue = $state("");

	$effect(() => {
		if (value === lastPropValue || isEditing || isSaving) {
			return;
		}

		committedValue = value;
		lastPropValue = value;
		draftValue = toInputValue(value);
		errorMessage = "";
	});

	function toInputValue(nextValue: InlineEditValue) {
		return nextValue == null ? "" : String(nextValue);
	}

	function isDraftUnchanged() {
		return draftValue === toInputValue(committedValue);
	}

	function parseDraftValue() {
		if (type === "number") {
			return draftValue === "" ? "" : Number(draftValue);
		}

		return draftValue;
	}

	async function startEdit() {
		if (disabled || isSaving) return;

		draftValue = toInputValue(committedValue);
		errorMessage = "";
		isEditing = true;
		skipBlurCommit = false;

		await tick();
		inputRef?.focus();
		inputRef?.select();
	}

	function cancelEdit() {
		draftValue = toInputValue(committedValue);
		errorMessage = "";
		isEditing = false;
		skipBlurCommit = true;
	}

	async function commitEdit() {
		if (!isEditing || isSaving) return;

		if (isDraftUnchanged()) {
			errorMessage = "";
			isEditing = false;
			return;
		}

		const nextValue = parseDraftValue();
		const previousValue = committedValue;

		isSaving = true;
		errorMessage = "";

		try {
			await onSuccess({
				id,
				field,
				value: nextValue,
				previousValue,
			});

			committedValue = nextValue;
			lastPropValue = nextValue;
			draftValue = toInputValue(nextValue);
			isEditing = false;
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : "Failed to save changes.";
		} finally {
			isSaving = false;
		}
	}

	async function handleBlur() {
		if (skipBlurCommit) {
			skipBlurCommit = false;
			return;
		}

		await commitEdit();
	}

	async function handleDisplayKeydown(event: KeyboardEvent) {
		if (event.key !== "Enter" && event.key !== " ") return;

		event.preventDefault();
		await startEdit();
	}

	async function handleInputKeydown(event: KeyboardEvent) {
		if (event.key === "Enter") {
			event.preventDefault();
			await commitEdit();
			return;
		}

		if (event.key === "Escape") {
			event.preventDefault();
			cancelEdit();
		}
	}
</script>

<div class={cn("", className)}>
	{#if isEditing}
		<div in:fly={{ x: -1 }} class="space-y-1">
			<Input
				bind:ref={inputRef}
				bind:value={draftValue}
				{type}
				{placeholder}
				disabled={disabled || isSaving}
				class={cn("h-8 min-w-0 border-none ring-0 focus-visible:ring-0", inputClass)}
				aria-invalid={errorMessage ? "true" : undefined}
				onblur={handleBlur}
				onkeydown={handleInputKeydown}
			/>
			{#if errorMessage}
				<p class="text-xs text-destructive" role="alert">
					{errorMessage}
				</p>
			{/if}
		</div>
	{:else}
		<button
			type="button"
			class={cn(
				"inline-flex min-h-8 w-full min-w-0 cursor-pointer items-center rounded-sm px-2 text-left outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
				!toInputValue(committedValue) && "text-muted-foreground",
				displayClass
			)}
			{disabled}
			ondblclick={startEdit}
			onkeydown={handleDisplayKeydown}
		>
			<span class="truncate">{toInputValue(committedValue) || emptyText}</span>
		</button>
	{/if}
</div>
