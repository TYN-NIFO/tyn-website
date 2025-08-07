import React, { useEffect, useState } from 'react';
import { sanity } from '../../sanityClient';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import whitepapers from '../Our Insights/localWhitepapers';
import Blog from './Blog';

export const industriesData = [
    {
        name: "Autoparts Manufacturing",
        description: "Explore innovative use cases transforming the autoparts sector with smart automation and AI inspection.",
        image: "/autoparts-manufacturing.webp",
    },
    {
        name: "Aluminium Manufacturing",
        description: "Discover insights into sustainability, energy efficiency, and automation in aluminium production.",
        image: "/aluminium-manufacturing.jpg",
    },
    {
        name: "Heavy Automotive Manufacturing",
        description: "See how large-scale vehicle manufacturers are leveraging digitization to boost shopfloor performance.",
        image: "/heavy-automotive-manufacturing.jpg",
    },
    {
        name: "Electronics Retail",
        description: "Understand how leading retailers are improving fulfillment, inventory, and customer experience.",
        image: "/electronics-retail.jpg",
    },
    {
        name: "Life Insurance",
        description: "Learn how insurers are automating underwriting, fraud detection, and customer engagement.",
        image: "/life-insurance.jpg",
    },
];

const WhatWeThink = () => {
    const [searchParams] = useSearchParams();
    const defaultTab = searchParams.get('tab') || 'ynsights';
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [ynsights, setYnsights] = useState([]);
    const navigate = useNavigate();

    // Update active tab when URL params change
    useEffect(() => {
        const tabFromUrl = searchParams.get('tab');
        if (tabFromUrl && ['whitepapers', 'ynsights', 'blogs'].includes(tabFromUrl)) {
            setActiveTab(tabFromUrl);
        }
    }, [searchParams]);

    useEffect(() => {
        sanity.fetch(`*[_type == "ynsight"]{
      _id,
      title,
      slug,
      problemStatement,
      solutionProviderName,
      "solutionProviderImageUrl": solutionProviderImage.asset->url,
      solution,
      impact,
      expertsTake,
      competitorPositioning,
      enterpriseOneName,
      "enterpriseOneImageUrl": enterpriseOneImage.asset->url,
      enterpriseTwoName,
      "enterpriseTwoImageUrl": enterpriseTwoImage.asset->url,
      industry,
      "thumbnailUrl": thumbnail.asset->url
    }`)
            .then((data) => {
                setYnsights(data);
            })
            .catch((err) => {
                console.error("Error fetching Ynsights:", err);
            });
    }, []);

    const handleShare = (url, title) => {
        if (navigator.share) {
            navigator.share({ title, url })
                .then(() => console.log('Successfully shared'))
                .catch(console.error);
        } else {
            alert('Sharing not supported on this device.');
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // Update URL with the new tab
        navigate(`/ynsights?tab=${tab}`, { replace: true });
    };

    return (
        <div className="mt-16 flex flex-col items-center justify-center">
            <div className="bg-bgBlue flex justify-center items-center flex-col w-full gap-6 py-8 sm:py-16">
                <div className="text-2xl sm:text-4xl font-semibold text-customBlack">Ynsights</div>
                <div className="text-customGreyishBlack text-center sm:max-w-3xl sm:text-lg px-2 sm:px-0">
                    Discover our whitepapers, industry use cases, and case studies that are transforming businesses and ecosystems
                </div>
            </div>

            <div className="relative w-full flex justify-center border-b-2 border-[#E0E0E0]">
                <div className="flex gap-4 sm:gap-10">
                    {['whitepapers', 'ynsights', 'blogs'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`relative pt-5 pb-[20px] px-2 sm:px-4 font-medium text-sm sm:text-sm ${activeTab === tab
                                    ? 'text-[#2287C0] after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#2287C0]'
                                    : 'text-[#626262]'
                                }`}
                        >
                            {tab === 'whitepapers'
                                ? 'Whitepapers'
                                : tab === 'ynsights'
                                    ? 'Use Cases'
                                    : tab === 'blogs'
                                        ? 'Blog'
                                        : 'Case Studies'}
                        </button>
                    ))}

                </div>
            </div>

            {activeTab === 'whitepapers' && (
                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 sm:px-0">
                    {whitepapers.map((paper) => (
                        <div key={paper.id} className="bg-white border rounded-lg shadow hover:shadow-md transition">
                            <Link to={`/ynsights/${paper.id.replace(/\s+/g, '-').toLowerCase()}`}>
                                <img
                                    src={paper.image}
                                    alt={paper.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <div className="text-lg font-semibold text-customBlue">{paper.title}</div>
                                </div>
                            </Link>
                            <div className="flex justify-between items-center px-4 pb-4">
                                <button
                                    onClick={() => handleShare(paper.url, paper.title)}
                                    className="text-[#626262] hover:text-[#2287C0]"
                                >
                                    <FiShare2 size={20} />
                                </button>
                                <a
                                    href={paper.pdfUrl}
                                    download
                                    className="text-[#626262] hover:text-[#2287C0]"
                                >
                                    <FiDownload size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'ynsights' && (
                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 sm:px-0">
                    {industriesData.length === 0 ? (
                        <p className="text-[#626262] col-span-full text-center">No industry insights available yet.</p>
                    ) : (
                        industriesData.map((industry) => (
                            <div
                                key={industry.name}
                                className="bg-white border rounded-lg shadow hover:shadow-md transition"
                            >
                                <img
                                    src={industry.image}
                                    alt={industry.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-[#2287C0]">{industry.name}</h3>
                                    <p className="text-sm text-[#626262] mt-1">{industry.description}</p>
                                    <button
                                        className="mt-3 text-sm font-medium text-[#2287C0] hover:underline"
                                        onClick={() =>
                                            navigate(`/ynsights/industry/${industry.name.replace(/\s+/g, '-').toLowerCase()}`)
                                        }
                                    >
                                        View Ynsights →
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {activeTab === 'blogs' && (
                <Blog />
            )}

            {/* {activeTab === 'casestudies' && (
                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 sm:px-0">
                    <div className="bg-white border rounded-lg shadow hover:shadow-md transition flex flex-col items-center justify-center  text-center">
                        <img
                            src="/coming-soon.jpg" 
                            alt="Coming Soon"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-lg font-semibold text-[#2287C0] py-2">Case Studies</h3>
                        <p className="text-sm text-[#626262] pb-4">
                            We're working on publishing transformative case studies. Stay tuned!
                        </p>
                    </div>
                </div>
            )} */}

        </div>
    );
};

export default WhatWeThink;
