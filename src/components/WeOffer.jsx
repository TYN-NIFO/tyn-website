import React from "react";
import { useNavigate } from "react-router-dom";

const WeOffer = () => {
  const navigate = useNavigate();

  const handleInnovation = () => {
    navigate("/co-innovation");
  };

  const handleAlliance = () => {
    navigate("/alliance");
  };

  return (
    <div className="h-screenflex mt-0 sm:mt-8 sm:mb-8">
      <div className="flex justify-center items-center text-3xl sm:text-4xl text-customBlack font-medium pt-16 pb-12 sm:py-10 xl:py-16">
        <div className="grid">
          <div className="relative">
            <div className="absolute -top-8 -right-8 h-8 w-8">
              <img src="doublequotes.jpg" alt="" />
            </div>
            <div className="">We Offer</div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-cols-2 gap-y-8 sm:gap-x-8 sm:mt-0 sm:mx-6 xl:mx-24 mx-4">
        <div className="border bg-bgBlue rounded-lg  sm:px-4 2xl:px-6  py-4  px-3 sm:py-4 2xl:py-6">
          <div className="text-customBlue text-xl sm:text-xl 2xl:text-xl">
            Enabling Alliances to Growth Techs / Startups
          </div>
          <div className="mt-2 leading-loose sm:leading-loose text-lg sm:text-base font-light text-customGreyishBlack">
            Alliance as a service to growth B2B tech companies, to scale their
            business development through Global System Integrators (GSI) &
            established tech partners
          </div>
          <button
            onClick={handleAlliance}
            className="flex border-2 border-borderBlue text-lg bg-white font-medium text-customBlue sm:w-40 items-center justify-center py-1.5 rounded-xl cursor-pointer mt-4 tracking-wider shadow-sm"
            aria-label="Find out how to enable alliances"
          >
            Find out how
          </button>
        </div>
        <div className="border bg-bgBlue rounded-lg sm:px-4 xl:px-6 py-4 px-3 sm:py-4 xl:py-6">
          <div className="text-customBlue text-xl sm:text-xl 2xl:text-xl">
            Enabling Co Innovation to Enterprise
          </div>
          <div className="mt-2 leading-loose sm:leading-loose text-lg sm:text-base font-light text-customGreyishBlack ">
            Co Innovation as a service to enterprise & governments, to solve
            their complex requirements and cater their customer needs through
            ecosystems
          </div>
          <button
            className="flex border-2 border-borderBlue text-lg bg-white font-medium text-customBlue sm:w-40 items-center justify-center py-1.5 rounded-xl cursor-pointer mt-4 tracking-wider shadow-sm"
            onClick={handleInnovation}
            aria-label="Find out how to enable co-innovation"
          >
            Find out how
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
