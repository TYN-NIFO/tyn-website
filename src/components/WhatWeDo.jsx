import React from "react";
import { SlGlobe } from "react-icons/sl";
import { RiFlowChart } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <>
      <div className="bg-bgBlue flex flex-col lg:flex-row  justify-center items-center sm:h-auto lg:h-[100vh] pb-8 sm:pb-12 lg:pb-0 sm:py-16 lg:gap-10 sm:gap-16 sm:px-10 sm:justify-around">
        <div className="text-3xl sm:text-5xl lg:text-5xl font-medium flex lg:hidden pb-8 pt-16 sm:pt-0 lg:pt-16">
          <div className="grid">
            <div className="relative">
              <div className="absolute -top-8 -right-8 h-8 w-8">
                <img src="doublequotes.jpg" alt="Double Quotes" />
              </div>
              <div className="">What We Do</div>
            </div>
          </div>
        </div>
        <div className="2xl:m-0 flex justify-center items-center pt-4 pb-8 sm:pt-0 sm:pb-0 ">
          {/* Image of what we do  */}
          <img
            className="rounded-2xl object-cover cursor-pointer h-[200px] w-[240px] sm:h-[300px] sm:w-[500px]  lg:h-auto lg:w-auto"
            src="/image3.png"
            alt="What We Do illustration"
          />
        </div>
        <div className="flex flex-col sm:gap-8">
          <div className="text-2xl sm:text-4xl font-medium lg:flex hidden">
            <div className="grid">
              <div className="relative">
                <div className="absolute -top-8 -right-8 h-8 w-8">
                  <img src="doublequotes.jpg" alt="Double Quotes" />
                </div>
                <div className="">What We Do</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 sm:pt-0 gap-10 sm:gap-12 lg:gap-10 text-base sm:text-xl sm:mx-0">
            <div className="bg-white p-3 sm:p-5 rounded-lg font-medium text-[15px] sm:text-[18px] sm:w-[550px] lg:w-[450px] 2xl:w-[650px] flex gap-4 sm:gap-4 2xl:gap-4 items-center">
              <div className="text-customBlue">
                <SlGlobe size={24} />
              </div>
              We identify Ecosystem Stakeholders
            </div>

            <div className="bg-white p-3 sm:p-5 text-[15px] sm:text-[18px] rounded-lg font-medium sm:w-[550px] lg:w-[450px] 2xl:w-[650px] flex gap-4 sm:gap-4 2xl:gap-4 items-center">
              <div className="text-customBlue">
                <RiFlowChart size={24} />
              </div>
              We define Ecosystem Strategy
            </div>

            <div className="bg-white p-3 sm:p-5 rounded-lg text-[15px] sm:text-[18px]  font-medium sm:w-[550px] lg:w-[450px] 2xl:w-[650px] flex gap-4 sm:gap-4 2xl:gap-4 items-center">
              <div className="text-customBlue">
                <IoSettingsOutline size={24} />
              </div>
              We build and Orchestrate Ecosystem
            </div>

            <div className="bg-white p-3 sm:p-5 rounded-lg text-[15px] sm:text-[18px]  font-medium sm:w-[550px] lg:w-[450px] 2xl:w-[650px] flex gap-4 sm:gap-4 2xl:gap-4 items-center">
              <div className="text-customBlue">
                <FaHandHoldingUsd size={24} />
              </div>
              We deliver outcomes
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
