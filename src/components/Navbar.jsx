import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleIconNavigation = () => {
    navigate("/");
  };

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const navbarHeight = document.querySelector(".fixed").offsetHeight;
      const sectionTop = sectionElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const handleLinkNavigation = (section) => {
    if (["nifo", "yzone", "ynfinity", "ynsights"].includes(section)) {
      navigate(`/${section}`);
      setIsOpen(false);
    } else {
      if (location.pathname !== "/") {
        navigate(`/#${section}`);
        setTimeout(() => {
          scrollToSection(section);
        }, 100);
      } else {
        scrollToSection(section);
      }
      setIsOpen(false);
    }
  };

  const isAcceleratorActive = ["nifo", "yzone", "ynfinity"].some((path) =>
    location.pathname.includes(path)
  );

  return (
    <>
      <nav role="navigation" aria-label="Main navigation" className="fixed flex flex-row bg-white z-50 h-20 sm:h-16 w-full items-center justify-between">
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">Skip to main content</a>
        <div
          className="ml-4 sm:ml-8 cursor-pointer"
          onClick={handleIconNavigation}
        >
          <img
            src="/tyn-logo.png"
            alt="The Yellow Network Logo"
            className="w-44 sm:w-36 lg:w-44"
          />
        </div>
        <div className="hidden md:grid text-customBlack grid-flow-col sm:gap-x-6 xl:gap-x-16 sm:mr-4 xl:mr-20 sm:text-xs lg:text-base">
          <button
            onClick={() => handleLinkNavigation("about-us")}
            className={`mt-2 cursor-pointer bg-transparent border-none focus:outline-none ${activeSection === "about-us"
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
              }`}
            tabIndex={0}
            aria-current={activeSection === "about-us" ? "page" : undefined}
          >
            About Us
          </button>
          <button
            onClick={() => handleLinkNavigation("services")}
            className={`mt-2 cursor-pointer bg-transparent border-none focus:outline-none ${activeSection === "services"
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
              }`}
            tabIndex={0}
            aria-current={activeSection === "services" ? "page" : undefined}
          >
            Services
          </button>
          <button
            onClick={() => handleLinkNavigation("ynsights")}
            className={`mt-2 cursor-pointer bg-transparent border-none focus:outline-none ${activeSection === "ynsights"
            ? "underline decoration-customYellow decoration-[3px]"
            : ""
          }`}
          tabIndex={0}
          aria-current={activeSection === "ynsights" ? "page" : undefined}
        >
          Ynsights
        </button>
        <button
          onClick={() => handleLinkNavigation("our-team")}
          className={`mt-2 cursor-pointer bg-transparent border-none focus:outline-none ${activeSection === "our-team"
              ? "underline decoration-customYellow decoration-[3px]"
              : ""
            }`}
          tabIndex={0}
          aria-current={activeSection === "our-team" ? "page" : undefined}
        >
          Our Team
        </button>
        <div
          className="relative mt-2 cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <div
            className={`${isAcceleratorActive
                ? "underline decoration-customYellow decoration-[3px]"
                : ""
              }`}
          >
            Accelerators
          </div>
          {isDropdownOpen && (
            <div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white border shadow-md rounded-lg w-40"
            >
              <button
                onClick={() => handleLinkNavigation("nifo")}
                className="py-2 px-4 hover:bg-gray-200 border bg-transparent border-none w-full text-left"
                tabIndex={0}
                aria-label="Go to NIFO"
              >
                <img
                  src="/nifo.png"
                  alt="NIFO Logo"
                  className="mx-auto h-8 justify-center items-center"
                />
              </button>
              <button
                onClick={() => handleLinkNavigation("yzone")}
                className="py-2 px-4 hover:bg-gray-200 border bg-transparent border-none w-full text-left"
                tabIndex={0}
                aria-label="Go to YZONE"
              >
                <img
                  src="/yzone-logo.png"
                  alt="YZONE Logo"
                  className="mx-auto h-8 justify-center items-center"
                />
              </button>
              <button
                onClick={() => handleLinkNavigation("ynfinity")}
                className="py-2 px-4 hover:bg-gray-200 border bg-transparent border-none w-full text-left"
                tabIndex={0}
                aria-label="Go to YInfinity"
              >
                <img
                  src="/YInfinity.png"
                  alt="YInfinity Logo"
                  className="mx-auto h-8 justify-center items-center"
                />
              </button>
            </div>
          )}
        </div>
        <button
          onClick={() => handleLinkNavigation("contact-us")}
          className={`border bg-sky-600 text-white hover:text-customBlue shadow hover:bg-white py-1.5 px-8 sm:px-4 lg:px-8 rounded-3xl cursor-pointer ${activeSection === "contact-us"
              ? "underline decoration-customYellow decoration-[3px]"
              : ""
            }`}
          tabIndex={0}
          aria-current={activeSection === "contact-us" ? "page" : undefined}
        >
          Contact Us
        </button>
      </div>
      <div className="sm:hidden flex items-center mr-4 sm:mr-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

    </nav>
    {isOpen && (
      <div className="fixed inset-0 bg-customBlack bg-opacity-50 z-20">
        <div className="fixed top-0 right-0 w-full bg-white flex flex-col items-center pt-24 pb-8 space-y-8">
          <button
            onClick={() => handleLinkNavigation("home")}
            className="mt-2 cursor-pointer text-xl bg-transparent border-none focus:outline-none"
            tabIndex={0}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkNavigation("about-us")}
            className="mt-2 cursor-pointer text-xl bg-transparent border-none focus:outline-none"
            tabIndex={0}
          >
            About Us
          </button>
          <button
            onClick={() => handleLinkNavigation("services")}
            className="mt-2 cursor-pointer text-xl bg-transparent border-none focus:outline-none"
            tabIndex={0}
          >
            Services
          </button>
          <button
            onClick={() => handleLinkNavigation("our-team")}
            className="mt-2 cursor-pointer text-xl bg-transparent border-none focus:outline-none"
            tabIndex={0}
          >
            Our Team
          </button>
          <button
            onClick={() => handleLinkNavigation("ynsights")}
            className="mt-2 cursor-pointer text-xl bg-transparent border-none focus:outline-none"
            tabIndex={0}
          >
            Ynsights
          </button>

          {/* Dropdown for Accelerators */}
          <div className="relative w-full">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="mt-2 cursor-pointer text-xl flex justify-center gap-2 items-center px-4"
            >
              Accelerators
              <span>{isDropdownOpen ? "-" : "+"}</span>
            </div>
            {isDropdownOpen && (
              <div className="flex flex-row justify-around items-center mt-8 mb-4">
                <button
                  onClick={() => handleLinkNavigation("nifo")}
                  className="cursor-pointer"
                  tabIndex={0}
                  aria-label="Go to NIFO"
                >
                  <img src="/nifo.png" alt="NIFO Logo" className="h-12" />
                </button>
                <button
                  onClick={() => handleLinkNavigation("yzone")}
                  className="cursor-pointer"
                  tabIndex={0}
                  aria-label="Go to YZONE"
                >
                  <img src="/yzone-logo.png" alt="YZONE Logo" className="h-12" />
                </button>
                <button
                  onClick={() => handleLinkNavigation("ynfinity")}
                  className="cursor-pointer"
                  tabIndex={0}
                  aria-label="Go to YInfinity"
                >
                  <img src="/YInfinity.png" alt="YInfinity Logo" className="h-8" />
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => handleLinkNavigation("contact-us")}
            className="flex justify-center items-center border bg-sky-600 text-white py-2 px-8 rounded-3xl cursor-pointer text-xl bg-transparent border-none focus:outline-none"
            tabIndex={0}
            aria-current={activeSection === "contact-us" ? "page" : undefined}
          >
            Contact Us
          </button>
        </div>
      </div>
    )}
  </>
);
};

export default Navbar;
