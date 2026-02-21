import Image from 'next/image';

export const EventHero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center pt-20">
            {/* Background Image & Gradient overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/ynfinity-events/centerimage.jpg"
                    alt="Ynfinity Event Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Soft yellow gradient equivalent to old linear-gradient to right, #FFF25CF2, rgba(255, 242, 92, 0) */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/90 via-yellow-300/40 to-transparent" />
            </div>

            <div className="container-main relative z-10 grid grid-cols-1 md:grid-cols-2 w-full h-full pt-20">
                <div className="flex flex-col justify-center items-center md:items-end gap-10 md:pr-20 text-center md:text-right h-full">
                    <div className="relative w-full max-w-[280px] md:max-w-[360px] aspect-[2/1]">
                        <Image
                            src="/assets/ynfinity-events/YInfinity-event.png"
                            alt="Y Infinity event"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-900">September 10</h3>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-900">Sofitel BKC, Mumbai</h3>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-900">5:00PM Onwards</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};
