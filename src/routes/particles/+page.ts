import type { PageLoad } from './$types';
import { buildParticlesPageData, particlesLeafRoutes } from '$lib/seo/particles';

export const load = (() => ({
	...buildParticlesPageData('particles'),
	sections: particlesLeafRoutes.map((route) => ({
		title: route.heading,
		description: route.description,
		path: route.path
	}))
})) satisfies PageLoad;
