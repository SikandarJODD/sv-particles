import type { RequestHandler } from './$types';
import { SITE_URL, particlesPublicPaths, toAbsoluteUrl } from '$lib/seo/particles';

export const prerender = true;

export const GET = (() => {
	const urls = particlesPublicPaths
		.map(
			(path) => `<url><loc>${toAbsoluteUrl(path)}</loc></url>`
		)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}) satisfies RequestHandler;
