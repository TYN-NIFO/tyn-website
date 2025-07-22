import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Yzone = () => {
  const activeSection = "yzone";
  return (
    <div className="">
      <Navbar activeSection={activeSection} />
      <div className="">
        <div className="relative flex flex-col justify-center items-center gap-8 sm:gap-24 h-screen py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(/yzone-bg.jpeg)" }}
          ></div>
          <div className="relative z-10">
            <img
              src="/yzone-logo.png"
              alt="Y-Zone Logo"
              className="w-48 sm:w-48"
            />
          </div>
          <div className="relative z-10 font-semibold text-2xl sm:text-4xl text-customBlack">
            An Agile Innovation Hub
          </div>
        </div>

        <div className="flex flex-col gap-16 sm:gap-32 mx-8 xl:mx-16 py-8 sm:py-24">
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-4">
            <div className="flex flex-col col-span-2 gap-4 sm:gap-8">
              <div className="flex text-2xl font-semibold text-customBlue">
                Accelerating and Scaling Innovation Services
              </div>
              <div className="text-customGreyishBlack text-lg">
                Yzone is TYN’s model for delivering accelerated innovation
                services, tailored to meet enterprise needs. Unlike traditional
                industry-academia collaboration, Yzone leverages a talented pool
                of engineering students trained by TYN’s core team in
                cutting-edge digital technologies. Yzone’s Objective is to
                provide ready-to-deploy innovation teams capable of delivering
                impactful solutions.
              </div>
            </div>
            <div className="">
              <img src="yzone1.png" alt="Yzone section illustration 1" />
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-flow-col-dense  sm:grid-cols-3 gap-8 sm:gap-4">
            <div className="flex flex-col col-span-2 gap-4 sm:gap-8 order-first sm:order-last">
              <div className="flex text-2xl font-semibold text-customBlue">
                How YZone Works?
              </div>
              <div className="text-customGreyishBlack text-lg">
                Collaborative Ecosystem Yzone brings enterprises, startups, and
                academia together for co-creation through innovation challenges,
                internships, and PoCs, accelerating enterprise innovation by
                offering scalable, skilled resources to solve real-world
                problems. This initiative is central to TYN'’s mission to drive
                co- innovation through talent’ integration by empowering the
                next generation of talent and creating lasting industry impact.
              </div>
            </div>
            <div>
              <img src="yzone2.png" alt="Yzone section illustration 2" />
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-4">
            <div className="flex flex-col col-span-2 gap-4 sm:gap-8">
              <div className="flex text-2xl font-semibold text-customBlue">
                Enterprise problems
              </div>
              <div className="text-customGreyishBlack text-lg">
                Students are handpicked for each cohort and undergo TYN’s 3D
                Learning program, which exposes them to various industries,
                domain specialization, and technologies like GenaAl, Automation,
                UI/UX and Full-Stack Development. Projects are managed
                innovative solutions aligned with industry needs.
              </div>
            </div>
            <div>
              <img src="yzonebg.jpg" alt="Yzone section illustration 3" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Yzone;
