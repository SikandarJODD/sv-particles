import type { Component } from 'svelte';
import type { CodeType } from '$lib/components/extra/code/types';

type Data = {
	id: string;
	name: string;
	components?: string[]; // shadcn components used in the example
	preview: Component;
	code: CodeType | CodeType[];
	installation_url: string; // /r/unique.json
	folder_structure?: string;
};

// installation_url : /b/default-button.json
export type { Data };
