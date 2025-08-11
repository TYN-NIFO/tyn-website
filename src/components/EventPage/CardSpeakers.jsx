import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cardData = [
  {
    name: "Rohit.K",
    role: "CTO, HDFC Life",
    roleDescription:
      "Rohit, HDFC Life's CTO since November 2023, is a seasoned technology strategist with over 25 years of experience across the US, Southeast Asia, the Middle East, and Europe. He has held leadership roles at Tata, IBM, Aditya Birla Capital, and CMS, where he spearheaded the development of key digital public infrastructures like IRCTC, NPS, and cloud-based lending systems. At HDFC Life, he drives fintech innovations, including wealth platforms and digital lending, and mentors startups in deep tech and fintech..",
    image: "/rohit.jpg",
  },
  {
    name: "Sujatha Gopal",
    role: "CTO, TCS Business Group",
    roleDescription:
      "Sujatha Gopal is the Chief Technology Officer of the Communication, Media & Information Service Business unit at Tata Consultancy Services. With over 25 years of experience, she excels in driving strategic technology transformations, enterprise architecture, and innovation across industries such as Banking, Manufacturing, and Retail. She leads initiatives in emerging technologies, including Generative AI, 5G Edge Computing, and Metaverse, while advising several CXOs on industry advancements.",
    image: "/sujathagopal.jpg",
  },
  {
    name: "Andy David",
    role: "Advisor to Israel Innovation Minister",
    roleDescription:
      "Dr. Andy David is currently leading the Innovation Task Force in Israel’s Ministry of Foreign Affairs. Additionally, he is an active LP investor in two Silicon Valley-based VCs and has been advising family offices in Israel on their international affairs.Previously he created and managed the Ministry of Foreign Affairs' department of Innovation Entrepreneurship and Technology, focusing on international innovation and technology ecosystem collaborations. Also, He served in the Israeli Air Force and RAFAEL – Israel’s Armament Development Authority.",
    image: "/AndyDavid.jpg",
  },
  {
    name: "Dr.Somasundaram Balasubramaniam",
    role: "Head of Digital Transformation, ELGI",
    roleDescription:
      "Industry and academia bridge with expertise in Industry 4.0 and Six Sigma. He implements cutting-edge practices at multinationals and is a published researcher with 30+ works.",
    image: "/somasundharam.jpeg",
  },

  {
    name: "Swetha Suresh",
    role: "Head of Innovations, Swissnex",
    roleDescription:
      "Dr. Swetha Suresh is the Head of Innovation at Swissnex India, connecting Switzerland’s innovation ecosystem to India. With expertise in healthtech, sustainability, and digitalization, she fosters market opportunities and bilateral initiatives. She holds a BTech in Industrial Biotechnology from Anna University and a PhD in Pharmacology from Cambridge University.",
    image: "/swethasuresh.jpg",
  },
  {
    name: "Anilkumar Singh",
    role: "Commercial Vice President, SparkBeyond",
    roleDescription:
      "Anil brings deep expertise across Business, Technology and People management with a track record of scaling early stage companies and launching new business for established corporations. Prior to joining SparkBeyond , Anil has held leadership positions at Lazada (acquired by Alibaba) and Microsoft. At SparkBeyond he spearheads our commercial and delivery efforts globally.",
    image: "/anilsingh.jpeg",
  },
];

const CardOurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative w-full mt-24 sm:mt-32" role="region" aria-label="Speakers carousel">
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
            key={cardData[index].name}
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
      >
        <IoIosArrowForward size={36} />
      </button>
    </div>
  );
};

export default CardOurTeam;
