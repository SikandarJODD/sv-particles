import type { PageLoad } from './$types';
import { buildParticlesPageData } from '$lib/seo/particles';

export const load = (() => buildParticlesPageData('accordion')) satisfies PageLoad;
