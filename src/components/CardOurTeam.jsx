import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cardData = [
  {
    name: "Anandapadmanaban Kathiresan",
    role: "Innovation Evangelist",
    roleDescription:
      "Passionate problem solver, and tech enthusiast with an entrepreneurial mindset. Innovating solutions, driving efficiency, enhancing user experiences, and delivering value in business.",
    image: "/anand.png",
  },
  {
    name: "Sourish Ghosh",
    role: "Growth Manager",
    roleDescription:
      "Seasoned professional in customer liaison & program management, aims to disrupt post-COVID ecosystem with transparency and collaboration.",
    image: "/sourish.jpeg",
  },
  {
    name: "Sudharshan Ethirajulu",
    role: "Alliance Director",
    roleDescription:
      "Global IT professional with 15+ years of experience in alliance and partner relationships across aviation and IT, specializing in ecosystem building and management.",
    image: "/sudharshan.png",
  },
  {
    name: "Kaushik Venkatesan",
    role: "Alliance Director",
    roleDescription:
      "Seasoned Alliances and Partnerships consultant experienced in partner strategy, go-to-market, and digital transformation. Led partnerships at TCS and Freshworks, building ecosystems.",
    image: "/kaushik.jpg",
  },
  {
    name: "Ganapathy Gangadharan [GG]",
    role: "Founder",
    roleDescription:
      "Ecosystem Orchestrator with 20 yrs experience in scaling businesses, innovation, ecosystem development, transformations, mentoring startups, NGO founder, nation-building advocate",
    image: "/gg.jpeg",
  },
  {
    name: "Senthilvelan Natarajan",
    role: "Co-Founder & CTO",
    roleDescription:
      "Global IT leader with 25+ yrs experience in product units, AI, Digital Twin. Multicontinental, P&L ownership, presales, transformations. Passionate about development, scaling businesses, travel",
    image: "/velan.png",
  },
  {
    name: "Rakesh Mahendran",
    role: "Software Developer",
    roleDescription:
      "Engineer with software development experience. Proficient in React, Typescript, Node.js. Eager to explore tech intersections, contribute to innovative projects",
    image: "/rakesh.png",
  },
  {
    name: "Lathiesh Mahendran",
    role: "Software Developer",
    roleDescription:
      "Engineer with software development experience. Proficient in React, Typescript, Node.js. Eager to explore tech intersections, contribute to innovative projects",
    image: "/lathiesh.png",
  },
  {
    name:"Rathnasundara Devi",
    role:"Legal & Finance Manager",
    roleDescription:"A legal professional with a strong interest in the intersection of law and finance.",
    image:"/rathna.jpg"
  },
  {
    name:"Maharshi Vidhyarthi",
    role:"Innovation Consultant",
    roleDescription:"Manufacturing professional and Great Lakes alumnus adapt at solving complex process challenges. Skilled in driving efficiency, optimizing workflows, business analytics and delivering client-focused solutions.",
    image:"/maharshi.jpg"
  },
  {
    name:"Vishnu Anbalagan",
    role:"Manager - Innovation & Academic Partnerships",
    roleDescription:"Research-driven robotics and automation engineer and innovation mentor, leveraging deep expertise in IoT, AI, and autonomous systems to solve real-world problems, create measurable value, and empower young mind backed by strong academic experience and a well-connected startup ecosystem network.",
    image:"/vishnu-anbalagan.jpg"
  }
];

const CardOurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(4);

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? cardData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === cardData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mt-24 sm:mt-32" role="region" aria-label="Our Team carousel">
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
        aria-label="Previous slide"
      >
        <IoIosArrowBack size={36} />
      </button>

      <div className="hidden sm:flex px-16 space-x-4 relative">
        {[
          currentIndex,
          (currentIndex + 1) % cardData.length,
          (currentIndex + 2) % cardData.length,
        ].map((index) => (
          <div
            key={index}
            className="bg-white shadow-customAdCard rounded-[24px] px-4 pb-4 transition-transform transform w-3/4"
          >
            <div className="relative h-[78px] w-[120px] rounded-full mx-auto">
              <img
                className="absolute object-cover h-32 w-32 rounded-2xl -top-[66px] "
                src={cardData[index].image}
                alt={`Profile picture of ${cardData[index].name}`}
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-col justify-center items-center h-full text-center ">
                <span className="font-medium text-xl text-customBlack">
                  {cardData[index].name}
                </span>
              </div>
              <div className="font-normal text-base pt-1 text-customBlack">
                {cardData[index].role}
              </div>
              <p className="font-light pb-4 pt-1 tracking-wide text-customGreyishBlack">
                {cardData[index].roleDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Screen */}

      <div className="sm:hidden flex px-9 relative ">
        <div
          key={currentIndex}
          className="bg-white shadow-customAdCard rounded-[24px] px-4 transition-transform transform w-full "
          aria-live="polite"
        >
          <div className="relative w-[160px] rounded-full mx-auto">
            <img
              className="absolute object-cover h-40 w-40 rounded-2xl -top-[76px]"
              src={cardData[currentIndex].image}
              alt={`Profile picture of ${cardData[currentIndex].name}`}
            />
          </div>
          <div className="pt-32 pb-12">
            <div className="flex justify-center items-center h-full w-11/12">
              <span className="font-medium text-2xl text-customBlack text-center">
                {cardData[currentIndex].name}
              </span>
            </div>
            <div className="font-medium text-[21px] py-5 text-customBlack">
              {cardData[currentIndex].role}
            </div>
            <p className="font-light pb-4 text-xl text-customGreyishBlack leading-relaxed tracking-wide">
              {cardData[currentIndex].roleDescription}
            </p>
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
  );
};

export default CardOurTeam;
