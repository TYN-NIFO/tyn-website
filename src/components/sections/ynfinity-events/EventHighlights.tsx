import React from 'react';

const highlights = [
    {
        title: "Exclusive Networking",
        description: "Opportunities to connect with industry peers and thought leaders were provided in an intimate, invitation-only setting."
    },
    {
        title: "Thought Leadership Insights",
        description: "Valuable perspectives from industry experts on the latest trends and challenges were gained."
    },
    {
        title: "Innovation Showcase",
        description: "Cutting-edge technologies shaping the future of [industry] were discovered."
    },
    {
        title: "Collaborative Opportunities",
        description: "Potential partnerships and collaborations to drive growth and innovation were explored."
    }
];

export const EventHighlights = () => {
    return (
        <section className="section-padding bg-slate-50 dark:bg-slate-900/20">
            <div className="container-main">
                <div className="flex flex-col items-center justify-center gap-4 mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-center text-foreground">
                        Highlights
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 bg-background px-8 py-8 md:px-10 md:py-10 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                            <h3 className="text-foreground font-semibold text-xl md:text-2xl">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
