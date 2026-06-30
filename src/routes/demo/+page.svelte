<script lang="ts">
	import { PressedKeys, useInterval } from "runed";
	import { tableData } from "$lib/components/particles/table/data";

	const showcaseKeys = new PressedKeys();
	const lastIndex = tableData.length - 1;

	let currentIndex = $state(0);
	let currentTable = $derived(tableData[currentIndex]);
	let CurrentPreview = $derived(currentTable.preview);

	const interval = useInterval(3000, {
		immediate: false,
		callback: () => {
			if (currentIndex >= lastIndex) {
				interval.pause();
				return;
			}

			currentIndex += 1;
		},
	});

	function startShowcase() {
		if (currentIndex >= lastIndex) {
			currentIndex = 0;
		}

		interval.resume();
	}

	function stopShowcase() {
		interval.pause();
	}

	showcaseKeys.onKeys(["s"], startShowcase);
	showcaseKeys.onKeys(["x"], stopShowcase);
</script>

<section class="flex min-h-screen items-center justify-center p-6 md:p-10">
	<div class="w-full max-w-7xl overflow-auto">
		{#key currentTable.id}
			<CurrentPreview />
		{/key}
	</div>
</section>
