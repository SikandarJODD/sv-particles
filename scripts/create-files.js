import fs from "node:fs";
import path from "node:path";

let files = [
	"basic-otp.svelte",
	"with-separator.svelte",
	"with-field-label.svelte",
	"with-custom-sanitization.svelte",
	"with-auto-validation.svelte",
	"alpha-numeric.svelte",
	"with-placeholder.svelte",
	"masked-otp-field.svelte",
];

let targetDir = process.argv[2];

if (!targetDir) {
	console.log("Please provide a folder path.");
	console.log("Example: node create-files.js ./src/lib/components/input");
	process.exit(1);
}

// Create folder if it does not exist
fs.mkdirSync(targetDir, { recursive: true });

let content = `<script lang="ts">
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import { REGEXP_ONLY_DIGITS_AND_CHARS } from "bits-ui";
</script>

<InputOTP.Root maxlength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
	{#snippet children({ cells })}
		<InputOTP.Group>
			{#each cells as cell (cell)}
				<InputOTP.Slot {cell} />
			{/each}
		</InputOTP.Group>
	{/snippet}
</InputOTP.Root>
`;

for (const file of files) {
	let filePath = path.join(targetDir, file);

	if (fs.existsSync(filePath)) {
		console.log(`File ${file} already exists. Skipping...`);
		continue;
	}
	fs.writeFileSync(filePath, content);
	console.log(`File ${file} created.`);
}

console.log("\n All files created successfully inside " + targetDir);
