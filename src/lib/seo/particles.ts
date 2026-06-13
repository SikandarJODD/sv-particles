import { definePageMetaTags } from 'svelte-meta-tags';
import type { JsonLdProps, MetaTagsProps } from 'svelte-meta-tags';
import { particleCategoryRouteIds, type ParticleCategoryRouteId } from '$lib/navigation/nav';

type StructuredData = NonNullable<JsonLdProps['schema']>;

export const SITE_NAME = 'Svelte Particles';
export const SITE_URL = 'https://sv-particles.vercel.app';
export const SITE_GITHUB_URL = 'https://github.com/SikandarJODD/sv-particles';
export const SITE_TWITTER_HANDLE = '@Sikandar_Bhide';
export const SITE_TWITTER_URL = 'https://x.com/Sikandar_Bhide';
export const SITE_LOCALE = 'en_US';
export const SITE_TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

type ParticlesRouteId =
	| 'particles'
	| ParticleCategoryRouteId;

type ParticlesRouteDefinition = {
	id: ParticlesRouteId;
	path: `/${string}`;
	title: string;
	description: string;
	heading: string;
	intro: string;
	keywords: string[];
	breadcrumb: string;
};

const SHARED_KEYWORDS = [
	'svelte particles',
	'svelte 5',
	'shared UI patterns',
	'shadcn svelte',
	'tailwind css',
	'typescript'
];

const creator = {
	'@type': 'Person',
	name: 'Sikandar Bhide',
	url: SITE_TWITTER_URL,
	sameAs: [SITE_TWITTER_URL, SITE_GITHUB_URL]
} as const;

const publisher = {
	'@type': 'Organization',
	name: SITE_NAME,
	url: SITE_URL,
	sameAs: [SITE_GITHUB_URL, SITE_TWITTER_URL]
} as const;

export const particlesSeoRoutes: Record<ParticlesRouteId, ParticlesRouteDefinition> = {
	particles: {
		id: 'particles',
		path: '/particles',
		title: 'UI Particles',
		description:
			'Explore reusable Svelte particles built with Svelte 5, Tailwind CSS, and TypeScript. Browse focused UI patterns for buttons, menus, avatars, inputs, OTP fields, and alert dialogs.',
		heading: 'Particles Library',
		intro:
			'Explore focused UI particles for common interface patterns and jump into the category that fits your next interaction, form, or navigation flow.',
		keywords: ['svelte components', 'ui particles', 'component patterns', 'svelte ui library'],
		breadcrumb: 'Particles'
	},
	menu: {
		id: 'menu',
		path: '/particles/menu',
		title: 'Menu Particles',
		description:
			'Browse reusable Svelte menu particles for dropdown actions, nested navigation, links, grouped items, checkbox menus, and radio group selections.',
		heading: 'Menu Particles',
		intro:
			'Use these menu particles when you need compact action surfaces, layered navigation, or selectable menu states without rebuilding the interaction pattern from scratch.',
		keywords: ['svelte menu', 'dropdown menu', 'context menu', 'navigation menu'],
		breadcrumb: 'Menu'
	},
	button: {
		id: 'button',
		path: '/particles/button',
		title: 'Buttons Particles',
		description:
			'Explore Svelte button particles for primary actions, icon buttons, copy interactions, status toggles, navigation controls, and utility button patterns.',
		heading: 'Buttons Particles',
		intro:
			'This collection covers action-first button patterns ranging from simple variants to utility controls, feedback states, and small interaction-rich components.',
		keywords: ['svelte button', 'button variants', 'icon button', 'action button'],
		breadcrumb: 'Button'
	},
	avatars: {
		id: 'avatars',
		path: '/particles/avatars',
		title: 'Avatar Particles',
		description:
			'Discover Svelte avatar particles for profile imagery, fallback states, status indicators, overlapping groups, badges, and verification markers.',
		heading: 'Avatar Particles',
		intro:
			'Use these avatar particles to present people, teams, and presence states with polished fallbacks, badges, and compact identity-focused layouts.',
		keywords: ['svelte avatar', 'profile image', 'user badge', 'avatar group'],
		breadcrumb: 'Avatars'
	},
	input: {
		id: 'input',
		path: '/particles/input',
		title: 'Input Particles',
		description:
			'Browse Svelte input particles for labeled fields, password states, pill inputs, file inputs, readonly states, counters, and custom field treatments.',
		heading: 'Input Particles',
		intro:
			'These input particles focus on individual field treatments, helping you compose polished form controls with better labels, states, and small utility behaviors.',
		keywords: ['svelte input', 'form field', 'text input', 'password input'],
		breadcrumb: 'Input'
	},
	'input-group': {
		id: 'input-group',
		path: '/particles/input-group',
		title: 'Input Group Particles',
		description:
			'Explore Svelte input group particles that combine fields with icons, buttons, tooltips, loaders, badges, shortcuts, editors, and messaging controls.',
		heading: 'Input Group Particles',
		intro:
			'Reach for these patterns when a plain field is not enough and the input needs surrounding controls, affordances, or compositional UI around the core value entry.',
		keywords: ['svelte input group', 'compound input', 'search bar', 'message composer'],
		breadcrumb: 'Input Group'
	},
	'input-otp': {
		id: 'input-otp',
		path: '/particles/input-otp',
		title: 'OTP Input Particles',
		description:
			'Browse Svelte OTP input particles for verification flows with separators, labels, sanitization, validation, and alphanumeric one-time passcode entry.',
		heading: 'OTP Input Particles',
		intro:
			'These OTP particles are tuned for verification and sign-in flows where segmented input, validation feedback, and clean code entry states matter.',
		keywords: ['svelte otp input', 'verification code', 'one time password', 'auth ui'],
		breadcrumb: 'Input OTP'
	},
	'alert-dialog': {
		id: 'alert-dialog',
		path: '/particles/alert-dialog',
		title: 'Alert Dialog Particles',
		description:
			'Explore Svelte alert dialog particles for destructive confirmations, compact decision prompts, and confirmation flows with minimal but clear action framing.',
		heading: 'Alert Dialog Particles',
		intro:
			'Use these alert dialog particles for high-importance decisions where the interface needs clear hierarchy, safe defaults, and explicit user confirmation.',
		keywords: ['svelte alert dialog', 'confirmation modal', 'destructive action', 'dialog pattern'],
		breadcrumb: 'Alert Dialog'
	}
};

export const particlesRouteOrder: ParticlesRouteId[] = ['particles', ...particleCategoryRouteIds];

export const particlesLeafRoutes = particlesRouteOrder
	.filter((id) => id !== 'particles')
	.map((id) => particlesSeoRoutes[id]);

export const particlesPublicPaths = particlesRouteOrder.map((id) => particlesSeoRoutes[id].path);

export const toAbsoluteUrl = (path: `/${string}`) => new URL(path, SITE_URL).toString();

export const buildParticlesBaseMetaTags = (): MetaTagsProps => ({
	titleTemplate: SITE_TITLE_TEMPLATE,
	robots: 'index,follow',
	additionalRobotsProps: {
		maxSnippet: -1,
		maxImagePreview: 'large',
		maxVideoPreview: -1
	},
	openGraph: {
		type: 'website',
		locale: SITE_LOCALE,
		siteName: SITE_NAME
	},
	twitter: {
		cardType: 'summary',
		site: SITE_TWITTER_HANDLE,
		creator: SITE_TWITTER_HANDLE
	},
	keywords: SHARED_KEYWORDS
});

export const buildParticlesPageMetaTags = (
	definition: ParticlesRouteDefinition
): MetaTagsProps => ({
	title: definition.title,
	description: definition.description,
	canonical: toAbsoluteUrl(definition.path),
	keywords: [...SHARED_KEYWORDS, ...definition.keywords],
	openGraph: {
		url: toAbsoluteUrl(definition.path),
		title: definition.title,
		description: definition.description
	},
	twitter: {
		title: definition.title,
		description: definition.description
	}
});

const buildBreadcrumbSchema = (
	definition: ParticlesRouteDefinition
): Record<string, unknown> => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			item: SITE_URL
		},
		{
			'@type': 'ListItem',
			position: 2,
			name: particlesSeoRoutes.particles.breadcrumb,
			item: toAbsoluteUrl(particlesSeoRoutes.particles.path)
		},
		{
			'@type': 'ListItem',
			position: 3,
			name: definition.breadcrumb,
			item: toAbsoluteUrl(definition.path)
		}
	]
});

const buildCollectionSchema = (
	definition: ParticlesRouteDefinition
): Record<string, unknown> => ({
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	name: definition.heading,
	description: definition.description,
	url: toAbsoluteUrl(definition.path),
	inLanguage: 'en',
	isPartOf:
		definition.id === 'particles'
			? {
					'@type': 'WebSite',
					name: SITE_NAME,
					url: SITE_URL
				}
			: {
					'@type': 'CollectionPage',
					name: particlesSeoRoutes.particles.heading,
					url: toAbsoluteUrl(particlesSeoRoutes.particles.path)
				},
	about: {
		'@type': 'SoftwareSourceCode',
		name: SITE_NAME,
		codeRepository: SITE_GITHUB_URL,
		programmingLanguage: ['Svelte', 'TypeScript'],
		creator
	},
	author: creator,
	publisher,
	mainEntity:
		definition.id === 'particles'
			? {
					'@type': 'ItemList',
					itemListElement: particlesLeafRoutes.map((route, index) => ({
						'@type': 'ListItem',
						position: index + 1,
						name: route.heading,
						url: toAbsoluteUrl(route.path),
						description: route.description
					}))
				}
			: undefined,
	keywords: [...SHARED_KEYWORDS, ...definition.keywords].join(', ')
});

export const buildParticlesPageSchema = (
	definition: ParticlesRouteDefinition
): StructuredData => {
	const collectionSchema = buildCollectionSchema(definition);

	if (definition.id === 'particles') {
		return collectionSchema as StructuredData;
	}

	const pageSchema: Record<string, unknown>[] = [
		collectionSchema,
		buildBreadcrumbSchema(definition)
	];

	return pageSchema as unknown as StructuredData;
};

export const buildParticlesPageData = (routeId: ParticlesRouteId) => {
	const definition = particlesSeoRoutes[routeId];

	return {
		...definePageMetaTags(buildParticlesPageMetaTags(definition)),
		pageSchema: buildParticlesPageSchema(definition),
		heading: definition.heading,
		intro: definition.intro
	};
};
