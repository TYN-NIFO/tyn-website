'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CookieConsentStatus = 'accepted' | 'declined';

type CookieConsentPreference = {
  version: 1;
  status: CookieConsentStatus;
  categories: {
    essential: true;
    analytics: boolean;
    marketing: boolean;
  };
  updatedAt: string;
};

const CONSENT_STORAGE_KEY = 'tyn_cookie_consent';

declare global {
  interface Window {
    tynCookieConsent?: CookieConsentPreference;
  }
}

const buildPreference = (status: CookieConsentStatus): CookieConsentPreference => ({
  version: 1,
  status,
  categories: {
    essential: true,
    analytics: status === 'accepted',
    marketing: status === 'accepted',
  },
  updatedAt: new Date().toISOString(),
});

const readStoredPreference = (): CookieConsentPreference | null => {
  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!storedValue) return null;

    const preference = JSON.parse(storedValue) as CookieConsentPreference;
    if (preference.version !== 1 || !preference.status) return null;

    return preference;
  } catch {
    return null;
  }
};

export const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const preference = readStoredPreference();
    if (preference) {
      window.tynCookieConsent = preference;
      window.dispatchEvent(new CustomEvent('tynCookieConsentChanged', { detail: preference }));
      return;
    }

    setIsVisible(true);
  }, []);

  const savePreference = (status: CookieConsentStatus) => {
    const preference = buildPreference(status);
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preference));
    window.tynCookieConsent = preference;
    window.dispatchEvent(new CustomEvent('tynCookieConsentChanged', { detail: preference }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section
      role="region"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-4 right-4 left-4 z-[60] rounded-lg border border-border bg-card shadow-2xl sm:left-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:max-w-[calc(100vw-3rem)]"
    >
      <div className="p-5">
        <div className="flex flex-col gap-4">
          <div>
            <h2 id="cookie-consent-title" className="text-base font-semibold text-foreground">
              Cookie preferences
            </h2>
            <p id="cookie-consent-description" className="mt-2 text-sm leading-6 text-muted-foreground">
              We use essential cookies to keep the website working. With your consent, we may also use non-essential cookies for analytics and improvements. Read our{' '}
              <Link href="/policies/privacy-policy" className="font-medium text-tyn-blue underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/policies/cookie-policy" className="font-medium text-tyn-blue underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-border p-px"
              style={{ clipPath: 'polygon(8.5% 0%, 100% 0%, 100% 80%, 91.5% 100%, 0% 100%, 0% 15%)' }}
            >
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-none border-0 bg-background text-foreground hover:!bg-muted hover:!text-foreground"
                style={{ clipPath: 'polygon(8.5% 0%, 100% 0%, 100% 80%, 91.5% 100%, 0% 100%, 0% 15%)' }}
                onClick={() => savePreference('declined')}
              >
                Decline Non-Essential Cookies
              </Button>
            </div>
            <Button
              type="button"
              className="btn-hero w-full"
              onClick={() => savePreference('accepted')}
            >
              Accept Cookies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
