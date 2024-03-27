import React from "react";
import Navbar from "../components/Navbar";
import Image from "../assets/IMAGE.png";
import Study1 from "../assets/study1.png";
import Study2 from "../assets/study2.png";
import Study3 from "../assets/study3.png";
import Study4 from "../assets/study4.png";
import Locate1 from "../assets/relocate.png";
import Locate2 from "../assets/locate2.png";
import Locate3 from "../assets/locate3.png";
import Canada from "../assets/canada.png";
import Footer from "../components/Footer";
import Ser from "../assets/Serv.jpeg";
import serv1 from "../assets/Serv1.jpg";

const Services = () => {
  return (
    <div>
      <Navbar />

      <main
        class="w-full h-[80vh] py-[32%] md:py-[15%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${Ser})`,
        }}
      >
        <div class="flex w-full mb-10">
          <div class="w-full relative">
            <h1 class="text-white text-center capitalize font-bold text-[35px] md:text-5xl py-2">
              Services
            </h1>
            <p class="text-white text-center capitalize font-light text-2xl md:text-2xl py-2">
              Modern & Beautiful Travel Theme
            </p>
          </div>
        </div>
      </main>

      <section className="py-10 md:py-20 bg-white">
        <div className="w-[95%] md:w-[100%] mx-auto grid md:grid-cols-2 gap-10 py-10 md:py-20 bg-[#F3FBFF]">
          <div className="h-[70vh] md:pr-10">
            <img
              src={serv1}
              alt="photo"
              className="md:h-[70vh] h-[60vh] object-cover w-full"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div>
              <h3 className="text-gray-800 text-4xl font-medium">
                Our services
              </h3>
              <h3 className="text-gray-800 text-4xl font-medium">at Travelo</h3>
              <div className="my-5 md:w-[80%]">
                <p className="text-base text-gray-800 font-normal">
                  At Travelo, we understand that travel and relocation can be
                  both exciting and overwhelming. That's why we're here to
                  simplify the process and make your journey as smooth and
                  stress-free as possible. With our comprehensive range of
                  services, we cater to all your travel and relocation needs,
                  whether you're planning to study abroad, relocate to a new
                  country, or embark on the perfect vacation getaway
                </p>
              </div>
            </div>

            {/* <button
              type="button"
              className="p-3 bg-[#265670] hover:bg-[#4C7890] cursor-pointer text-white lg:w-40 rounded-full mt-8"
            >
              Learn More
            </button> */}
          </div>
        </div>

        <div className="py-10 md:py-10">
          <div className="w-[95%] md:w-[85%] mx-auto py-5">
            <div className=" grid md:grid-cols-2 gap-10 py-10 md:py-20">
              <div className="h-[60vh] md:h-[80vh] md:pr-10">
                <img
                  src={Study1}
                  alt="photo"
                  className="md:h-[70vh] h-[50vh] object-cover w-full"
                />
                <div className="w-full flex justify-between items-cente p-3">
                  <div>
                    <p className="text-xl font-medium text-gray-800">
                      Trip to Jamaica
                    </p>
                    <span className="text-sm text-gray-800 font-normal">
                      5 days offer
                    </span>
                  </div>
                  <a
                    href="/Vacation"
                    className="text-base font-medium text-[#265670] py-2"
                  >
                    See more
                  </a>
                </div>
              </div>

              <div className="h-[80vh] w-full grid gap-4">
                <div className="w-full md:w-[85%] mx-auto grid gap-2 md:gap-3 pt-8 md:pt-0">
                  <h3 className="text-gray-800 text-3xl font-medium">
                    Vacation Packages
                  </h3>
                  <p className="text-base text-gray-700  font-light md:mb-2">
                    Escape the ordinary and indulge in the ultimate vacation
                    experience with LuciDreams' vacation packages. Whether
                    you're dreaming of a romantic beach getaway or a cultural
                    immersion tour.
                  </p>
                </div>
                <div className="">
                  <img
                    src={Study2}
                    alt="photo"
                    className="h-[45vh] object-cover w-full"
                  />
                  <div className="w-full flex justify-between items-cente p-3">
                    <div>
                      <p className="text-xl font-medium text-gray-800">
                        Trip to London
                      </p>
                      <span className="text-sm text-gray-800 font-normal">
                        5 days offer
                      </span>
                    </div>
                    <a
                      href="/Vacation"
                      className="text-base font-medium text-[#265670] py-2"
                    >
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%] md:w-[85%] mx-auto my-10 md:my-20">
            <div className="md:flex justify-between items-center gap-6">
              <div className=" md:pr-10 md:w-[65%] py-10 md:py-10">
                <img
                  src={Study3}
                  alt="photo"
                  className="h-[46vh] object-cover w-full"
                />
                <div className="w-full flex justify-between items-cente p-3">
                  <div>
                    <p className="text-xl font-medium text-gray-800">
                      Trip to Germany
                    </p>
                    <span className="text-sm text-gray-800 font-normal">
                      5 days offer
                    </span>
                  </div>
                  <a
                    href="/Vacation"
                    className="text-base font-medium text-[#265670] py-2"
                  >
                    See more
                  </a>
                </div>
              </div>

              <div className="w-full grid gap-4 md:w-[40%]">
                <div className="">
                  <img
                    src={Study4}
                    alt="photo"
                    className="h-[46vh] object-cover w-full"
                  />
                  <div className="w-full flex justify-between items-cente p-3">
                    <div>
                      <p className="text-xl font-medium text-gray-800">
                        Trip to Canada
                      </p>
                      <span className="text-sm text-gray-800 font-normal">
                        5 days offer
                      </span>
                    </div>
                    <a
                      href="/Vacation"
                      className="text-base font-medium text-[#265670] py-2"
                    >
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  );
};

export default Services;
