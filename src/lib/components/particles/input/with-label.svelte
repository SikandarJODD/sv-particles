<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label';
	let id = 'email';
</script>

<div class="flex flex-col items-start gap-2">
	<Label for={id}>Email</Label>
	<Input aria-label="Email" id={id} placeholder="you@example.com" type="email" />
</div>
