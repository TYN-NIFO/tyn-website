'use client';
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
    "/assets/ynfinity-events/carousel1.png",
    "/assets/ynfinity-events/carousel2.png",
    "/assets/ynfinity-events/carousel3.png",
    "/assets/ynfinity-events/carousel4.png",
    "/assets/ynfinity-events/carousel5.png",
    "/assets/ynfinity-events/carousel6.png",
    "/assets/ynfinity-events/carousel7.png",
    "/assets/ynfinity-events/carousel8.png",
];

export const EventCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

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
        <section className="section-padding bg-background">
            <div className="container-main max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-center text-foreground">
                        Moments from Ynfinity
                    </h2>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-xl border border-border/50" ref={emblaRef}>
                    <div className="flex">
                        {images.map((img, index) => (
                            <div className="flex-[0_0_100%] min-w-0 relative aspect-[16/9]" key={index}>
                                <Image
                                    src={img}
                                    alt={`Event Photo ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-6 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={cn(
                                "w-2.5 h-2.5 rounded-full transition-colors",
                                index === selectedIndex ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
