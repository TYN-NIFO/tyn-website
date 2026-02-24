import Image from 'next/image';

const partnerLogos = [
    '/assets/Partners logo/5.png',
    '/assets/Partners logo/6.png',
    '/assets/Partners logo/7.png',
    '/assets/Partners logo/8.png',
    '/assets/Partners logo/9.png',
    '/assets/Partners logo/10.png',
    '/assets/Partners logo/11.png',
    '/assets/Partners logo/12.png',
    '/assets/Partners logo/13.png',
    '/assets/Partners logo/14.png',
    '/assets/Partners logo/15.png',
    '/assets/Partners logo/16.png',
    '/assets/Partners logo/17.png',
    '/assets/Partners logo/18.png',
];

export const OurPartners = () => {
    return (
        <section className="section-padding bg-background pattern-grid">
            <div className="container-main">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                        Our Partners
                    </h2>
                </div>

                <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex animate-logo-scroll gap-24 items-center">
                        {[...partnerLogos, ...partnerLogos].map((logo, idx) => {
                            const isOversized = logo.includes('/14.png') || logo.includes('/15.png');
                            return (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 flex items-center justify-center h-48"
                                >
                                    <img
                                        src={logo}
                                        alt={`Partner Logo ${idx}`}
                                        className={`w-auto max-w-[400px] object-contain transition-transform duration-300 hover:scale-105 ${isOversized ? 'h-64' : 'h-48'}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
