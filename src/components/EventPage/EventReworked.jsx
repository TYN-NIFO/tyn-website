import React, { useState } from "react";
import Navbar from "../Navbar";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Footer from "../Footer";
import Modal from "react-modal";
import Speakers from "./Speakers";
import AttendeesMarquee from "./AttendeesMarque";
import EmergingPartner from "./EmergingPartner";
import PhotoCarousel from "../PhotoCarousel";

const EventReworked = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Navbar />

      <div
        className="relative bg-center bg-cover h-screen"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFF25CF2, rgba(255, 242, 92, 0)), url("/centerimage.jpg")',
        }}
      >
        <div className="absolute inset-0 sm:justify-end items-center sm:text-right p-4 flex sm:grid sm:grid-cols-2">
          <div className="flex flex-col justify-center items-center sm:items-end gap-12 sm:col-span-1 sm:pr-32">
            <div>
              <img
                src="/YInfinity-event.png"
                alt="Y Infinity event"
                className="sm:h-60"
              />
            </div>
            <div className="text-2xl text-customBlack font-semibold sm:font-medium">
              September 10
            </div>
            <div className="text-2xl text-customBlack font-semibold sm:font-medium">
              Sofitel BKC, Mumbai
            </div>
            <div className="text-2xl text-customBlack font-semibold sm:font-medium">
              5:00PM Onwards
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center my-12 sm:my-16 text-3xl sm:text-5xl" role="region" aria-label="Event highlights">
        <div className="relative">
          <div className="absolute -top-6 -right-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
          </div>
          <div>
            <span className="text-customBlack">Welcome to </span>
            <span className="text-customBlue">Ynfinity</span>
          </div>
        </div>
      </div>

      <div className="grid gap-12 sm:gap-0 sm:grid-cols-2 px-8 sm:px-16 xl:px-32 place-content-between items-center">
        <div className="space-y-4">
          <div className="text-customBlack font-semibold text-xl">
            A Gathering of Minds
          </div>
          <div className="text-customGreyishBlack leading-loose text-lg text-justify">
            Ynfinity 2024 concluded successfully, solidifying its position as a
            premier annual gathering for C-suite executives and technology
            innovators. This exclusive, invitation-only event brought together
            industry luminaries to explore the latest trends, share insights,
            and foster collaborations.
          </div>

          {/* <div className="fixed bottom-4 right-4 sm:hidden z-50">
            <button
              className="flex flex-row items-center justify-center gap-2 bg-customBlue text-white py-2 px-4 rounded-md "
              onClick={openModal}
            >
              <div>Register</div>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </div> */}

          {/* <div className="hidden sm:block">
            <button
              className="flex flex-row items-center justify-center gap-2 bg-customBlue text-white py-2 px-4 rounded-md "
              onClick={openModal}
            >
              <div>Register</div>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <video
            className="sm:w-3/4 sm:h-5/6"
            controls
            poster="/YInfinity-thumbnail.png"
          >
            <source
              src="https://res.cloudinary.com/dbhroxtwb/video/upload/wsv64xqgg4wfrrgpulff.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

      <div className="mt-32">
        <PhotoCarousel/>
      </div>

      <div className="grid sm:grid-cols-2 sm:my-32 mx-8">
        <div className="hidden sm:flex sm:flex-col text-5xl font-medium items-center justify-center gap-4">
          <div className="relative sm:flex gap-4">
            <div className="absolute -right-8 -top-6">
              <img
                src="doublequotes.jpg"
                alt="Double Quotes"
                className="h-8 w-8"
              />
            </div>
            <span className="text-customBlack">Highlights</span>
          </div>
        </div>

        <div className="flex sm:hidden text-3xl font-medium items-center justify-center">
          <div className="relative my-24">
            <div className="absolute -right-8 -top-6">
              <img
                src="doublequotes.jpg"
                alt="Double Quotes"
                className="h-8 w-8"
              />
            </div>
            <div className="text-customBlack">Why attend?</div>
          </div>
        </div>

        <div className="flex flex-col gap-16 leading-loose">
          <div className="flex flex-col gap-2 bg-blue-50 px-6 py-6 rounded-lg">
            <div className="text-customBlack font-medium text-xl">
              Exclusive Networking
            </div>
            <div className="text-customGreyishBlack">
              Opportunities to connect with industry peers and thought leaders were provided in an intimate, invitation-only setting.
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-blue-50 px-6 py-6 rounded-lg">
            <div className="text-customBlack font-medium text-xl">
              Thought Leadership Insights
            </div>
            <div className="text-customGreyishBlack">
              Valuable perspectives from industry experts on the latest trends and challenges were gained.
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-blue-50 px-6 py-6 rounded-lg">
            <div className="text-customBlack font-medium text-xl">
              Innovation Showcase
            </div>
            <div className="text-customGreyishBlack">
              Cutting-edge technologies shaping the future of [industry] were discovered.
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-blue-50 px-6 py-6 rounded-lg">
            <div className="text-customBlack font-medium text-xl">
              Collaborative Opportunities
            </div>
            <div className="text-customGreyishBlack">
              Potential partnerships and collaborations to drive growth and innovation were explored.
            </div>
          </div>
        </div>
      </div>


      <div className="">
        <Speakers />
      </div>

      <div className="flex flex-col px-8 sm:px-16">
        <div className="relative flex justify-center my-24 sm:my-16 items-center text-3xl sm:text-5xl font-medium mx-auto">
          <div className="absolute -right-8 -top-6 ">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-8 w-8"
            />
          </div>
          Attendees
        </div>

        <div className="text-xl sm:pt-8 pb-24 sm:pb-12 text-customGreyishBlack">
          15+ CXOs from the likes of
        </div>
        <div>
          <AttendeesMarquee />
        </div>
      </div>

      <div className="flex flex-col px-8 sm:px-16">
        <div className="relative flex justify-center mt-32 sm:mt-40 mb-20 sm:mb-28 items-center text-3xl sm:text-5xl font-medium mx-auto text-center">
          <div className="absolute right-0 -top-8">
            <img
              src="doublequotes.jpg"
              alt="Double Quotes"
              className="h-8 w-8"
            />
          </div>
          Our Emerging Tech Partners
        </div>
        <div>
          <EmergingPartner />
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
      >
        <div className="w-11/12 max-h-[70vh] sm:w-[450px] sm:max-h-[70vh] p-4 sm:p-6 bg-white rounded-lg shadow-lg overflow-y-auto relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-4 right-4 text-gray-900 hover:text-gray-900"
            aria-label="Close registration modal"
          >
            <FaTimes size={20} />
          </button>
          <div className="text-2xl font-bold mb-4" id="event-modal-title">Register for the Event</div>
          <form onSubmit={() => {}} className="space-y-4" aria-live="polite">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-gray-900">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-900">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-gray-900">Designation</label>
              <input
                type="text"
                name="designation"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="text-gray-900">Company</label>
              <input
                type="text"
                name="company"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* <div>
              <label className="text-gray-900">
                Would you like to share your thoughts on 'Sustainable innovation
                through ecosystem'?
              </label>
              <select
                name="shareThoughts"
                value={formData.shareThoughts}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div> */}
            <div>
              <label className="text-gray-900">Contact Number (Whatsapp)</label>
              <input
                type="text"
                name="contactNumber"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-gray-900">Person to follow up</label>
                <input
                  type="text"
                  name="followUpPerson"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-900">Contact</label>
                <input
                  type="text"
                  name="followUpContact"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-900">Meal Preferences</label>
              <select
                name="mealPreference"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>
            <div>
              <label className="text-gray-900">
                Would you need any assistance with travel & accommodation?
              </label>
              <select
                name="travelAssistance"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-customBlue rounded-full text-white px-4 py-2 w-full hover:scale-110 hover:text-customBlue hover:bg-white hover:border-customBlue hover:border-2 font-medium"
              >
                Register
              </button>
            </div>
          </form>
          <div>
            <img
              src="/tyn-logo.png"
              alt="TYN Logo in registration modal"
              className="flex mx-auto justify-center items-center w-48 mt-8"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EventReworked;
