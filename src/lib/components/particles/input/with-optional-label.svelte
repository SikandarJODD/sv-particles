<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label';
	let id = 'email';
</script>

<div class="flex flex-col gap-2">
	<div class="inline-flex w-full items-center justify-between gap-2">
		<Label for={id}>Email</Label>
		<span class="font-normal text-muted-foreground">Optional</span>
	</div>
	<Input {id} placeholder="Email" required type="email" />
</div>
