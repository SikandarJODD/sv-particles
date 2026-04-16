import fs from 'node:fs';
import path from 'node:path';

let files = [
	'basic-input-group.svelte',
	'end-icon.svelte',
	'start-text.svelte',
	'end-text.svelte',
	'start-and-end-text.svelte',
	'end-tooltip.svelte',
	'keyboard-shortcut.svelte',
	'with-inner-label.svelte',
	'disabled.svelte',
	'loading-spinner.svelte',
	'with-textarea.svelte',
	'with-icon-button.svelte',
	'with-button.svelte',
	'with-badge.svelte',
	'with-badge-and-menu.svelte',
	'mini-editor-group-toggle.svelte',
	'with-search.svelte',
	'with-start-tooltip.svelte',
	'with-clear-button.svelte',
	'search-input-with-loader-and-voice.svelte',
	'with-character-count.svelte',
	'password-input-with-strength-inidicator.svelte',
	'code-snippet-with-language-selector.svelte',
	'message-composer-with-attachments.svelte',
	'chat-input-with-voice-and-send-button.svelte',
	'with-start-text-end-tooltip.svelte',
	'input-group-with-mimicking-url-bar.svelte',
	'with-keyboard-shortcut-search.svelte',
	'start-loading-spinner.svelte',
	'end-loading-spinner.svelte'
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
	import * as InputGroup from "$lib/components/ui/input-group/index.js";
	import SearchIcon from "@lucide/svelte/icons/search";
</script>

<InputGroup.Root>
	<InputGroup.Input placeholder="Search..." />
	<InputGroup.Addon>
    	<SearchIcon />
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
        <InputGroup.Button>Search</InputGroup.Button>
    </InputGroup.Addon>
</InputGroup.Root>`;

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
