import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Alliance = () => {
  const navigate = useNavigate();

  const handleMainMenu = () => {
    navigate("/");
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col sm:mx-20 2xl:mx-32 sm:pt-6 xl:pt-16 sm:h-screen sm:gap-6 mt-2 sm:mt-0 mx-6 mb-16 sm:mb-0" role="region" aria-label="Alliance content">
        <div className="flex flex-row justify-between">
          <div className="text-xl sm:text-2xl font-medium sm:font-semibold text-customBlack py-4 sm:py-0">
            <div className="grid">
              <div className="relative">
                <div className="sm:flex hidden absolute -top-8 -right-8 h-8 w-8">
                  <img src="doublequotes.jpg" alt="Decorative double quotes" />
                </div>
                <div className="">
                  Enabling Alliances to Growth Techs / Startups
                </div>
              </div>
            </div>
          </div>
          {/* <button
            className="hidden sm:flex border-[3px] text-lg font-normal text-white bg-customBlue  w-max items-center justify-center py-1.5 px-4  rounded-xl cursor-pointer  tracking-wider shadow-md hover:text-customBlue hover:bg-white hover:border-white"
            onClick={handleMainMenu}
          >
            Main Menu
          </button>
          <button
            className="text-customBlue sm:hidden"
            onClick={handleMainMenu}
          >
            <IoExitOutline size={30} />
          </button> */}
        </div>

        <div>
          <div className="grid grid-flow-row sm:grid-flow-col gap-24 sm:gap-32 justify-center xl:pt-6">
            <div className="relative">
              <div className="flex flex-col gap-3 bg-blue-50 text-lg sm:text-lg leading-relaxed tracking-wide  mt-3 sm:mt-0 sm:mx-0 md:pr-12 sm:pl-4 xl:pl-6 2xl:pr-12  px-4 pt-4 sm:px-0 sm:p-0 pb-10  sm:pb-0 sm:pt-0 sm:py-4 xl:py-6 text-customGreyishBlack rounded-lg shadow-customAdCard">
                <span>
                  Alliance GTM generates nonlinear repeatable growth but it
                  takes time, specific expertise, constant governance & high
                  cost to build and sustain the partnerships. We shall be your
                  extended alliance team, with an outcome based engagement for
                  your growth.
                </span>
                <span>
                  We start with building an ecosystem strategy in alignment with
                  your organization business strategy followed by rolling out
                  that strategy by effective implementation for tangible
                  outcomes while ensuring those outcomes through effective
                  governance & oversight framework
                </span>
              </div>
              <div className="absolute border-2 sm:border-[3px] shadow-customAdCard  rounded-full bg-white w-56 sm:w-auto flex justify-center text-lg sm:text-xl font-semibold text-customBlue py-2 px-6 sm:px-6 sm:top-1/2 sm:right-0 transform sm:rotate-90  sm:translate-x-1/2 sm:-translate-y-1/2  sm:bottom-auto bottom-0 sm:left-auto left-1/2 -translate-x-1/2 translate-y-1/2">
                Our commitment
              </div>
            </div>

            <div className="relative flex justify-center items-center text-customGreyishBlack ">
              <motion.div
                className="absolute left-[18px] -top-2 w-[3px] h-full bg-gray-200"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              ></motion.div>
              <div className="flex flex-col text-lg sm:text-lg gap-12 sm:gap-12 pl-10">
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                  <span>Cultivating a set of strategic partnership</span>
                </motion.div>
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                  <span>
                    Conducting certain number of joint innovation days
                    (workshop) with strategic customers
                  </span>
                </motion.div>
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                  <span>Generating multi M$ joint pipeline with partners</span>
                </motion.div>
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                  <span>
                    Achieving certain number of joint wins with partners
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alliance;
