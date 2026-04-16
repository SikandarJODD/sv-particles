<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Field from '$lib/components/ui/field/index.js';

	let maxlength = 14;
	let value = $state('');
</script>

<Field.Field>
	<Input {maxlength} placeholder="Enter code" type="text" bind:value  class='max-w-xs'/>
	<Field.Description>
		<span class="tabular-nums">{maxlength - value.length}</span>{' '}
		characters left
	</Field.Description>
</Field.Field>
