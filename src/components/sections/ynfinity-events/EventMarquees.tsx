import React from 'react';
import Image from 'next/image';

const attendees = [
    { src: "/assets/ynfinity-events/IndiaFirstLife.webp", alt: "India First Life" },
    { src: "/assets/ynfinity-events/viacom18.png", alt: "Viacom 18" },
    { src: "/assets/ynfinity-events/tafe.png", alt: "Tafe" },
    { src: "/assets/ynfinity-events/israelministry.jpg", alt: "Israel Foreign Ministry" },
    { src: "/assets/ynfinity-events/infosys.png", alt: "Infosys" },
    { src: "/assets/ynfinity-events/krahejagroup.webp", alt: "K Raheja Group" },
    { src: "/assets/ynfinity-events/Godrej Capital.jpg", alt: "Godrej Capital" },
    { src: "/assets/ynfinity-events/lokmatmedia.png", alt: "Lokmat Media" },
    { src: "/assets/ynfinity-events/tcs.jpeg", alt: "TCS" },
    { src: "/assets/ynfinity-events/vedantaspark.png", alt: "Vedanta Spark" },
    { src: "/assets/ynfinity-events/swissnex.png", alt: "Swissnex" },
    { src: "/assets/ynfinity-events/yesbank.png", alt: "Yes Bank" },
    { src: "/assets/ynfinity-events/ltimindtree.jpg", alt: "LTI Mind Tree" },
    { src: "/assets/ynfinity-events/kalpataru.png", alt: "Kalpataru" },
    { src: "/assets/ynfinity-events/ELGI.png", alt: "ELGI" },
    { src: "/assets/ynfinity-events/adityabirla.png", alt: "Aditya Birla" },
    { src: "/assets/ynfinity-events/sbgroupinternational.png", alt: "SB Group International" }
];

const partners = [
    { src: "/assets/ynfinity-events/cybermind.jpeg", alt: "Cybermind" },
    { src: "/assets/ynfinity-events/thirdai.png", alt: "Third AI" },
    { src: "/assets/ynfinity-events/gnani.png", alt: "Gnani" },
    { src: "/assets/ynfinity-events/profit.co.png", alt: "Profit.co" },
    { src: "/assets/ynfinity-events/Netix.png", alt: "Netix AI" },
    { src: "/assets/ynfinity-events/Pluralsight.png", alt: "Pluralsight" }
];

const MarqueeRow = ({ items, reverse = false, speed = "40s" }: { items: any[], reverse?: boolean, speed?: string }) => (
    <div className="flex w-full overflow-hidden group">
        <div className="flex min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 animate-scroll px-6 md:px-12" style={{ animationDirection: reverse ? 'reverse' : 'normal', animationDuration: speed }}>
            {items.map((item, index) => (
                <div key={`first-${index}`} className="flex shrink-0 items-center justify-center">
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={160}
                        height={80}
                        className="w-24 md:w-40 h-16 md:h-24 object-contain"
                    />
                </div>
            ))}
        </div>
        {/* Duplicate for seamless infinite scroll */}
        <div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 animate-scroll px-6 md:px-12" style={{ animationDirection: reverse ? 'reverse' : 'normal', animationDuration: speed }}>
            {items.map((item, index) => (
                <div key={`second-${index}`} className="flex shrink-0 items-center justify-center">
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={160}
                        height={80}
                        className="w-24 md:w-40 h-16 md:h-24 object-contain"
                    />
                </div>
            ))}
        </div>
    </div>
);

export const EventMarquees = () => {
    return (
        <section className="bg-background py-20 pb-40 border-t border-border/50 overflow-hidden">
            <div className="container-main space-y-32">

                {/* Attendees */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col items-center text-center gap-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground">
                            Attendees
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            15+ CXOs from the likes of
                        </p>
                    </div>
                    <div className="relative w-full">
                        {/* Split attendees into two rows for better display given the large amount of logos */}
                        <MarqueeRow items={attendees.slice(0, Math.ceil(attendees.length / 2))} speed="50s" />
                        <div className="h-10" />
                        <MarqueeRow items={attendees.slice(Math.ceil(attendees.length / 2))} reverse speed="60s" />
                    </div>
                </div>

                {/* Partners */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col items-center text-center gap-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground">
                            Our Emerging Tech Partners
                        </h2>
                    </div>
                    <div className="relative w-full">
                        <MarqueeRow items={partners} speed="45s" />
                    </div>
                </div>

            </div>
        </section>
    );
};
