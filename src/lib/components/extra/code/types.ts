import type { WithChildren, WithoutChildren } from 'bits-ui';
import type { CodeVariant } from '.';
import type { SupportedLanguage } from './shiki';
import type { HTMLAttributes } from 'svelte/elements';
import type { CopyButtonPropsWithoutHTML } from '$lib/components/extra/copy-button/copy-button.svelte';

export type CodeRootPropsWithoutHTML = WithChildren<{
	ref?: HTMLDivElement | null;
	variant?: CodeVariant;
	lang?: SupportedLanguage;
	code: string;
	class?: string;
	hideLines?: boolean;
	highlight?: (number | [number, number])[];
}>;

export type CodeRootProps = CodeRootPropsWithoutHTML &
	WithoutChildren<HTMLAttributes<HTMLDivElement>>;

export type CodeCopyButtonPropsWithoutHTML = Omit<CopyButtonPropsWithoutHTML, 'text'>;

export type CodeCopyButtonProps = CodeCopyButtonPropsWithoutHTML &
	WithoutChildren<HTMLAttributes<HTMLButtonElement>>;

export type CodeOverflowPropsWithoutHTML = WithChildren<{
	collapsed?: boolean;
}>;

export type CodeOverflowProps = CodeOverflowPropsWithoutHTML &
	WithoutChildren<HTMLAttributes<HTMLDivElement>>;

// Main Code Types
export type CodeType = {
	code: string;
	lang?: SupportedLanguage;
	variant?: CodeVariant;
	hideLines?: boolean;
	highlight?: (number | [number, number])[];
	filename: string;

};

// Usage doesn't require filename ..will need this in future
export type CodeUsageType = {
	code: string;
	lang?: SupportedLanguage;
	variant?: CodeVariant;
	hideLines?: boolean;
	highlight?: (number | [number, number])[];
};
