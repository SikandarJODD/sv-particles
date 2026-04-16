<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index.js';
</script>

<div class="flex items-center gap-2">
	<Input class="flex-1" placeholder="you@example.com" type="email" />
	<div>
		<Button variant="outline">Send</Button>
	</div>
</div>
