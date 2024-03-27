import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../assets/map.svg";
import NewYorkCity from "../assets/NewYorkCity.jpg";
import Frankfurt from "../assets/Frankf.jpg";
import England from "../assets/England.jpg";
import Pariso from "../assets/Paristo.jpg";

const Destination = () => {
  return (
    <div>
      <Navbar />
      <main class="w-full h-[80vh] md:h-[100vh] bg-[#265670] py-[32%] md:py-[15%]">
        <svg
          class="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="80"
            cy="10"
            r="10"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            opacity="0.2"
          />
          <circle
            cx="20"
            cy="45"
            r="2"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            opacity="0.1"
          />
        </svg>
        <div class="flex w-[95%] md:w-1/2 mb-10">
          <div class="line w-[2%] bg-[#f39c12]"></div>
          <div class="w-full pb-10 relative pl-6 md:w-[85%] mx-auto">
            <p class="text-white text-xl font-medium mx-2 md:mx-3">
              Reach out to us for a seamless travel experience, where every
              detail is tailored to your needs.
            </p>
            <h1 class="text-white capitalize font-bold text-[35px] md:text-5xl py-2">
              Destination
            </h1>
            <ul class="flex items-center my-5 text-white">
              <li class="">
                <a href="/">Home</a>
              </li>
              <div class="w-[7%] h-[2px] bg-white mx-5"></div>
              <li>
                <a href="/service">Destination</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <section className="py-10 md:py-20 bg-white">
        <div className="w-[95%] md:w-[85%] mx-auto py-5">
          <div className="md:w-[40%] mx-auto pb-3">
            <h3 className="text-center md:text-3xl font-medium text-gray-800">
              Explore the most beautiful destination
            </h3>
          </div>
          <div className="md:w-[50%] mx-auto my-4">
            <img src={Map} alt="map" />
          </div>
          <div className="md:w-[70%] mx-auto my-10 grid md:grid-cols-4 gap-5">
            <div className="flex items-center border rounded drop-shadow-sm">
              <button className="p-3 flex justify-center items-center bg-[#265670]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cursor"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z" />
                </svg>
              </button>
              <p className="px-3 text-center text-base text-gray-800 font-medium">
                United State
              </p>
            </div>
            <div className="flex items-center border rounded drop-shadow-sm">
              <button className="p-3 flex justify-center items-center bg-[#265670]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cursor"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z" />
                </svg>
              </button>
              <p className="px-3 text-center text-base text-gray-800 font-medium">
                Europe
              </p>
            </div>
            <div className="flex items-center border rounded drop-shadow-sm">
              <button className="p-3 flex justify-center items-center bg-[#265670]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cursor"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z" />
                </svg>
              </button>
              <p className="px-3 text-center text-base text-gray-800 font-medium">
                Africa
              </p>
            </div>
            <div className="flex items-center border rounded drop-shadow-sm">
              <button className="p-3 flex justify-center items-center bg-[#265670]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cursor"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z" />
                </svg>
              </button>
              <p className="px-3 text-center text-base text-gray-800 font-medium">
                Asia
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 md:py-20 bg-[#F3FBFF]">
          <div className="w-[95%] md:w-[85%] mx-auto py-5 grid md:grid-cols-4 gap-5">
            <div className="rounded-sm py-10 flex justify-center items-center">
              <div className="w-full">
                <h3 className="text-gray-800 text-center text-lg font-medium">
                  Our Popular
                </h3>
                <h2 className="text-[#265670] text-center text-2xl font-medium py-3">
                  Here is our popular destination
                </h2>
                <p className="text-sm text-gray-800 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  sint debitis porro quas dolorum a, ut excepturi nihil. Quo,
                  minus.
                </p>
                <div className="flex justify-center items-center py-2">
                  {/* <button className="bg-[#265670] px-5 py-2 text-center text-base text-white rounded font-light mt-5">
                    Apply Now
                  </button> */}
                </div>
              </div>
            </div>
            <div className="rounded-sm relative h-[40vh] md:h-[55vh]">
              <div className="flex group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30">
                <img
                  src={NewYorkCity}
                  alt="photo"
                  className="w-full h-[40vh] md:h-[55vh] object-cover transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[40%] items-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="font-semibold text-center mb-3 text-2xl p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                    <p>New York City</p>
                    <button className="bg-[#265670] px-5 py-2 text-center text-base text-white rounded font-light mt-5">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-sm relative h-[40vh] md:h-[55vh]">
              <div className="flex group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30">
                <img
                  src={Frankfurt}
                  alt="photo"
                  className="w-full h-[40vh] md:h-[55vh] object-cover transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[40%] items-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="font-semibold text-center mb-3 text-2xl p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                    <p>New York City</p>
                    <button className="bg-[#265670] px-5 py-2 text-center text-base text-white rounded font-light mt-5">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-sm relative h-[40vh] md:h-[55vh]">
              <div className="flex group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30">
                <img
                  src={Pariso}
                  alt="photo"
                  className="w-full h-[40vh] md:h-[55vh] object-cover transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[40%] items-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="font-semibold text-center mb-3 text-2xl p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                    <p>New York City</p>
                    <button className="bg-[#265670] px-5 py-2 text-center text-base text-white rounded font-light mt-5">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 md:py-20">
          <div className="w-[95%] md:w-[85%] mx-auto py-5 grid md:grid-cols-4 md:gap-5">
            <div className="md:col-span-3">
              <div className="grid md:grid-cols-3 gap-5">
                <div className="show-1 relative px-3">
                  <div className="absolute top-[85%]">
                    <p className="text-xl font-medium text-gray-50">
                      United Arab Emirates
                    </p>
                  </div>
                </div>
                <div className="show-2 relative px-3">
                  <div className="absolute top-[85%]">
                    <p className="text-xl font-medium text-gray-50">
                      Frankfurt
                    </p>
                  </div>
                </div>
                <div className="show-3 relative px-3">
                  <div className="absolute top-[85%]">
                    <p className="text-xl font-medium text-gray-50">England</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto my-10 md:my-10">
                <div className="md:flex justify-between items-center gap-6">
                  <div className="show-4 md:pr-10 md:w-[65%] relative px-3">
                    <div className="absolute top-[85%]">
                      <p className="text-xl font-medium text-gray-50">
                        George University
                      </p>
                    </div>
                  </div>

                  <div className="show-5 w-full grid gap-4 md:w-[40%] md:my-0 my-5 relative px-3">
                    <div className="absolute top-[85%]">
                      <p className="text-xl font-medium text-gray-50">
                        Dublin University
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="show-6 md:col-span-1 relative px-3">
              <div className="absolute top-[90%]">
                <p className="text-xl font-medium text-gray-50">
                  United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Destination;
