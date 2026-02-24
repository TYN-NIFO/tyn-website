'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Global event listener: if a user clicks an <a> link whose resolved pathname
 * matches the current page, scroll to the top of the page.
 * Does NOT affect navigation to different pages.
 */
export const ScrollToTopOnSamePageNav = () => {
    const pathname = usePathname();

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (!href) return;

            // Parse the href to extract the pathname (handles relative, absolute, and query-string links)
            let linkPath: string;
            try {
                const url = new URL(href, window.location.origin);
                linkPath = url.pathname;
            } catch {
                linkPath = href.split('?')[0].split('#')[0];
            }

            // Normalize trailing slashes
            const normalize = (p: string) => (p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p);

            if (normalize(linkPath) === normalize(pathname)) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [pathname]);

    return null;
};
