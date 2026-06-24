import fs from "node:fs";
import path from "node:path";

let files = [
	"banner-5.md",
	"banner-6.md",
	"banner-7.md",
	"banner-8.md",
	"banner-9.md",
	"banner-10.md",
	"banner-11.md",
	"banner-12.md",
];

let targetDir = process.argv[2];

if (!targetDir) {
	console.log("Please provide a folder path.");
	console.log("Example: node create-files.js ./src/lib/components/input");
	process.exit(1);
}

// Create folder if it does not exist
fs.mkdirSync(targetDir, { recursive: true });

let content = ``;

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
