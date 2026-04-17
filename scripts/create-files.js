import fs from "node:fs";
import path from "node:path";

let files = [
	"basic-avatar.svelte",
	"fallback-only.svelte",
	"with-different-sizes.svelte",
	"with-different-radii.svelte",
	"overlapping-avatar-group.svelte",
	"small-overlapping-avatar-group.svelte",
	"large-overlapping-avatar-group.svelte",
	"with-user-icon-fallback.svelte",
	"with-emerald-status-dot.svelte",
	"with-muted-status-dot.svelte",
	"rounded-with-emerald-status-dot.svelte",
	"with-notification-badge.svelte",
	"with-rounded-notification-badge.svelte",
	"with-verify-badge.svelte",

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
 import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<Avatar.Root>
 <Avatar.Image src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80" alt="@SikandarJODD" />
 <Avatar.Fallback>SB</Avatar.Fallback>
</Avatar.Root>`;

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
