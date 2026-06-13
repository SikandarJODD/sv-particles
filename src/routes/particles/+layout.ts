import type { LayoutLoad } from './$types';
import { defineBaseMetaTags } from 'svelte-meta-tags';
import { buildParticlesBaseMetaTags } from '$lib/seo/particles';

export const load = (() => defineBaseMetaTags(buildParticlesBaseMetaTags())) satisfies LayoutLoad;
