'use client';

import Image from 'next/image';

const DEFAULT_LOGO_SIZE = 'h-16 max-w-[180px]';

const clientLogos: { src: string; alt: string; size?: string }[] = [
    { src: '/assets/client logos/CoreStack logo.png', alt: 'CoreStack' },
    // Stacked two-line Godrej logos are wide; the default 180px cap would shrink them, so give them more room
    { src: '/assets/client logos/Godrej Capital Black.png', alt: 'Godrej Capital', size: 'h-10 max-w-[200px]' },
    { src: '/assets/client logos/Pluralsight_Logo.png', alt: 'Pluralsight' },
    { src: '/assets/client logos/TATA-Steel-logo.png', alt: 'TATA Steel' },
    { src: '/assets/client logos/ceil logo.png', alt: 'Ceil' },
    { src: '/assets/client logos/Lnt.png', alt: 'L&T' },
    { src: '/assets/client logos/indiafirst logo.png', alt: 'IndiaFirst' },
    { src: '/assets/client logos/kissflow logo.png', alt: 'Kissflow' },
    { src: '/assets/client logos/Godrej Properties Black.png', alt: 'Godrej Properties', size: 'h-10 max-w-[220px]' },
    { src: '/assets/client logos/spark beyond logo.png', alt: 'SparkBeyond' },
    { src: '/assets/client logos/tvs logo.png', alt: 'TVS' },
    { src: '/assets/client logos/vedanta logo.png', alt: 'Vedanta' },
];

export const ClientLogosCarousel = () => {
    return (
        <section className="py-20 bg-background border-y border-border/50 overflow-hidden">
            <div className="container-main mb-12">
                <p className="text-center text-lg font-semibold uppercase tracking-widest text-muted-foreground">
                    Trusted by
                </p>
            </div>

            {/* Carousel track */}
            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex animate-logo-scroll gap-24 items-center">
                    {/* First set */}
                    {clientLogos.map((logo) => (
                        <div
                            key={logo.alt}
                            className="flex-shrink-0 flex items-center justify-center h-16"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={280}
                                height={64}
                                className={`${logo.size ?? DEFAULT_LOGO_SIZE} w-auto object-contain transition-transform duration-300 hover:scale-105`}
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {clientLogos.map((logo) => (
                        <div
                            key={`${logo.alt}-dup`}
                            className="flex-shrink-0 flex items-center justify-center h-16"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={280}
                                height={64}
                                className={`${logo.size ?? DEFAULT_LOGO_SIZE} w-auto object-contain transition-transform duration-300 hover:scale-105`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
