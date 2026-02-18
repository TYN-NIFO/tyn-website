'use client';

import { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/contact/ContactForm';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container-main">
                    <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Loading...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </div>
    );
}
