import React from "react";

const PartnerLandScape = () => {
  const contentForPartnerLandScape = [
    {
      title: "Global System Integrators (GSIs)",
      description:
        "Large firms that lead digital transformation projects with deep enterprise relationships.",
      image: "/GSI.svg",
    },
    {
      title: "System Integrators (SIs)",
      description:
        "Mid-sized system integrators providing technology solutions with faster turnaround times.",
      image: "/SIs.svg",
    },
    {
      title: "Niche/Boutique Partners",
      description:
        "Specialised firms with deep domain/technology expertise and close industry connections.",
      image: "/Niche.svg",
    },
    {
      title: "Big 4 Consulting Firms",
      description:
        "Market leaders in advisory services with strong C-suite relationships and strategic influence.",
      image: "/Big4.svg",
    },
    {
      title: "Hyperscalers",
      description:
        "Cloud giants offering infrastructure, scalability, and co-selling opportunities.",
      image: "/Hyperscalers.svg",
    },
    {
      title: "Independent Software Vendors",
      description:
        "Companies that develop complementary software products which can be integrated with and sold as a bundled solution.",
      image: "/ISVs.svg",
    },
    {
      title: "Resellers/Channel Partners",
      description:
        "Distributors that resell products, extending market reach through established networks.",
      image: "/Resellers.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-10">
      {contentForPartnerLandScape.map((content, index) => (
        <div
          key={content.title}
          className={`relative flex border border-gray-500 rounded-lg p-4 overflow-hidden ${
            index === contentForPartnerLandScape.length - 1 ? "md:col-span-2 md:mx-64" : ""
          }`}
        >
          <div className={`flex-grow pr-10 md:pr-24`}>
            <div className="font-semibold sm:text-lg">
              {index + 1}. {content.title}
            </div>
            <div className="text-gray-500 font-light text-xs sm:text-sm">
              {content.description}
            </div>
          </div>

          <div className="absolute right-[-24px] sm:right-[-20px] bottom-[-1px] md:bottom-0 flex items-center justify-end w-24 h-24">
            <img
              src={content.image}
              alt={content.title}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerLandScape;
