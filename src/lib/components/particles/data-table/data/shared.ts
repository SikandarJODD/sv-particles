import type { SupportedLanguage } from "$lib/components/extra/code/shiki";
import { createBlockCodeTree, type BlockShowcaseItem } from "$lib/blocks/showcase";
import type { Component } from "svelte";

type ShowcaseFile = {
	id: string;
	path: string;
	code: string;
	lang: SupportedLanguage;
};

type CreateDataTableShowcaseOptions = {
	id: string;
	title: string;
	description: string;
	previewComponent: Component;
	defaultFileId: string;
	files: ShowcaseFile[];
};

export function createDataTableShowcase({
	id,
	title,
	description,
	previewComponent,
	defaultFileId,
	files,
}: CreateDataTableShowcaseOptions): BlockShowcaseItem {
	return {
		id,
		title,
		description,
		previewComponent,
		codeTree: createBlockCodeTree(defaultFileId, files),
	};
}
