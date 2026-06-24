import fs from "node:fs";
import path from "node:path";

let files = [
	"tab-1.svelte",
	"tab-2.svelte",
	"tab-3.svelte",
	"tab-4.svelte",
	"tab-5.svelte",
	"tab-6.svelte",
	"tab-7.svelte",
	"tab-8.svelte",
	"tab-9.svelte",
	"tab-10.svelte",
	"tab-11.svelte",
	"tab-12.svelte",
	"tab-13.svelte",
	"tab-14.svelte",
	"tab-15.svelte",
	"tab-16.svelte",
	"tab-17.svelte",
	"tab-18.svelte",
	"tab-19.svelte",
	"tab-20.svelte",
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
	import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<Tabs.Root value="tab-1" class="items-center">
	<Tabs.List>
		<Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
		<Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
		<Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="tab-1">
		<p class="p-4 text-center text-xs text-muted-foreground">Content for Tab 1</p>
	</Tabs.Content>
	<Tabs.Content value="tab-2">
		<p class="p-4 text-center text-xs text-muted-foreground">Content for Tab 2</p>
	</Tabs.Content>
	<Tabs.Content value="tab-3">
		<p class="p-4 text-center text-xs text-muted-foreground">Content for Tab 3</p>
	</Tabs.Content>
</Tabs.Root>
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
