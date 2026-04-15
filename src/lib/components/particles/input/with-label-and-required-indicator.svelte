<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label';
	let id = 'email';
</script>

<div class="flex flex-col gap-2">
	<Label for={id}>
		Email <span class="text-destructive">*</span>
	</Label>
	<Input {id} placeholder="Email" required type="email" />
</div>
