import { definePageMetaTags } from 'svelte-meta-tags';
import type { JsonLdProps, MetaTagsProps } from 'svelte-meta-tags';
import { particleCategoryRouteIds, type ParticleCategoryRouteId } from '$lib/navigation/nav';

type StructuredData = NonNullable<JsonLdProps['schema']>;

export const SITE_NAME = 'Svelte QBlocks';
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
	'svelte shadcn blocks',
	'svelte shadcn components',
	'shadcn-svelte blocks',
	'svelte 5 components',
	'tailwind css components',
	'shared ui patterns',
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
		title: 'Svelte Shadcn Blocks',
		description:
			'Browse shadcn-svelte blocks and reusable Svelte components built with Svelte 5, Tailwind CSS, and TypeScript.',
		heading: 'Svelte Shadcn Blocks',
		intro:
			'Explore Qblocks, a growing library of shadcn-svelte blocks and reusable Svelte components for forms, menus, dialogs, buttons, and other common UI patterns.',
		keywords: [
			'svelte ui blocks',
			'svelte component blocks',
			'shadcn-svelte components',
			'reusable svelte components'
		],
		breadcrumb: 'Blocks'
	},
	accordion: {
		id: 'accordion',
		path: '/particles/accordion',
		title: 'Accordion Blocks',
		description:
			'Reusable shadcn-svelte accordion blocks and Svelte components for FAQs, disclosure panels, and controlled sections.',
		heading: 'Accordion Blocks',
		intro:
			'Use these accordion blocks when content needs progressive disclosure, FAQ-style grouping, or externally controlled open state without rebuilding the interaction pattern.',
		keywords: ['svelte accordion blocks', 'shadcn-svelte accordion', 'faq accordion', 'collapsible sections'],
		breadcrumb: 'Accordion'
	},
	menu: {
		id: 'menu',
		path: '/particles/menu',
		title: 'Menu Blocks',
		description:
			'Reusable shadcn-svelte menu blocks and Svelte components for actions, links, nested items, and selectable options.',
		heading: 'Menu Blocks',
		intro:
			'Use these menu blocks when you need compact action surfaces, layered navigation, or selectable menu states without rebuilding the interaction pattern from scratch.',
		keywords: ['svelte menu blocks', 'dropdown menu', 'context menu', 'navigation menu'],
		breadcrumb: 'Menu'
	},
	button: {
		id: 'button',
		path: '/particles/button',
		title: 'Button Blocks',
		description:
			'Reusable shadcn-svelte button blocks and Svelte components for primary actions, icons, toggles, and utility controls.',
		heading: 'Button Blocks',
		intro:
			'This collection covers action-first button blocks ranging from simple variants to utility controls, feedback states, and small interaction-rich components.',
		keywords: ['svelte button blocks', 'button variants', 'icon button', 'action button'],
		breadcrumb: 'Button'
	},
	avatars: {
		id: 'avatars',
		path: '/particles/avatars',
		title: 'Avatar Blocks',
		description:
			'Reusable shadcn-svelte avatar blocks and Svelte components for profiles, groups, badges, and status states.',
		heading: 'Avatar Blocks',
		intro:
			'Use these avatar blocks to present people, teams, and presence states with polished fallbacks, badges, and compact identity-focused layouts.',
		keywords: ['svelte avatar blocks', 'profile image', 'user badge', 'avatar group'],
		breadcrumb: 'Avatars'
	},
	banner: {
		id: 'banner',
		path: '/particles/banner',
		title: 'Banner Blocks',
		description:
			'Reusable shadcn-svelte banner blocks and Svelte components for announcements, offers, release updates, and dismissible promo strips.',
		heading: 'Banner Blocks',
		intro:
			'Use these banner blocks for top-of-page announcements, lightweight promotions, release notices, and other wide messaging surfaces that need clear hierarchy and compact actions.',
		keywords: ['svelte banner blocks', 'announcement bar', 'promo banner', 'notification strip'],
		breadcrumb: 'Banner'
	},
	input: {
		id: 'input',
		path: '/particles/input',
		title: 'Input Blocks',
		description:
			'Reusable shadcn-svelte input blocks and Svelte components for labels, passwords, files, counters, and custom field styles.',
		heading: 'Input Blocks',
		intro:
			'These input blocks focus on individual field treatments, helping you compose polished form controls with better labels, states, and small utility behaviors.',
		keywords: ['svelte input blocks', 'form field', 'text input', 'password input'],
		breadcrumb: 'Input'
	},
	'input-group': {
		id: 'input-group',
		path: '/particles/input-group',
		title: 'Input Group Blocks',
		description:
			'Reusable shadcn-svelte input group blocks and Svelte components with icons, buttons, badges, tooltips, and loaders.',
		heading: 'Input Group Blocks',
		intro:
			'Reach for these blocks when a plain field is not enough and the input needs surrounding controls, affordances, or compositional UI around the core value entry.',
		keywords: ['svelte input group blocks', 'compound input', 'search bar', 'message composer'],
		breadcrumb: 'Input Group'
	},
	'input-otp': {
		id: 'input-otp',
		path: '/particles/input-otp',
		title: 'OTP Input Blocks',
		description:
			'Reusable shadcn-svelte OTP input blocks and Svelte components for code entry, validation, labels, and separators.',
		heading: 'OTP Input Blocks',
		intro:
			'These OTP input blocks are tuned for verification and sign-in flows where segmented input, validation feedback, and clean code entry states matter.',
		keywords: ['svelte otp input blocks', 'verification code', 'one time password', 'auth ui'],
		breadcrumb: 'Input OTP'
	},
	'alert-dialog': {
		id: 'alert-dialog',
		path: '/particles/alert-dialog',
		title: 'Alert Dialog Blocks',
		description:
			'Reusable shadcn-svelte alert dialog blocks and Svelte components for confirmations, warnings, and destructive actions.',
		heading: 'Alert Dialog Blocks',
		intro:
			'Use these alert dialog blocks for high-importance decisions where the interface needs clear hierarchy, safe defaults, and explicit user confirmation.',
		keywords: ['svelte alert dialog blocks', 'confirmation modal', 'destructive action', 'dialog pattern'],
		breadcrumb: 'Alert Dialog'
	},
	tabs: {
		id: 'tabs',
		path: '/particles/tabs',
		title: 'Tabs Blocks',
		description:
			'Reusable shadcn-svelte tabs blocks and Svelte components for navigation, content grouping, and stateful sections.',
		heading: 'Tabs Blocks',
		intro:
			'These tabs blocks are designed for organizing content into manageable sections, allowing users to switch between different views or categories without leaving the page.',
		keywords: ['svelte tabs blocks', 'tabbed navigation', 'content grouping', 'stateful sections'],
		breadcrumb: 'Tabs'
	},
	table:{
		id: 'table',
		path: '/particles/table',
		title: 'Table Blocks',
		description:
			'Reusable shadcn-svelte table blocks and Svelte components for displaying data in rows and columns with sorting, filtering, and pagination.',
		heading: 'Table Blocks',
		intro:
			'These table blocks are ideal for presenting structured data, allowing users to easily read, sort, and interact with tabular information.',
		keywords: ['svelte table blocks', 'data table', 'sortable table', 'filterable table'],
		breadcrumb: 'Table'
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
