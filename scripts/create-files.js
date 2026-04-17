import fs from 'node:fs';
import path from 'node:path';

let files = [
	"basic-alert-dialog.svelte",
	"alert-dialog-with-bare-footer.svelte"
];

let targetDir = process.argv[2];

if (!targetDir) {
	console.log('Please provide a folder path.');
	console.log('Example: node create-files.js ./src/lib/components/input');
	process.exit(1);
}

// Create folder if it does not exist
fs.mkdirSync(targetDir, { recursive: true });

let content = `<script lang="ts">
 import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
</script>

<AlertDialog.Root>
 <AlertDialog.Trigger>Open</AlertDialog.Trigger>
 <AlertDialog.Content>
  <AlertDialog.Header>
   <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
   <AlertDialog.Description>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </AlertDialog.Description>
  </AlertDialog.Header>
  <AlertDialog.Footer>
   <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
   <AlertDialog.Action>Continue</AlertDialog.Action>
  </AlertDialog.Footer>
 </AlertDialog.Content>
</AlertDialog.Root>`;

for (const file of files) {
	let filePath = path.join(targetDir, file);

	if (fs.existsSync(filePath)) {
		console.log(`File ${file} already exists. Skipping...`);
		continue;
	}
	fs.writeFileSync(filePath, content);
	console.log(`File ${file} created.`);
}

console.log('\n All files created successfully inside ' + targetDir);
