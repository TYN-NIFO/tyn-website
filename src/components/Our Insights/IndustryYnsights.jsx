import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sanity } from '../../sanityClient';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const toTitleCase = (str) =>
    str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

const IndustryYnsights = () => {
    const { industrySlug } = useParams();
    const [filteredYnsights, setFilteredYnsights] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const formattedIndustry = toTitleCase(industrySlug);
        sanity.fetch(
            `*[_type == "ynsight" && industry == $industry]{
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
            }`,
            { industry: formattedIndustry }
        )
            .then((data) => {
                setFilteredYnsights(data);
                setSelectedIndex(0);
            })
            .catch((err) => {
                console.error("Sanity fetch error:", err);
            });
    }, [industrySlug]);

    const selectedInsight = filteredYnsights[selectedIndex];

    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate("/ynsights")
    }

    return (
        <>
            <Navbar />
            <div className='pt-20 sm:pt-16 '>
            <div className="w-full bg-bgBlue py-4  sm:py-8 px-4 sm:px-16 flex flex-col gap-2 sm:gap-4">
                <div className="text-sm text-[#626262] ">
                    <span className="hover:underline cursor-pointer" onClick={handleBack}>Ynsight</span> &nbsp;→&nbsp;
                    <span className="hover:underline cursor-pointer">{selectedInsight?.industry}</span> 
                </div>
                <h1 className="text-lg sm:text-4xl font-bold text-customBlack mb-4 leading-snug">
                    {selectedInsight?.title}
                </h1>
            </div>
            </div>

            <div className="px-6 lg:px-16 bg-[#F9FAFB] min-h-screen py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="lg:w-1/4 w-full border-r border-gray-200 pr-4">
                        <h2 className="text-xl font-bold mb-6 text-customBlack tracking-tight">Ynsights</h2>
                        <ul className="flex flex-col gap-2">
                            {filteredYnsights.map((item, index) => (
                                <li
                                    key={item._id}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`text-sm cursor-pointer px-3 py-2 rounded-md transition ${index === selectedIndex
                                        ? 'bg-blue-100 font-semibold text-customBlue shadow-sm'
                                        : 'text-customGreyishBlack hover:bg-gray-100'
                                        }`}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <section className="lg:w-3/4 w-full">
                        {filteredYnsights.length === 0 ? (
                            <div className="text-center text-customGreyishBlack text-sm">
                                No insights available for this industry.
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6 bg-white rounded-xl shadow-md p-6">
                                <h2 className="text-2xl font-bold text-customBlue leading-tight">{selectedInsight.title}</h2>

                                {selectedInsight.problemStatement && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-customBlack mb-2">Challenge</h3>
                                        <p className="text-sm text-customGreyishBlack whitespace-pre-line leading-relaxed">
                                            {selectedInsight.problemStatement}
                                        </p>
                                    </div>
                                )}

                                {(selectedInsight.solutionProviderImageUrl || selectedInsight.enterpriseOneImageUrl) && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {selectedInsight.solutionProviderImageUrl && (
                                            <div>
                                                <h3 className="text-base font-semibold text-customBlack mb-2">Solution Provider</h3>
                                                <img
                                                    src={selectedInsight.solutionProviderImageUrl}
                                                    alt={selectedInsight.solutionProviderName || "Provider Image"}
                                                    className="w-48 h-auto"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}

                                        {selectedInsight.enterpriseOneImageUrl && (
                                            <div>
                                                <h3 className="text-base font-semibold text-customBlack mb-2">Enterprise</h3>
                                                <img
                                                    src={selectedInsight.enterpriseOneImageUrl}
                                                    alt={selectedInsight.enterpriseOneName || "Enterprise Image"}
                                                    className="w-48 h-auto"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}

                                {selectedInsight.solution && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-customBlack mb-2">Solution</h3>
                                        <p className="text-sm text-customGreyishBlack whitespace-pre-line leading-relaxed">
                                            {selectedInsight.solution}
                                        </p>
                                    </div>
                                )}

                                {selectedInsight.impact && selectedInsight.impact.length > 0 && selectedInsight.impact.some((block) => block.listItem === 'bullet') && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-customBlack mb-2">Impact</h3>
                                        <ul className="list-disc list-inside space-y-1 pl-2">
                                            {selectedInsight.impact
                                                .filter((block) => block.listItem === 'bullet')
                                                .map((block) => (
                                                    <li key={block._key} className="text-sm text-customGreyishBlack leading-relaxed">
                                                        {block.children.map((child) => child.text).join('')}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default IndustryYnsights;
