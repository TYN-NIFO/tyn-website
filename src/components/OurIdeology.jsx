import React from "react";

const IdeologyData = [
  {
    IdeologyName: "Purpose",
    IdeologyDescription:
      "We believe in the power of ecosystems and enable collaborations.",
  },
  {
    IdeologyName: "People",
    IdeologyDescription:
      "We invest in our associates, their growth fuels our collective success.",
  },
  {
    IdeologyName: "Customer",
    IdeologyDescription:
      "We make our customers life easier by consistently providing better & convenient solution",
  },
  {
    IdeologyName: "Culture",
    IdeologyDescription:
      "We maintain integrity and foster innovation with a get things done attitude in every transaction.",
  },
  {
    IdeologyName: "Community",
    IdeologyDescription:
      "We pledge 5% of our profits and efforts  to CSR initiatives.",
  },
];

const OurIdeology = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const goToPrevious = () => {
  //   const newIndex =
  //     currentIndex === 0 ? IdeologyData.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToNext = () => {
  //   const newIndex =
  //     currentIndex === IdeologyData.length - 1 ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center text-3xl sm:text-4xl text-customBlack font-medium py-12 sm:py-16">
        <div className="grid">
          <div className="relative">
            <div className="absolute -top-8 -right-8 h-8 w-8">
              <img src="doublequotes.jpg" alt="Double Quotes" />
            </div>
            <div className="">Our Ideology</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-bgBlue py-3 px-3 sm:px-6 sm:py-6 gap-5 mx-4 sm:mx-12 lg:mx-0 rounded-lg shadow-customAdCard">
        {IdeologyData.map((ideology, index) => {
          return (
            <div key={ideology.IdeologyName} className="mb-3 gap-10">
              <span className="text-customBlue text-xl">
                {ideology.IdeologyName}
              </span>
              <div className="text-customGreyishBlack text-[17px] pt-1.5">
                {ideology.IdeologyDescription}
              </div>
            </div>
          );
        })}
      </div>

      {/* <div>
        <img src="/ourideology.png" alt="Our Ideology" className="  sm:h-[100vh]"/>
      </div> */}

     
    </div>
  );
};

export default OurIdeology;
