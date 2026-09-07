import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, socialMetadata } from '@/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: `${SITE_NAME} | Enterprise AI Consulting`,
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: '/favicon.png',
    },
    ...socialMetadata(),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
