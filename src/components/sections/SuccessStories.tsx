import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Truck, FileText } from 'lucide-react';

const stories = [
  {
    industry: 'Insurance',
    title: 'AI-powered underwriting',
    description: 'Transformed underwriting workflows with intelligent automation and risk assessment.',
    icon: Shield,
  },
  {
    industry: 'Supply Chain',
    title: 'AI-powered TMS optimization',
    description: 'Optimized transportation management with predictive analytics and route optimization.',
    icon: Truck,
  },
  {
    industry: 'Financial Services',
    title: 'AI-powered content engine',
    description: 'Automated content generation and personalization at enterprise scale.',
    icon: FileText,
  },
];

export const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Real AI impact across industries.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group"
            >
              <ChevronRight className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </button>
          </div>
        </div>

        {/* Stories Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={story.title}
              className="story-card bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-primary-foreground/10"
            >
              <div className="p-8">
                {/* Industry Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                  <story.icon className="w-4 h-4" />
                  {story.industry}
                </span>

                <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">
                  {story.title}
                </h3>

                <p className="text-primary-foreground/70">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-accent' : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
