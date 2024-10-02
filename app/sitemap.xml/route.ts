// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';


export async function GET() {
    try {
        const stream = new SitemapStream({ hostname: 'https://www.onxwork.com' });
        const links = [];

        // Static pages
        links.push({ url: '/', changefreq: 'daily', priority: 1 });
        links.push({ url: '/onboarding-services', changefreq: 'daily', priority: 1 });
        links.push({ url: '/installation-services', changefreq: 'daily', priority: 1 });
        links.push({ url: '/terms-conditions', changefreq: 'yearly', priority: 0.3 });
        links.push({ url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 });

        // Main sections (as anchors on the home page)
        links.push({ url: '/#services', changefreq: 'monthly', priority: 0.8 });
        links.push({ url: '/#why-choose-us', changefreq: 'monthly', priority: 0.7 });
        links.push({ url: '/#FAQs', changefreq: 'monthly', priority: 0.6 });

        // Create a readable stream from the links array and pipe it to the sitemap stream
        const linkStream = Readable.from(links);
        linkStream.pipe(stream);

        // Generate the XML
        const sitemap = await streamToPromise(stream);

        // Return the XML with appropriate headers
        return new NextResponse(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
            },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error generating sitemap' }, { status: 500 });
    }
}