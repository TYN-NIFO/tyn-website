import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const CoInnovation = () => {
  const navigate = useNavigate();

  const handleMainMenu = () => {
    navigate("/");
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col sm:mx-20 2xl:mx-32 sm:pt-6 xl:pt-16 sm:h-screen sm:gap-6 mt-2 sm:mt-0 mx-6 mb-16 sm:mb-0" role="region" aria-label="Co-Innovation content">
        <div className="flex flex-row justify-between">
          <div className="text-xl sm:text-2xl font-medium sm:font-semibold text-customBlack py-8 sm:py-0">
            <div className="flex">
              <div className="relative">
                <div className="sm:flex hidden absolute -top-8 -right-8 h-8 w-8">
                  <img src="doublequotes.jpg" alt="Decorative double quotes" />
                </div>
                <div className="">Enabling Co Innovation to Enterprises</div>
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
          <div className="flex flex-col-reverse sm:grid sm:grid-flow-col gap-20 sm:gap-32 justify-center sm:pt-2 xl:pt-12 ">
            <div className="relative">
              <motion.div
                className="absolute left-[18px] top-0 bottom-0 w-[3px] bg-gray-200 before:absolute before:top-0 before:bottom-[-16px] before:left-0 before:w-[3px] before:bg-gray-200 after:absolute after:top-[-12px] after:bottom-0 after:left-0 after:w-[3px] after:bg-gray-200"
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
                  <span>
                    Developing a holistic approach for a theme leveraging
                    ecosystems, based on the customer requirements
                  </span>
                </motion.div>
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                  <span>
                    Identify the key stakeholders by leveraging the established
                    existing ecosystem players
                  </span>
                </motion.div>
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                  <span>Orchestrate & govern the entire engagement</span>
                </motion.div>
                <motion.div
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  <div className="absolute -left-[33px] top-[3px] w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-300"></div>
                  <span>Deliver the desired results</span>
                </motion.div>
              </div>
            </div>

            <div className="relative flex flex-col-reverse sm:flex-row items-center">
              <div className="bg-blue-50 text-lg sm:text-lg leading-relaxed tracking-wide px-4 pt-4 pb-10 sm:pb-8 sm:pl-10 text-customGreyishBlack rounded-lg shadow-customAdCard">
                For an enterprise & government, we orchestrate an end to end
                ecosystem for a theme, based on their vision & strategy
              </div>
              <div className="absolute border-2 sm:border-[3px] shadow-customAdCard  rounded-full bg-white w-56 sm:w-auto flex justify-center text-lg sm:text-xl font-semibold text-customBlue py-2 px-6 sm:px-6 sm:top-1/2 sm:left-0 transform sm:rotate-90  sm:-translate-x-1/2 sm:-translate-y-1/2  sm:bottom-auto bottom-0  left-1/2 -translate-x-1/2 translate-y-1/2">
                Our commitment
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoInnovation;
