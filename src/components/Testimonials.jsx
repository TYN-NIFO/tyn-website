import React, { useState, useEffect, useRef } from "react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const testimonialData = [
  {
    name: "Bo Nielson",
    designation: "Sales Head, ThirdAI",
    profilePic: "/bo-nielson.png",
    companyLogo: "/thirdai.png",
    testimonial:
      "We are a start-up and the Yellow Network opened doors to large Global Systems Integrators at a rate that we never could have accomplished. The broad net they cast allowed us to find the right partners and account managers to build a revenue pipeline.",
  },
  {
    name: "Dhwani Mehta",
    designation: "VP - Partnerships and Strategy, Fluxgen",
    profilePic: "/dhwani-mehta.png",
    companyLogo: "/fluxgen.png",
    testimonial:
      "Right from the first interaction we had TYN, the team has been extremely helpful and accommodating of our asks. After carefully understanding our business, they immediately helped us get connected to the leading conglomerate of India. And they helped us improvise our pitch each step of the way. Highly recommend TYN to growth-stage businesses.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track if the carousel is paused
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="mx-6 sm:mx-auto mt-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Testimonials carousel"
    >
      <div className="flex justify-center items-center text-3xl sm:text-4xl text-customBlack font-medium py-16 sm:py-16">
        <div className="grid">
          <div className="relative">
            <div className="absolute -top-8 -right-8 h-8 w-8">
              <img src="doublequotes.jpg" alt="Double Quotes" />
            </div>
            <div className="">Success Stories</div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row gap-4 mx-0 sm:mx-12 lg:mx-32 items-center">
        <div className="w-auto lg:w-[40%] text-center">
          <img
            src={testimonialData[currentIndex].profilePic}
            alt={`Profile picture of ${testimonialData[currentIndex].name}`}
            className="rounded-full w-28 h-28 sm:w-48 sm:h-48 lg:w-48 lg:h-48 mx-auto"
          />
          <div className="mt-4 font-semibold text-lg sm:text-2xl lg:text-lg">
            {testimonialData[currentIndex].name}
          </div>
          <div className="text-gray-500 text-sm sm:text-lg lg:text-sm">
            {testimonialData[currentIndex].designation}
          </div>
          <div className="flex justify-center items-center mt-2">
            <img
              src={testimonialData[currentIndex].companyLogo}
              alt={`Company logo for ${testimonialData[currentIndex].name}`}
              className="h-12 sm:h-20 lg:h-12 w-auto"
            />
          </div>
        </div>

        <div className="relative bg-blue-50 rounded-lg shadow-lg px-4 py-4 sm:px-8 text-gray-600 italic w-full flex h-[300px] sm:h-[250px] items-center" aria-live="polite">
          <BiSolidQuoteLeft className="absolute text-customYellow text-3xl sm:text-6xl top-0 left-0 -translate-x-4 sm:-translate-x-4 -translate-y-4 sm:-translate-y-6" />
          <div className="sm:text-xl sm:leading-[32px] overflow-hidden text-ellipsis">
            {testimonialData[currentIndex].testimonial}
          </div>
          <BiSolidQuoteRight className="absolute text-customYellow text-3xl sm:text-6xl bottom-0 right-0 translate-x-4 translate-y-4 sm:translate-x-4 sm:translate-y-6" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {testimonialData.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-2 rounded-full cursor-pointer focus:outline-none ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
