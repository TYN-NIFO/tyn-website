import React from 'react'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import Sidebar from './Sidebar'

const WhitepaperTwo = ({ authors }) => {
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
        <div className="flex flex-col min-h-screen" role="region" aria-label="Whitepaper: Unlocking Enterprise Transformation through Market Innovation Adoption">
            <div class="relative w-full h-[400px]">
                <img
                    src="https://res.cloudinary.com/dv0eaik7h/image/upload/v1749708621/global-business_bxe79k.webp"
                    alt="Whitepaper background: Unlocking Enterprise Transformation through Market Innovation Adoption"
                    class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div class="text-white text-3xl font-semibold text-center tracking-wide">
                        Unlocking Enterprise Transformation through Market Innovation Adoption
                    </div>
                </div>
            </div>
            <div className='flex flex-grow"'>
                <div className="w-[250px] h-screen sticky top-[72px] sm:block hidden">
                    <Sidebar authors={authors} />
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
                            href="/whitepapers/Unlocking Enterprise Transformation through Market Innovation Adoption.pdf"
                            download={true}
                            className="text-gray-600 hover:text-blue-500"
                            aria-label="Download this whitepaper as PDF"
                        >
                            <FiDownload size={16} />
                        </a>
                    </div>

                    <div className="flex flex-col sm:gap-8 gap-4 sm:text-lg text-base text-customGreyishBlack font-light">
                        External innovation is booming - startups, deep-tech, and novel business models flood the market. Yet, many enterprises struggle to turn these into measurable outcomes. This is where Market Innovation Adoption (MIA) comes in: a proven, repeatable system to scan, pilot, and scale the right innovations.
                    </div>

                    <div className='flex flex-col sm:gap-4 gap-4'>
                        <div className='flex font-semibold text-lg'>
                            The Problem
                        </div>
                        <div className='flex flex-col sm:gap-4 gap-4 sm:text-lg text-base text-customGreyishBlack font-light'>
                            From endless pilot projects to scattered innovation teams, most enterprises face:
                            <ul className='custom-bullet flex flex-col gap-4'>
                                <li> Too much noise, not enough focus.</li>
                                <li> Little to no Bandwidth to Scout, Engage, or Evaluate solution providers.</li>
                                <li> Stakeholder alignment issues.</li>
                                <li> A lot of friction - no structured pathway from pilot to scale.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:gap-4 gap-4">
                        <div className='flex font-semibold text-lg'>
                            The Solution: MIA Framework
                        </div>
                        <div className="flex flex-col sm:gap-4 gap-4 sm:text-lg text-base text-customGreyishBlack font-light">
                            Backed by 40+ CXO interviews and 20+ field-tested models, MIA provides a structured, six-step process:
                            <ul className='custom-bullet flex flex-col gap-4'>
                                <li>Identify business challenges and innovation trends.</li>
                                <li> Define problem statements with precision.</li>
                                <li>Source solutions from startups, academia, and beyond.</li>
                                <li> Engage the right partners with clear governance.</li>
                                <li>Evaluate through rigorous pilots and success metrics.</li>
                                <li>Adopt scalable solutions into enterprise operations.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:gap-4 gap-4">
                        <div className='flex font-semibold text-lg'>
                            The Dual Flywheel Advantage
                        </div>
                        <div className="flex flex-col sm:gap-8 gap-4 sm:text-lg text-base text-customGreyishBlack font-light">
                            <div>
                                MIA uniquely integrates Outside-In (market scanning) and Inside-Out (strategic alignment) approaches, ensuring both innovation and impact.
                            </div>
                            <div>
                                Download the full whitepaer to delve deep on how enterprises can leverage MIA to move from experimentation to transformation, creating value and not just chasing trends.
                            </div>
                            <div>
                                Learn how Tata, Vedanta, and Shell operationalized MIA to reduce costs, improve ESG metrics, and fast-track adoption of cutting-edge tech.
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <a
                            href="/whitepapers/Unlocking Enterprise Transformation through Market Innovation Adoption.pdf"
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
    )
}

export default WhitepaperTwo