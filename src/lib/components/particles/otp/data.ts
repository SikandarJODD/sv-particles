import type { Component } from 'svelte';
import type { Data } from '$lib/types/structure';

type OtpEntry = {
	file: string;
	name: string;
};

const previewModules = import.meta.glob('./*.svelte', {
	eager: true,
	import: 'default'
}) as Record<string, Component>;

const rawModules = import.meta.glob('./*.svelte', {
	eager: true,
	import: 'default',
	query: '?raw'
}) as Record<string, string>;

const otpEntries: OtpEntry[] = [
	{ file: 'basic-otp.svelte', name: 'Basic OTP' },
	{ file: 'with-separator.svelte', name: 'With Separator' },
	{ file: 'with-field-label.svelte', name: 'With Field Label' },
	{ file: 'with-custom-sanitization.svelte', name: 'With Custom Sanitization' },
	{ file: 'with-auto-validation.svelte', name: 'With Auto Validation' },
	{ file: 'alpha-numeric.svelte', name: 'Alpha Numeric' },
	// { file: 'with-placeholder.svelte', name: 'With Placeholder Caret' },
	// { file: 'masked-otp-field.svelte', name: 'Masked OTP Field' }
];

const getData = ({ file, name }: OtpEntry): Data => {
	const moduleKey = `./${file}`;
	const id = file.replace('.svelte', '');

	return {
		id,
		name,
		preview: previewModules[moduleKey],
		components: ['input-otp'],
		installation_url: `/o/${id}.json`,
		code: {
			filename: file,
			code: rawModules[moduleKey]
		}
	};
};

export const otpData: Data[] = otpEntries.map(getData);
