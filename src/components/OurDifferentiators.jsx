import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const DifferentiatorsData = [
  {
    DifferentiatorsLogo: "/df1.png",
    DifferentiatorsName: "Instant Scaling",
    DifferentiatorsDescription:
      "Rapid onboarding facilitated by pre-identified stakeholders with established relationships.",
  },
  {
    DifferentiatorsLogo: `/df2.png`,
    DifferentiatorsName: "Superior results through network effects",
    DifferentiatorsDescription:
      "The entire network's industry connections/expertise work for the success of our customers rather than one individual.",
  },
  {
    DifferentiatorsLogo: `/df3.png`,
    DifferentiatorsName: "Riskless option",
    DifferentiatorsDescription:
      "Outcome-based engagement model with more than 50% of the payment upon realization of the committed results.",
  },
  {
    DifferentiatorsLogo: `/df4.png`,
    DifferentiatorsName: "No Individual Dependency",
    DifferentiatorsDescription:
      "Don't have to worry about attrition/loss of contacts due to attrition.",
  },
  {
    DifferentiatorsLogo: `/df5.png`,
    DifferentiatorsName: "Overall cost-effective",
    DifferentiatorsDescription:
      "Cheaper than hiring a full-time ecosystem manager in NA/Europe and not too much upfront.",
  },
];

const OurDifferentiators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? DifferentiatorsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === DifferentiatorsData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center text-3xl sm:text-4xl text-customBlack font-medium py-16 sm:py-16">
        <div className="grid">
          <div className="relative">
            <div className="absolute -top-8 -right-8 h-8 w-8">
              <img src="doublequotes.jpg" alt="Double Quotes" />
            </div>
            <div className="">Our Differentiators</div>
          </div>
        </div>
      </div>
      <div className="relative sm:w-11/12">
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
          aria-label="Previous slide"
        >
          <IoIosArrowBack size={36} />
        </button>

        <div className="px-16 space-x-4 relative sm:flex hidden">
          {[currentIndex, (currentIndex + 1) % DifferentiatorsData.length].map(
            (index) => (
              <div
                key={DifferentiatorsData[index].DifferentiatorsName}
                className="bg-white flex flex-col gap-4 pt-4 shadow-customAdCard rounded-[8px] px-4 pb-4 transition-transform transform w-3/4 sm:h-[240px] xl:h-auto"
              >
                <div className="relative rounded-full">
                  <img
                    src={DifferentiatorsData[index].DifferentiatorsLogo}
                    alt={DifferentiatorsData[index].DifferentiatorsName + ' icon'}
                    className="h-8 w-8"
                  />
                </div>
                <div className="">
                  <div className="flex text-customBlue font-medium text-xl">
                    <span>
                      {DifferentiatorsData[index].DifferentiatorsName}
                    </span>
                  </div>
                  <div className="font-normal text-base pt-1 leading-loose text-customGreyishBlack">
                    {DifferentiatorsData[index].DifferentiatorsDescription}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="px-10 relative flex sm:hidden h-auto">
          <div
            key={currentIndex}
            className="flex flex-col justify-center items-center bg-white shadow-customAdCard rounded-[8px] px-4 transition-transform transform py-8 gap-y-3"
          >
            <div className="relative rounded-full">
              <img
                src={DifferentiatorsData[currentIndex].DifferentiatorsLogo}
                alt={DifferentiatorsData[currentIndex].DifferentiatorsName + ' icon'}
                className="h-12 w-12"
              />
            </div>
            <div className="flex justify-center text-customBlue font-medium text-[22px]  pt-1 pb-1 text-center">
              <span>
                {DifferentiatorsData[currentIndex].DifferentiatorsName}
              </span>
            </div>
            <div className="font-normal text-xl text-customBlack leading-loose">
              {DifferentiatorsData[currentIndex].DifferentiatorsDescription}
            </div>
          </div>
        </div>

        <button
          onClick={goToNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
          aria-label="Next slide"
        >
          <IoIosArrowForward size={36} />
        </button>
      </div>
    </div>
  );
};

export default OurDifferentiators;
