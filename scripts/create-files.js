import fs from "node:fs";
import path from "node:path";

let files = [
	"basic-table.svelte",
	"with-images.svelte",
	"without-horizontal-divider.svelte",
	"striped-table.svelte",
	"with-vertical-lines.svelte",
	"dense-table.svelte",
	"table-with-row-selection.svelte",
	"card-table.svelte",
	"vertical-table.svelte",
	"table-with-sticky-header.svelte",
	"unique-table.svelte",
	"basic-data-table-with-vincjo.svelte",
	"data-table-with-filters.svelte",
	"resizable-sortable-table.svelte",
	"pinnable-columns-table.svelte",
	"draggable-columns-table.svelte",
	"expanding-sub-rows-table.svelte",
	"paginated-table.svelte",
	"complex-table.svelte",
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
	import * as Table from "$lib/components/ui/table/index.js";

	const items = [
		{
			balance: "$1,250.00",
			email: "alex.t@company.com",
			id: "1",
			location: "San Francisco, US",
			name: "Alex Thompson",
			status: "Active",
		},
		{
			balance: "$600.00",
			email: "sarah.c@company.com",
			id: "2",
			location: "Singapore",
			name: "Sarah Chen",
			status: "Active",
		},
		{
			balance: "$650.00",
			email: "j.wilson@company.com",
			id: "3",
			location: "London, UK",
			name: "James Wilson",
			status: "Inactive",
		},
		{
			balance: "$0.00",
			email: "m.garcia@company.com",
			id: "4",
			location: "Madrid, Spain",
			name: "Maria Garcia",
			status: "Active",
		},
		{
			balance: "-$1,000.00",
			email: "d.kim@company.com",
			id: "5",
			location: "Seoul, KR",
			name: "David Kim",
			status: "Active",
		},
	];
</script>

<div class="mx-auto w-4xl py-10">
	<Table.Root class="w-full">
		<Table.Caption>Basic Table</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Name</Table.Head>
				<Table.Head>Email</Table.Head>
				<Table.Head>Location</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Balance</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each items as item}
				<Table.Row>
					<Table.Cell class="font-medium">{item.name}</Table.Cell>
					<Table.Cell>{item.email}</Table.Cell>
					<Table.Cell>{item.location}</Table.Cell>
					<Table.Cell>{item.status}</Table.Cell>
					<Table.Cell class="text-end">{item.balance}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
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
