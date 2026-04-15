import fs from 'node:fs';
import path from 'node:path';

/*
list of files
1. basic-input.svelte
2. disabled-input.svelte
3. file-input.svelte
4. with-label.svelte
5. with-label-and-required-indicator.svelte
6. with-optional-label.svelte
7. readonly-input.svelte
8. pill-shaped.svelte
9. button-using-group.svelte
10. characters-remaining-count.svelte
 */

let files = [
	'basic-input.svelte',
	'disabled-input.svelte',
	'file-input.svelte',
	'with-label.svelte',
	'with-label-and-required-indicator.svelte',
	'with-optional-label.svelte',
	'readonly-input.svelte',
	'pill-shaped.svelte',
	'characters-remaining-count.svelte',
	'password-input-toggle.svelte',
	'button-using-group.svelte',
	'password-input-with-strength-indicator.svelte'
	// 'input-group-keyboard-shortcut.svelte',
	// 'input-group-start-loading-spinner.svelte',
	// 'input-group-end-loading-spinner.svelte',
	// 'input-group-with-search.svelte',
	// 'input-group-with-character-count.svelte',
	// 'input-group-with-start-text-end-tooltip.svelte',
	// 'input-with-url-bar.svelte',
	// 'input-group-with-start-tooltip.svelte',
	// 'input-group-with-clear-button.svelte',
	// 'search-input-with-voice.svelte',
	// 'field-with-description.svelte',
	// 'field-with-required-indicator'
];

// get folder path from command line

let targetDir = process.argv[2];

if (!targetDir) {
	console.log('Please provide a folder path.');
	console.log('Example: node create-files.js ./src/lib/components/input');
	process.exit(1);
}

// Create folder if it does not exist
fs.mkdirSync(targetDir, { recursive: true });

let content = `<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
</script>

<div>
	<Input type="email" placeholder="Email" />
</div>`;

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
