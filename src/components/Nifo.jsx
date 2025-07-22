import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Nifo = () => {
  const activeSection = "nifo";
  const [wordsVisible, setWordsVisible] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef(null);
  const controls = useAnimation();

  const textArray = [
    "It provides ",
    <span key="1" className="text-customBlue">
      contextualized search
    </span>,
    " with curated insights tailored to specific business needs. ",
    <span key="2" className="text-customBlue">
      NiFo's Trends and Spotlights feature
    </span>,
    " keeps enterprises updated on emerging technologies and key industry players. The platform goes beyond discovery by facilitating ",
    <span key="3" className="text-customBlue">
      Secure Connections and Conversations
    </span>,
    ", allowing enterprises to engage with startups, SMEs, and experts in a safe, efficient environment. Whether you're a CIO seeking AI solutions or a consultant looking for innovation partners, NiFo acts as an ",
    <span key="4" className="text-customBlue">
      intelligent co-pilot
    </span>,
    ", guiding you from problem identification to execution.",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageHeight = imageRef.current ? imageRef.current.offsetHeight : 0;
      const newVisibleWords = Math.min(
        Math.floor(scrollPosition / 100),
        textArray.length
      );
      setWordsVisible(newVisibleWords);
      if (scrollPosition > imageHeight / 2) {
        setFadeOut(true);
      } else {
        setFadeOut(false);
      }
      setScrollY(Math.min(scrollPosition, imageHeight / 2));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textArray.length]);

  // Framer-motion variants for fade and translateY
  const fadeVariant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  };
  const imageVariant = {
    initial: { y: 0 },
    moved: { y: scrollY },
  };

  return (
    <>
      <Navbar activeSection={activeSection} />
      <motion.div
        animate={fadeOut ? "hidden" : "visible"}
        variants={fadeVariant}
        className="fixed inset-0 bg-gradient-to-b from-white via-white to-sky-200 flex flex-col sm:justify-center sm:items-center sm:grid grid-flow-col sm:grid-cols-5 sm:px-12 xl:px-16 h-screen sm:h-auto"
      >
        <div className="mt-24 sm:mt-0 flex flex-col sm:gap-4 sm:justify-center sm:items-center px-4 sm:px-8 sm:col-span-3">
          <div className="font-semibold xs-only:text-[29px] text-3xl sm:text-6xl xl:text-7xl text-customBlack">
            Your personalized innovation assistant
          </div>
          <div className="sm:text-xl leading-7 text-[16px] xl:text-2xl pt-4 sm:leading-relaxed xl:leading-loose text-customGreyishBlack">
            AI-driven platform, designed to help enterprises solve business
            challenges by delivering Noiseless Information and enabling
            Frictionless Orchestration
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center col-span-2">
          <div className="flex justify-around items-center flex-col rounded-md xs-only:h-[300px] xs-only:w-[300px] h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] xl:h-[400px] xl:w-[350px] bg-white shadow-lg border-2">
            <div className="w-24 sm:w-32 mx-auto flex justify-center items-center py-2">
              <img src="/nifo.png" alt="Nifo Logo" loading="lazy" />
            </div>
            <div className="flex-mt-4 mb-2">
              <motion.img
                ref={imageRef}
                src="/nifodesktopmobile.png"
                alt="Nifo desktop and mobile illustration"
                className="w-56 sm:w-64 select-none"
                loading="lazy"
                animate="moved"
                initial="initial"
                variants={imageVariant}
                style={{ y: scrollY }}
              />
            </div>
            <a
              href="https://nifo.theyellow.network/"
              target="_blank"
              rel="noreferrer"
              className="text-base bg-customBlue opacity-80 w-max justify-center flex items-center px-4 py-1.5 rounded-md text-white cursor-pointer mb-8"
            >
              Get Started
            </a>
          </div>
        </div>
      </motion.div>
      <div className="hidden sm:flex justify-center items-center h-screen">
        <img src="/nifobg.png" alt="Nifo background" className="w-3/4 mt-96" loading="lazy" />
      </div>
      <div className="sm:hidden flex justify-center items-center ">
        <img src="/nifomobile.png" alt="Nifo mobile background" className="w-2/3 mt-48" loading="lazy" />
      </div>
      <div className="text-xl sm:leading-loose mt-16 sm:mt-64 sm:mb-16 xl:mt-32 2xl:mt-64 sm:text-2xl font-medium px-8 sm:px-16 leading-loose text-justify sm:text-left justify-center items-center flex">
        <div>
          {textArray.map((word, index) => (
            <span
              key={index}
              style={{
                opacity: index < wordsVisible ? 1 : 0.3, 
                transition: "opacity 0.3s ease-in-out",
                marginRight: "0.25rem",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nifo;
