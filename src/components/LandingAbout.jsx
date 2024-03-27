import React from "react";
import Sent from "../assets/sent.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "./Loader";
import Modal from "./Modal";

const LandingAbout = () => {
  return (
    <div id="explore">
      <div className=" w-[95%] md:w-[80%] mx-auto">
        <div className="md:w-[50%] mx-auto py-10">
          <h2 className="text-2xl font-medium capitalize text-center text-[#265670] py-1">
            What we serve
          </h2>
          <p className="text-base text-gray-700 text-center">
            Our range of travel services is tailored to suit diverse preferences
            and interests, ensuring that every traveler finds their perfect
            itinerary.
          </p>
        </div>

        <div className="py-5">
          <div className="grid md:grid-cols-3 gap-5 md:w-[90%] mx-auto">
            <div className="border rounded-md hover:shadow-md group py-5 md:py-12 px-2 md:px-4 bg-[#F3FBFF] hover:bg-gradient-to-b from-blue-300 to-blue-50">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-dpad-fill"
                  viewBox="0 0 16 16"
                  className="text-[#265670]"
                >
                  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zm1.288 2.34a.25.25 0 0 1 .424 0l.799 1.278A.25.25 0 0 1 8.799 4H7.201a.25.25 0 0 1-.212-.382zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z" />
                </svg>
              </div>
              <div className="mt-5 py-2 md:w-72 mx-auto">
                <p className="text-center font-semibold text-lg capitalize">
                  Lot's of choice
                </p>
                <p className="text-sm text-center my-2 md:my-4">
                  Are you seeking adventure or relaxation, we offer a vast array
                  of choices to fulfill your every travel desire.
                </p>
              </div>
            </div>

            <div className="border rounded-md hover:shadow-md group py-5 md:py-12 px-2 md:px-4 bg-[#F3FBFF] hover:bg-gradient-to-b from-blue-300 to-blue-50">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-backpack2-fill"
                  viewBox="0 0 16 16"
                  className="text-[#265670]"
                >
                  <path d="M5 13h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5z" />
                  <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v1.191l-1.17.585A1.5 1.5 0 0 0 0 11.118V13.5A1.5 1.5 0 0 0 1.5 15h1c.456.607 1.182 1 2 1h7c.818 0 1.544-.393 2-1h1a1.5 1.5 0 0 0 1.5-1.5v-2.382a1.5 1.5 0 0 0-.83-1.342L14 9.191V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" />
                </svg>
              </div>
              <div className="mt-5 py-2 md:w-72 mx-auto">
                <p className="text-center font-semibold text-lg">
                  Best Travel Guide
                </p>
                <p className="text-sm text-center my-2 md:my-4">
                  Dive deep into different cultures, where every experience
                  opens your eyes to the richness and diversity of the world.
                </p>
              </div>
              {/* <a
                href="/relocation"
                className="text-center border border-[#265670] hover:border-0 hover:bg-[#265670] cursor-pointer hover:text-white text-black lg:w-38 rounded-md py-2 w-[50%] mx-auto flex justify-center items-center mt-2"
              >
                Read More
              </a> */}
            </div>

            <div className="border rounded-md hover:shadow-md group py-5 md:py-12 px-2 md:px-4 bg-[#F3FBFF] hover:bg-gradient-to-b from-blue-300 to-blue-50">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-globe-americas"
                  viewBox="0 0 16 16"
                  className="text-[#265670]"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </div>
              <div className="mt-5 py-2 md:w-72 mx-auto">
                <p className="text-center font-semibold text-lg">Easy Trip</p>
                <p className="text-sm text-center my-2 md:my-4">
                  From seamless booking to convenient trips, every step of your
                  journey to be straightforward and stress-free.
                </p>
              </div>
              {/* <a
                href="/vacation"
                className="text-center border border-[#265670] hover:border-0 hover:bg-[#265670] cursor-pointer hover:text-white text-black lg:w-38 rounded-md py-2 w-[50%] mx-auto flex justify-center items-center mt-2"
              >
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;

