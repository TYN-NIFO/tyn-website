import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Truck, FileText } from 'lucide-react';

const stories = [
  {
    industry: 'Insurance',
    title: 'AI-Powered Underwriting',
    description: (
      <>
        <strong>Program Mandate:</strong>
        <br />
        To automate the critical underwriting process involving risk assessment, document validation, and policy issuance in the life insurance industry.
        <br />
        <br />
        <strong>Solution Approach:</strong>
        <br />
        AI-led underwriting solution with OCR and analytics; projected 72% time savings and 99% document accuracy across formats, significantly improving customer turnaround time.
      </>
    ),
    icon: Shield,
  },

  {
    industry: 'Supply Chain',
    title: 'AI-Powered Route Optimization',
    description: (
      <>
        <strong>Program Mandate:</strong>
        <br />
        Customer runs thousands of trips daily, driving high transport costs. They needed a solution for route optimization and better load utilization.
        <br />
        <br />
        <strong>Solution Approach:</strong>
        <br />
        AI-enabled TMS integrated with orders, fleet, and telematics to optimize loads and routes, re-optimize in real time, and provide a control-tower view. A vendor was shortlisted within budget, offering an AI-powered TMS tool already proven in the industry.
      </>
    ),
    icon: Truck,
  },
  {
    industry: 'Finance',
    title: 'AI-Powered Marketing',
    description: (
      <>
        <strong>Program Mandate:</strong>
        <br />
        Address inefficiencies in agency-led creative production by enabling faster, scalable, and brand-compliant marketing content creation.
        <br />
        <br />
        <strong>Solution Approach:</strong>
        <br />
        Enterprise AI solution integrated with existing MarTech to automate content generation and approvals. Projected outcomes: significantly reduced turnaround times, lower dependency on agencies, and the ability to scale personalised, multi-channel marketing content efficiently.
      </>
    ),
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
    <section id="success-stories" className="section-padding hero-gradient relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-2 sm:mb-4">
              Success Stories
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/70">
              Real AI impact across industries.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 sm:gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group touch-manipulation"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group touch-manipulation"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </button>
          </div>
        </div>

        {/* Stories Cards - slider on mobile, grid on md+ */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {stories.map((story) => (
              <div
                key={story.title}
                className="w-full flex-shrink-0 px-1"
              >
                <div className="story-card bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-primary-foreground/10">
                  <div className="p-6 sm:p-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4 sm:mb-6">
                      <story.icon className="w-4 h-4" />
                      {story.industry}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-tyn-blue mb-3">
                      {story.title}
                    </h3>
                    <p className="text-black/90 text-sm sm:text-base">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.title}
              className="story-card bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-primary-foreground/10"
            >
              <div className="p-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                  <story.icon className="w-4 h-4" />
                  {story.industry}
                </span>
                <h3 className="text-xl font-display font-semibold text-tyn-blue mb-3">
                  {story.title}
                </h3>
                <p className="text-black/90">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator - visible on mobile only (arrows used on both) */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50'}`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
