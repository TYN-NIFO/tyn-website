import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

const images = [
  { src: "/IndiaFirstLife.webp", alt: "India First Life" },
  { src: "/viacom18.png", alt: "Viacom 18" },
  { src: "/tafe.png", alt: "Tafe" },
  { src: "israelministry.jpg", alt: "Israel Foreign Ministry" },
  { src: "/infosys.png", alt: "Infosys" },
  { src: "/krahejagroup.webp", alt: "K Raheja Group" },
  { src: "Godrej Capital.jpg", alt: "Godrej Capital" },
  { src: "/lokmatmedia.png", alt: "Lokmat Media" },
  { src: "/tcs.jpeg", alt: "TCS" },
  { src: "/vedantaspark.png", alt: "Vedanta Spark" },
  { src: "/swissnex.png", alt: "Swissnex" },
  { src: "/yesbank.png", alt: "Yes Bank" },
  { src: "/ltimindtree.jpg", alt: "LTI Mind Tree" },
  { src: "/kalpataru.png", alt: "Kalpataru" },
  { src: "/ELGI.png", alt: "ELGI" },
  {src:"adityabirla.png", alt:"Aditya Birla"},
  {src:"sbgroupinternational.png", alt:"SB Group International"}
];

const AttendeesMarquee = () => {
  return (
    <>
      {/* Regular div for larger screens */}
      <div className="relative sm:flex hidden overflow-hidden whitespace-nowrap select-none" role="region" aria-label="Attendees marquee">
        <div className="flex gap-24 animate-marquee">
          {images.concat(images).map((item, index) => (
            <div key={item.alt} className="flex flex-shrink-0 ">
              <img
                src={item.src}
                alt={item.alt}
                className="w-28 h-32 object-contain"
                tabIndex={0}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Motion div for mobile screens */}
      {/* Motion div for mobile screens */}
      <div className="flex sm:hidden overflow-hidden whitespace-nowrap select-none gap-12">
        <motion.div
          className="flex flex-shrink-0 gap-12"
          initial={{ x: "4%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.concat(images).map((item, index) => (
            <div key={item.alt} className="mx-2">
              <img
                src={item.src}
                alt={item.alt}
                className="w-32 h-24 object-contain"
                tabIndex={0}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-shrink-0 gap-12"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.concat(images).map((item, index) => (
            <div key={item.alt} className="mx-2">
              <img
                src={item.src}
                alt={item.alt}
                className="w-32 h-24 object-contain"
                tabIndex={0}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AttendeesMarquee;
