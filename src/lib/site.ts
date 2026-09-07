import type { Metadata } from 'next';

/**
 * Canonical origin of the live site. Social crawlers (LinkedIn, Facebook, X,
 * WhatsApp, Slack) only accept absolute URLs, so every og:/twitter: image and
 * url below is resolved against this.
 */
export const SITE_URL = 'https://theyellow.network';

export const SITE_NAME = 'The Yellow Network';

export const SITE_DESCRIPTION =
    'We help leaders cut through the vendor/LLM noise, choose what actually matters, and implement systems that intelligently create real business lift.';

/**
 * The share card LinkedIn and friends render. 1200x630 (1.91:1) is the size
 * LinkedIn documents; anything without an explicit og:image makes the crawler
 * fall back to scraping the page, which is how a client logo ended up as the
 * preview image for the site.
 */
export const OG_IMAGE = {
    url: '/assets/og-image.png',
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} — Enterprise AI Consulting`,
};

/**
 * Builds the openGraph/twitter block for a page.
 *
 * Next.js does not merge a child route's `openGraph` with the root layout's, so
 * any page that exports its own metadata must spread this in to keep the image
 * and site name. Pass the page's own title/description to have the card show
 * them instead of the site defaults.
 */
export function socialMetadata({
    title,
    description = SITE_DESCRIPTION,
    path = '/',
    type = 'website',
    images = [OG_IMAGE],
}: {
    title?: string;
    description?: string;
    path?: string;
    type?: 'website' | 'article';
    images?: Metadata['openGraph'] extends { images?: infer I } ? I : never;
} = {}): Pick<Metadata, 'openGraph' | 'twitter'> {
    const ogTitle = title ?? `${SITE_NAME} | Enterprise AI Consulting`;

    return {
        openGraph: {
            type,
            url: path,
            siteName: SITE_NAME,
            title: ogTitle,
            description,
            images,
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description,
            images,
        },
    };
}
