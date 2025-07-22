import React from "react";
import PartnerLandScape from "./PartnerLandScape";
import ThirdPointData from "./ThirdPointData";
import Sidebar from "./Sidebar";
import { FiDownload, FiShare2 } from "react-icons/fi";

const WhitepaperOne = ({authors}) => {

    const handleShare = (url, title) => {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url,
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Sharing is not supported on this device.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen" role="region" aria-label="Whitepaper: Choosing the Right Partner for Channel-Led Growth">
            <div class="relative w-full h-[400px]">
                <img
                    src="https://res.cloudinary.com/dv0eaik7h/image/upload/v1749708844/bgwhitepaper_fhv4be.jpg"
                    alt="Whitepaper background: Choosing the Right Partner for Channel-Led Growth"
                    class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 class="text-white text-3xl font-bold text-center">
                        Choosing the Right Partner for Channel - Led Growth
                    </h1>
                </div>
            </div>
            <div className='flex flex-grow"'>
                <div className="w-[250px] h-screen sticky top-[72px] sm:block hidden">
                    <Sidebar authors={authors}/>
                </div>
                <div className="sm:px-8 flex-1 flex flex-col gap-8 sm:py-10 p-6" aria-live="polite">
                    <div className="flex gap-8 items-center justify-end px-4">
                        <button
                            onClick={() => handleShare('/insights', 'Unlocking Non-Linear Growth through Strategic Alliances')}
                            className="text-gray-600 hover:text-blue-500"
                            aria-label="Share this whitepaper"
                        >
                            <FiShare2 size={16} />
                        </button>
                        <a
                            href="/whitepapers/Unlocking Non Linear Growth through Strategic Alliances.pdf"
                            download={true}
                            className="text-gray-600 hover:text-blue-500"
                            aria-label="Download this whitepaper as PDF"
                        >
                            <FiDownload size={16} />
                        </a>
                    </div>
                    <div className="flex flex-col sm:gap-8 gap-4" id="executive-summary">
                        <div className="flex flex-col sm:gap-8 gap-4 sm:text-lg text-base text-customGreyishBlack font-light">
                            <div>
                                In today’s competitive tech landscape, it is imperative that emerging tech firms must scale quickly and secure enterprise clients in order to drive sustainable growth. Here we explore different types of channel partnerships that can unlock non-linear growth.
                            </div>
                            <div>
                                While direct sales yield good results in the short term, they fail to scale non-linearly. Channel-led growth, where third-party partners with an established market presence drive customer acquisition, accelerate enterprise penetration and market expansion, while also establishing and enhancing the credibility of emerging technologies.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:gap-8 gap-4" id="channel-growth">
                        <div className="flex flex-col sm:gap-8 gap-4 sm:text-lg text-base text-customGreyishBlack font-light">
                            <div>
                                Selecting the right set of partners is essential for scaling through channels. Each type of partner brings a unique blend of strengths, networks, and challenges. Understanding this along with their roles and how they fit into your growth strategy can help you unlock new markets, sales growth, and enhanced brand visibility.
                            </div>
                            <div>
                                For emerging tech firms, partnering with multiple entities is key to delivering complete, scalable solutions that reduce friction and drive enterprise adoption. A multi-partner approach reduces sales friction while increasing credibility, accelerating customer acquisition, and enhancing market access.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:gap-8 gap-4" id="partner-landscape">
                        <div className="flex font-semibold text-2xl sm:text-3xl text-customBlack">
                            Partner Landscape
                        </div>
                        <PartnerLandScape />
                    </div>

                    <div className="flex flex-col gap-8" id="conclusion">
                        <div className="sm:text-3xl text-2xl font-semibold text-customBlack">
                            Key Considerations
                        </div>
                        <div className="flex flex-col sm:gap-8 gap-4 sm:text-lg text-base text-customGreyishBlack font-light">
                            <ul className="custom-bullet flex flex-col gap-4">
                                <li>Strategic Alliances Enable Exponential Growth: A multi-partner ecosystem accelerates market access.</li>
                                <li>Choosing the Right Partner is Crucial: Each partner brings unique strengths and challenges that must align with your growth strategy.</li>
                                <li>Executive Buy-In and Top-Down Alignment: These can make or break partnerships.</li>
                                <li>A Strong GTM Strategy: Essential for leveraging partnerships effectively.</li>
                                <li>Alliance Success Requires Continuous Engagement: Ongoing involvement and governance are necessary for sustained growth.</li>
                            </ul>
                            <div>
                                Through the right alliances, tech startups can scale faster, increase credibility, and unlock new markets, driving long-term success.
                            </div>
                            <div>
                                For an in-depth analysis of the different types of channel partners, including their advantages, challenges, and recommended strategies, download the full whitepaper.
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                         <a
                            href="/whitepapers/Unlocking Non Linear Growth through Strategic Alliances.pdf"
                            download={true}
                            className=" hover:text-customBlue hover:bg-white shadow-md flex flex-row gap-4 items-center justify-center border bg-customBlue text-white w-max px-6 py-3 rounded-[32px]"
                        >
                            <FiDownload size={16} />
                            <div>
                                Download the full whitepaper
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhitepaperOne;
