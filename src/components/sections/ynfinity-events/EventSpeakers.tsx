'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const speakers = [
    {
        name: "Rohit.K",
        role: "CTO, HDFC Life",
        description: "Rohit, HDFC Life's CTO since November 2023, is a seasoned technology strategist with over 25 years of experience across the US, Southeast Asia, the Middle East, and Europe. He has held leadership roles at Tata, IBM, Aditya Birla Capital, and CMS, where he spearheaded the development of key digital public infrastructures like IRCTC, NPS, and cloud-based lending systems. At HDFC Life, he drives fintech innovations, including wealth platforms and digital lending, and mentors startups in deep tech and fintech.",
        image: "/assets/ynfinity-events/rohit.jpg",
    },
    {
        name: "Sujatha Gopal",
        role: "CTO, TCS Business Group",
        description: "Sujatha Gopal is the Chief Technology Officer of the Communication, Media & Information Service Business unit at Tata Consultancy Services. With over 25 years of experience, she excels in driving strategic technology transformations, enterprise architecture, and innovation across industries such as Banking, Manufacturing, and Retail. She leads initiatives in emerging technologies, including Generative AI, 5G Edge Computing, and Metaverse, while advising several CXOs on industry advancements.",
        image: "/assets/ynfinity-events/sujathagopal.jpg",
    },
    {
        name: "Andy David",
        role: "Advisor to Israel Innovation Minister",
        description: "Dr. Andy David is currently leading the Innovation Task Force in Israel’s Ministry of Foreign Affairs. Additionally, he is an active LP investor in two Silicon Valley-based VCs and has been advising family offices in Israel on their international affairs. Previously he created and managed the Ministry of Foreign Affairs' department of Innovation Entrepreneurship and Technology, focusing on international innovation and technology ecosystem collaborations. Also, He served in the Israeli Air Force and RAFAEL – Israel’s Armament Development Authority.",
        image: "/assets/ynfinity-events/AndyDavid.jpg",
    },
    {
        name: "Dr.Somasundaram Balasubramaniam",
        role: "Head of Digital Transformation, ELGI",
        description: "Industry and academia bridge with expertise in Industry 4.0 and Six Sigma. He implements cutting-edge practices at multinationals and is a published researcher with 30+ works.",
        image: "/assets/ynfinity-events/somasundharam.jpeg",
    },
    {
        name: "Swetha Suresh",
        role: "Head of Innovations, Swissnex",
        description: "Dr. Swetha Suresh is the Head of Innovation at Swissnex India, connecting Switzerland’s innovation ecosystem to India. With expertise in healthtech, sustainability, and digitalization, she fosters market opportunities and bilateral initiatives. She holds a BTech in Industrial Biotechnology from Anna University and a PhD in Pharmacology from Cambridge University.",
        image: "/assets/ynfinity-events/swethasuresh.jpg",
    },
    {
        name: "Anilkumar Singh",
        role: "Commercial Vice President, SparkBeyond",
        description: "Anil brings deep expertise across Business, Technology and People management with a track record of scaling early stage companies and launching new business for established corporations. Prior to joining SparkBeyond , Anil has held leadership positions at Lazada (acquired by Alibaba) and Microsoft. At SparkBeyond he spearheads our commercial and delivery efforts globally.",
        image: "/assets/ynfinity-events/anilsingh.jpeg",
    },
];

export const EventSpeakers = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="section-padding bg-slate-50 dark:bg-slate-900/20">
            <div className="container-main relative">
                <div className="flex flex-col items-center justify-center gap-4 mb-24 md:mb-32">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-center text-primary">
                        Speakers
                    </h2>
                </div>

                <div className="relative max-w-[90vw] md:max-w-none mx-auto">
                    {/* Navigation Buttons (Desktop layout positioned outside) */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 rounded-full bg-background shadow-md hidden md:flex"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 rounded-full bg-background shadow-md hidden md:flex"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Carousel Viewport */}
                    <div className="overflow-visible" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-6 pt-16 pb-8">
                            {speakers.map((speaker, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 min-w-0">
                                    <div className="bg-background rounded-3xl p-6 md:p-8 pt-0 shadow-lg border border-border/50 h-full flex flex-col items-center text-center relative mt-16 transition-transform hover:-translate-y-2">
                                        {/* Avatar positioned halfway outside the card */}
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 -mt-16 md:-mt-20 mb-6 rounded-2xl overflow-hidden shadow-md border-4 border-background">
                                            <Image
                                                src={speaker.image}
                                                alt={`Profile picture of ${speaker.name}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col h-full items-center">
                                            <h3 className="font-semibold text-2xl text-foreground mb-2">
                                                {speaker.name}
                                            </h3>
                                            <div className="font-medium text-lg text-primary mb-6">
                                                {speaker.role}
                                            </div>
                                            <p className="font-light text-muted-foreground leading-relaxed">
                                                {speaker.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8 md:hidden">
                        <Button variant="outline" size="icon" className="rounded-full shadow-sm" onClick={scrollPrev}>
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full shadow-sm" onClick={scrollNext}>
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
