import type { PageLoad } from './$types';
import { buildParticlesPageData } from '$lib/seo/particles';

export const load = (() => buildParticlesPageData('input-group')) satisfies PageLoad;
