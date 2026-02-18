import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
    title: 'The Yellow Network | Enterprise AI Consulting',
    description:
        'We help leaders cut through the vendor/LLM noise, choose what actually matters, and implement systems that intelligently create real business lift.',
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
