import React from "react";
import Travel1 from "../assets/travelSVG.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Plane } from "lucide-react";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import Pic4 from "../assets/pic4.jpg";
import Pic5 from "../assets/pic5.jpg";
import Fri from "../assets/friends.jpg";

const LandingDest = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
  };

  return (
    <div className="w-full my-10 md:my-20">
      <div className=" w-[95%] md:w-full mx-auto grid md:grid-cols-2 gap-10 py-10 md:py-20 bg-[#F3FBFF]">
        <img
          src={Travel1}
          alt="svg"
          className="h-[50vh] md:h-[75vh] xl:h-[80vh] object-cover w-full"
        />
        {/* </div> */}
        <div className="w-full">
          <h3 className="text-gray-800 text-4xl font-medium">Step out of</h3>
          <h3 className="text-gray-800 text-4xl font-medium">
            your comfort zone,
          </h3>
          <h3 className="text-gray-800 text-4xl font-medium">
            Journey to distant lands
          </h3>

          <div className="my-5 md:w-[80%]">
            <p className="text-base text-gray-800 font-normal">
              We believe in the power of turning dreams into realities. Our
              mission is to transform your travel aspirations into unforgettable
              experiences that leave a lasting impression. With a dedication to
              excellence and a love for exploration, we're committed to
              providing you with exceptional travel adventures that surpass your
              wildest expectations.
            </p>
          </div>
          <a
            href="/service"
            type="button"
            className="p-3 bg-[#265670] text-center hover:bg-gradient-to-r from-blue-500 to-[#265670] cursor-pointer text-white lg:w-40 rounded-xl mt-8"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="w-[95%] md:w-[85%] mx-auto md:py-20 py-10">
        <div className=" grid md:grid-cols-3 gap-10 py-10 md:py-0">
          <div className="md:col-span-1 xl:col-span-1 border rounded-md group  group flex-shrink-0 relative overflow-hidden w-56 sm:w-96 h-[50vh] mx-auto">
            <div
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-md w-full h-[50vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${Pic1})`,
              }}
            ></div>
            {/* <div className="py-2 w-full absolute bottom-0 border border-red-500">
              <p className="text-start pl-10 text-gray-50 font-semibold text-lg">
                Best Travel Guide
              </p>
            </div> */}
          </div>

          <div className="md:col-span-2 xl:col-span-2 border rounded-md group  group flex-shrink-0 relative overflow-hidden w-full h-[50vh] mx-auto">
            <div
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-md  w-full h-[50vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${Pic2})`,
              }}
            ></div>
            {/* <div className="py-2 w-full absolute bottom-0 border border-red-500">
              <p className="text-start pl-10 text-gray-50 font-semibold text-lg">
                Best Travel Guide
              </p>
            </div> */}
          </div>
        </div>

        <div className=" grid md:grid-cols-3 gap-10 py-10 md:py-10">
          <div className="md:col-span-1 xl:col-span-1 border rounded-md group  group flex-shrink-0 relative overflow-hidden w-56 sm:w-96 h-[50vh] mx-auto">
            <div
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-md  w-full h-[50vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${Pic3})`,
              }}
            ></div>
            {/* <div className="py-2 w-full absolute bottom-0 border border-red-500">
              <p className="text-start pl-10 text-gray-50 font-semibold text-lg">
                Best Travel Guide
              </p>
            </div> */}
          </div>

          <div className="md:col-span-1 xl:col-span-1 border rounded-md group  group flex-shrink-0 relative overflow-hidden w-56 sm:w-96 h-[50vh] mx-auto">
            <div
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-md  w-full h-[50vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${Pic4})`,
              }}
            ></div>
            {/* <div className="py-2 w-full absolute bottom-0 border border-red-500">
              <p className="text-start pl-10 text-gray-50 font-semibold text-lg">
                Best Travel Guide
              </p>
            </div> */}
          </div>

          <div className="md:col-span-1 xl:col-span-1 border rounded-md group  group flex-shrink-0 relative overflow-hidden w-56 sm:w-96 h-[50vh] mx-auto">
            <div
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-md  w-full h-[50vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${Pic5})`,
              }}
            ></div>
            {/* <div className="py-2 w-full absolute bottom-0 border border-red-500">
              <p className="text-start pl-10 text-gray-50 font-semibold text-lg">
                Best Travel Guide
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div id="contact" className="content flex justify-center items-center">
        <div className="w-[95%] md:w-[85%] mx-auto">
          <div className="w-full md:w-[40%] ">
            <p className="text-xl md:text-4xl font-medium text-start text-white">
              A Truly Wonderful Experience
            </p>
            <p className="text-base my-5 c font-normal text-white">
              Embark on a journey of wonder and discovery with our curated
              collection of truly remarkable experiences around the globe. From
              awe-inspiring natural wonders to cultural marvels and thrilling
              adventures, each destination offers a unique opportunity to create
              lifelong memories and enrich your soul.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-20 bg-[#F3FBFF]">
        <section className="flex justify-center items-center">
          <div className="container">
            <div className="pb-5 text-center">
              <h2 className="text-3xl font-semibold text-center mb-2">
                Testimonials
              </h2>
              <p className="text-lg text-gray-600">
                What our clients say about us.
              </p>
            </div>

            <div className="mx-auto w-[95%] md:w-[80%]">
              <Slider {...settings} className="py-8">
                <div className="px-1">
                  <div class="text-gray-600 body-font border rounded-md hover:shadow-md bg-white mx-1 py-3 hover:drop-shadow-md">
                    <div class="container px-5 mx-auto">
                      <div class="w-full text-center">
                        <p class="leading-relaxed md:text-base">
                          My recent journey with lucidream was truly incredible!
                          Every aspect of the trip, from the captivating sights
                          to the vibrant sounds and the warm interactions with
                          locals, surpassed my expectations. It was a seamless
                          and unforgettable experience that left me yearning for
                          more adventures.
                        </p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                          George Odiapu
                        </h2>
                        <p class="text-gray-500">Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-1">
                  <div class="text-gray-600 body-font border rounded-md hover:shadow-md bg-white mx-1 py-3 hover:drop-shadow-md">
                    <div class="container px-5 mx-auto">
                      <div class="w-full text-center">
                        <p class="leading-relaxed md:text-base">
                          My recent journey with lucidream was truly incredible!
                          Every aspect of the trip, from the captivating sights
                          to the vibrant sounds and the warm interactions with
                          locals, surpassed my expectations. It was a seamless
                          and unforgettable experience that left me yearning for
                          more adventures.
                        </p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                          George Odiapu
                        </h2>
                        <p class="text-gray-500">Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-1">
                  <div class="text-gray-600 body-font border rounded-md hover:shadow-md bg-white mx-1 py-3 hover:drop-shadow-md">
                    <div class="container px-5 mx-auto">
                      <div class="w-full text-center">
                        <p class="leading-relaxed md:text-base">
                          My recent journey with lucidream was truly incredible!
                          Every aspect of the trip, from the captivating sights
                          to the vibrant sounds and the warm interactions with
                          locals, surpassed my expectations. It was a seamless
                          and unforgettable experience that left me yearning for
                          more adventures.
                        </p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                          George Odiapu
                        </h2>
                        <p class="text-gray-500">Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-1">
                  <div class="text-gray-600 body-font border rounded-md hover:shadow-md bg-white mx-1 py-3 hover:drop-shadow-md">
                    <div class="container px-5 mx-auto">
                      <div class="w-full text-center">
                        <p class="leading-relaxed md:text-base">
                          My recent journey with lucidream was truly incredible!
                          Every aspect of the trip, from the captivating sights
                          to the vibrant sounds and the warm interactions with
                          locals, surpassed my expectations. It was a seamless
                          and unforgettable experience that left me yearning for
                          more adventures.
                        </p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                          George Odiapu
                        </h2>
                        <p class="text-gray-500">Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingDest;
