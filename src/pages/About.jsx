import React from "react";
import Navbar from "../components/Navbar";
import img3 from "../assets/travel1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
import Footer from "../components/Footer";
import CeoImg from "../assets/Faruq.jfif";
import Abt from "../assets/ABT1.jpeg";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Navbar />
      {/* Hero Banner */}

      <main
        class="w-full h-[80vh] py-[32%] md:py-[15%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${Abt})`,
        }}
      >
        <div class="flex w-full mb-10">
          <div class="w-full relative">
            <h1 class="text-white text-center capitalize font-bold text-[35px] md:text-5xl py-2">
              About us
            </h1>
            <p class="text-white text-center capitalize font-light text-2xl md:text-2xl py-2">
              Modern & Beautiful Travel Theme
            </p>
          </div>
        </div>
      </main>

      <div className="w-full">
        <div className="mt-20 pb-10 md:px-0 px-3">
          <div className="grid md:grid-cols-2 gap-10 md:w-[80%] mx-auto">
            <div className="border group py-5 px-2 md:px-4 md:rounded-s-full rounded-t-full w-full h-[80vh]">
              <img
                src={CeoImg}
                className="md:rounded-s-full rounded-t-full w-full h-[75vh]"
              />
            </div>
            <div className="py-5 px-2 md:px-4 flex justify-center items-center">
              <div className="py-2">
                <p className="text-center text-xl font-semibold uppercase">
                  ceo statement.
                </p>
                <p className="text-[15px] text-center my-2 md:my-4">
                  Our team of experienced travel experts works tirelessly to
                  curate unforgettable journeys that cater to your unique
                  desires and passions. We understand that every traveler is
                  different, which is why we take the time to listen to your
                  needs and craft personalized itineraries that exceed your
                  expectations.
                </p>
                <p className="text-center text-xl font-semibold uppercase">
                  Mission.
                </p>
                <p className="text-[15px] text-center my-2 md:my-4">
                  our mission is to create memorable and meaningful travel
                  experiences that go beyond the typical tourist attractions,
                  allowing our clients to immerse themselves in different
                  cultures, connect with local communities, and create lifelong
                  memories.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="w-[95%] md:w-[80%] mx-auto bg-white px-3 md:px-0">
          <div className="py-[80px] md:py-[100px] grid md:grid-cols-2 gap-10">
            <div className="md:flex items-center">
              <div>
                <div className="flex items-center">
                  <div className="h-[2px] w-[8%] bg-[#f39c12]"></div>
                  <p className="mx-2 font-semibold text-black">
                    OUR COMMITMENT
                  </p>
                </div>
                <h2 className="text-4xl md:text-[42px] leading-tight my-5 font-bold text-black">
                  Making Your
                  <span className="text-[#265670]">
                    {" "}
                    International Journey
                  </span>{" "}
                  <br /> Smooth And Rewarding
                </h2>
                <div className="md:w-[80%] md:mb-8">
                  <p className="text-[16px] text-justify text-gray-800 ">
                    At Travelo, we're committed to making your international
                    journey smooth and rewarding. We prioritize safety, cultural
                    sensitivity, and sustainability in all our endeavors,
                    ensuring that your experiences abroad are enriching and
                    memorable.
                  </p>
                </div>
                {/* <button
                  type="button"
                  className="p-4 w-60 bg-[#265670] hover:bg-[#4C7890] cursor-pointer text-white lg:w-40 rounded-md mt-8"
                >
                  Subcribe
                </button> */}
              </div>
            </div>
            <div class="box-img py-2">
              <img
                className="w-full pt-20 md:h-[600px] h-[70vh]"
                src={img3}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
