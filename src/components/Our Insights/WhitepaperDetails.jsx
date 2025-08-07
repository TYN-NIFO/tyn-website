import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import whitepapers from '../Our Insights/localWhitepapers'; 
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import Navbar from '../Navbar';

const WhitepaperDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const whitepaper = whitepapers.find(
        (wp) => wp.id.replace(/\s+/g, '-').toLowerCase() === slug.toLowerCase()
    );

    const handleBackToYnsights = () => {
        navigate('/ynsights?tab=whitepapers');
    };

    if (!whitepaper) {
        return (
            <div className="flex flex-col">
                <div>
                    <Navbar />
                </div>
                <div className="mt-16 flex flex-col items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-[#333333] mb-4">Whitepaper Not Found</h1>
                        <p className="text-[#626262] mb-6">The whitepaper you're looking for doesn't exist or has been removed.</p>
                        <button 
                            onClick={handleBackToYnsights}
                            className="inline-flex items-center text-[#2287C0] hover:underline"
                        >
                            <FiArrowLeft className="mr-2" />
                            Back to Ynsights
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <div>
                <Navbar />
            </div>
            <div className="mt-16 flex flex-col items-center justify-center">
                <div className="max-w-4xl w-full px-4 sm:px-0">
                    {/* Back button */}
                    <div className="mb-6">
                        <button
                            onClick={handleBackToYnsights}
                            className="flex items-center gap-2 p-0 h-auto text-[#2287C0] hover:text-[#333333] transition-colors duration-200"
                        >
                            <FiArrowLeft size={16} />
                            Back to Ynsights
                        </button>
                    </div>
                    
                    <div className="">{whitepaper.component}</div>
                </div>
            </div>
        </div>
    );
};

export default WhitepaperDetail;
