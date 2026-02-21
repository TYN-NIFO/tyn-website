import React from 'react';

export const EventIntro = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-main space-y-20 md:space-y-32">
                {/* Welcome Header */}
                <div className="flex flex-col items-center justify-center text-3xl md:text-4xl lg:text-5xl font-display font-medium text-center">
                    <div>
                        <span className="text-foreground">Welcome to </span>
                        <span className="text-primary">Ynfinity</span>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                            A Gathering of Minds
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-lg text-justify">
                            Ynfinity 2024 concluded successfully, solidifying its position as a
                            premier annual gathering for C-suite executives and technology
                            innovators. This exclusive, invitation-only event brought together
                            industry luminaries to explore the latest trends, share insights,
                            and foster collaborations.
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-full aspect-video relative rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-background/50">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            poster="/assets/ynfinity-events/YInfinity-thumbnail.png"
                        >
                            <source
                                src="https://res.cloudinary.com/dbhroxtwb/video/upload/wsv64xqgg4wfrrgpulff.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};
