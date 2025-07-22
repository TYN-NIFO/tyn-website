/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector(".fixed")?.offsetHeight || 0;
    if (section) {
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleAllianceNavigation = () => navigate("/alliance");
  const handleCoInnovationNavigation = () => navigate("/alliance");

  return (
    <footer role="contentinfo" className="flex flex-col bg-bgBlue">
      <div className="mx-6 xl:mx-20 flex flex-col lg:flex-row-reverse lg:justify-between gap-8 mt-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-16 lg:flex-col lg:gap-5">
          <div className="font-medium text-lg flex flex-col gap-1.5">
            <div>Services</div>
            <button
              className="font-normal text-customGreyishBlack cursor-pointer bg-transparent border-none text-left"
              onClick={handleAllianceNavigation}
              tabIndex={0}
              aria-label="Alliance as a service"
            >
              Alliance as a service
            </button>
            <button
              className="font-normal text-customGreyishBlack cursor-pointer bg-transparent border-none text-left"
              onClick={handleCoInnovationNavigation}
              tabIndex={0}
              aria-label="Co Innovation as a service"
            >
              Co Innovation as a service
            </button>
          </div>

          <div className="font-medium text-lg flex flex-col gap-1.5">
            <div>Company</div>
            <p
              onClick={() => handleNavigation("about-us")}
              className="font-normal text-customGreyishBlack cursor-pointer"
            >
              About us
            </p>
            <p
              onClick={() => handleNavigation("our-team")}
              className="font-normal text-customGreyishBlack cursor-pointer"
            >
              Our Team
            </p>
            <p
              onClick={() => handleNavigation("difference")}
              className="font-normal text-customGreyishBlack cursor-pointer"
            >
              Difference
            </p>
            <div className="text-blue-500 cursor-pointer my-1">
              <a
                href="https://www.linkedin.com/company/the-yellow-network/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit The Yellow Network on LinkedIn"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
        

        <div className="font-medium text-lg flex flex-col sm:flex-row lg:flex-col gap-8 leading-8">
          <div>
            <div>Contact</div>
            <a
              href="mailto:innovation@theyellow.network"
              className="font-normal text-customGreyishBlack"
            >
              innovation@theyellow.network
            </a>
          </div>

          <div>
            <div>Address</div>
            <div className="font-normal text-customGreyishBlack w-60 ">
              PSG Step, PSG College of Technology, Peelamedu, Coimbatore, Tamil
              Nadu 641004
            </div>
          </div>

          <div>
            <div>Phone Number</div>
            <div className="font-normal text-customGreyishBlack">
              +91 73582 95305
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-5">
          <img src="/tyn-logo.png" alt="TYN Logo in footer" className="w-60" />
        </div>
      </div>

      <div className="font-light flex flex-col text-center justify-center items-center lg:flex-row mt-4 sm:mt-0 mb-1 sm:mb-0 text-[15px] sm:text-lg p-5 gap-5 sm:gap-2 lg:gap-16 ">
        <div className="text-gray-400">
          Copyright © 2024 TYN Ecosystem Private Ltd
        </div>
        <div className="gap-4 text-center sm:text-auto sm:gap-12 flex sm:justify-around text-customGreyishBlack">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
