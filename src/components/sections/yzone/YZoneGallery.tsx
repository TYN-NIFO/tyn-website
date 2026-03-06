'use client';
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    { src: '/assets/Yzone%20gallery/1.png', alt: 'yZone Environment' },
    { src: '/assets/Yzone%20gallery/2.png', alt: 'yZone Workspace' },
    { src: '/assets/Yzone%20gallery/3.png', alt: 'yZone Collaboration' },
    { src: '/assets/Yzone%20gallery/4.png', alt: 'yZone Discussion' },
    { src: '/assets/Yzone%20gallery/5.png', alt: 'yZone Presentation' },
];

export const YZoneGallery = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    return (
        <section className="section-padding bg-background pattern-grid">
            <div className="container-main max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                        Inside yZone
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A glimpse into our collaborative environment where AI talent thrives.
                    </p>
                </div>

                <div className="relative group px-12 md:px-16 lg:px-20">
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-border/50" ref={emblaRef}>
                        <div className="flex">
                            {images.map((image, index) => (
                                <div className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0 relative aspect-[16/9] px-2 md:px-4" key={index}>
                                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                                        <Image
                                            src={image.src.replace('%20', ' ')}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background hover:bg-muted border border-border flex items-center justify-center shadow-lg transition-colors z-10"
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>
                    <button
                        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background hover:bg-muted border border-border flex items-center justify-center shadow-lg transition-colors z-10"
                        onClick={scrollNext}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={cn(
                                "w-2.5 h-2.5 rounded-full transition-colors",
                                index === selectedIndex
                                    ? "bg-primary w-8" // Make the active dot wider for modern look
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
