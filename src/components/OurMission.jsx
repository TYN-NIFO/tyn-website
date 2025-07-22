import React from "react";

const OurMission = () => {
  return (
    <>
      <div className="sm:flex sm:flex-col sm:gap-5 xl:gap-20 mt-4 sm:mt-8 mx-3 2xl:mx-12 hidden">
        <div className="flex-col xl:gap-5 items-center text-[15px] sm:text-[26px] lg:text-4xl leading-loose tracking-wide font-semibold sm:flex  hidden">
          <div className="sm:pt-0 lg:pt-8">
            <span className="text-[18px] sm:text-[24px] lg:text-[30px] text-customBlack">
              Our Mission
            </span>
            <span className="text-[18px] sm:text-[24px] lg:text-[30px] font-extralight tracking-wider">
              {" "}
              is to deliver{" "}
            </span>
            <span className="bg-custom-gradient text-transparent bg-clip-text">
              Noiseless Information{" "}
            </span>
            <span className="text-customBlack">&</span>
          </div>
          <div className="bg-custom-gradient text-transparent bg-clip-text sm:mt-4 xl:mt-2">
            Frictionless Orchestration
          </div>
        </div>
        <div className="flex-col xl:gap-5 items-center text-[15px] sm:text-4xl leading-loose tracking-wide font-semibold flex sm:hidden">
          <div className="text-customGreyishBlack">
            <span className="text-[18px] sm:text-[30px]">Our Mission</span>
            <span className="text-[18px] sm:text-[30px] font-extralight tracking-wider">
              {" "}
              is to deliver{" "}
            </span>
          </div>
          <div className="bg-custom-gradient text-transparent bg-clip-text text-xl sm:text-4xl mt-2">
            Noiseless Information{" "}
          </div>
          &
          <div className="bg-custom-gradient text-transparent bg-clip-text text-xl sm:text-4xl">
            Frictionless Orchestration
          </div>
        </div>
        <div className="sm:grid lg:grid-cols-2  sm:gap-24 lg:gap-3 xl:gap-20 mt-8 sm:mt-8 xl:mt-12 sm:mx-8 lg:mx-0 xl:mx-20 ">
          <div className="flex justify-center items-center px-12 sm:px-0">
            <img src="/customerneedimage.jpg" alt="Customer needs illustration" className="sm:w-[70%] lg:w-auto" />
          </div>
          <div className="border bg-bgBlue rounded-lg px-2 sm:px-6 py-2 sm:py-12 lg:py-12 flex flex-col mt-8 sm:mt-0 mx-2 lg:mx-0">
            <div className="text-2xl sm:text-4xl font-medium text-customBlack text-center sm:text-left">
              <div className="flex">
                <div className="relative">
                  <div className="absolute -top-8 -right-8 h-8 w-8">
                    <img src="doublequotes.jpg" alt="Decorative double quotes" />
                  </div>
                  <div className="">Our Company</div>
                </div>
              </div>
            </div>
            <div className="mt-0 sm:mt-4 leading-relaxed sm:leading-loose 2xl:leading-[40px] font-light text-lg sm:text-[18px] text-customGreyishBlack p-2 sm:p-0">
              We believe, when businesses or government shift their focus from
              their products or services to holistic customer needs, barriers
              break, an ecosystem economy emerges & a tremendous value is
              created for all stakeholders. We partner with organizations &
              governments to succeed in the ecosystem economy by being an
              ecosystem orchestrator (from strategy to implementation &
              governance).
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="flex sm:hidden flex-col gap-5">
        <div className="flex flex-col justify-center items-center px-4 py-12">
          <div className="items-center text-2xl leading-loose tracking-wide font-semibold flex flex-col gap-y-2">
            <div className="flex justify-center items-center">
              <span className="text-customBlack">Our Mission </span>
              <span className="font-light tracking-wider pl-1">
                {" "}
                is to deliver{" "}
              </span>
            </div>
            <span className="bg-custom-gradient text-transparent bg-clip-text flex justify-center pt-4">
              Noiseless Information{" "}
            </span>
            <span className="text-customBlack flex justify-center">&</span>
            <div className="bg-custom-gradient text-transparent bg-clip-text sm:mt-4 xl:mt-2 flex justify-center">
              Frictionless Orchestration
            </div>
          </div>
          <div className="flex justify-center items-center pt-20">
            <img src="/customerneedimage.jpg" alt="Customer needs illustration" className="" />
          </div>
        </div>

        <div className="border bg-bgBlue rounded-lg px-3 pt-8 sm:py-6 xl:py-8 flex flex-col mt-8 sm:mt-0 mx-2 sm:mx-0">
          <div className="text-2xl sm:text-4xl font-medium text-customBlack text-center sm:text-left pt-4 pb-2">
            <div className="flex justify-center items-center py-4">
              <div className="relative">
                <div className="absolute -top-8 -right-8 h-8 w-8">
                  <img src="doublequotes.jpg" alt="Decorative double quotes" />
                </div>
                <div className="">Our Company</div>
              </div>
            </div>
          </div>
          <div className="mt-0 sm:mt-4 leading-loose font-light text-lg sm:text-[18px] text-customGreyishBlack p-2 sm:p-0 pb-5">
            We believe, when businesses or government shift their focus from
            their products or services to holistic customer needs, barriers
            break, an ecosystem economy emerges & a tremendous value is created
            for all stakeholders. We partner with organizations & governments to
            succeed in the ecosystem economy by being an ecosystem orchestrator
            (from strategy to implementation & governance).
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
