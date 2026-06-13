import type { PageLoad } from './$types';
import { buildParticlesPageData } from '$lib/seo/particles';

export const load = (() => buildParticlesPageData('alert-dialog')) satisfies PageLoad;
