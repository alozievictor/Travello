import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="h-[100vh]">
        <div className="Hero">
          <div className=" w-[90%] md:w-[85%] flex justify-start items-center">
            <div className="grid lg:w-[52%] md:mt-10">
              <h4 className=" text-gray-50 capitalize text-xl md:text-base font-medium">
                Trip make easy...
              </h4>
              <p className="heroInnerCont tracking-wide text-white text-5xl md:text-6xl font-medium capitalize py-4">
                We believe that every journey is a story waiting to be told.
              </p>

              <p className="text-white text-[15px]">
                Whether you're seeking an adrenaline-pumping adventure, a serene
                escape into nature, or a cultural immersion like no other, we've
                got you covered.
              </p>

              <a
                href="#explore"
                // type="button"
                className="p-3 bg-[#265670] text-center hover:bg-gradient-to-r from-blue-500 to-[#265670] cursor-pointer text-white lg:w-40 rounded-xl mt-8"
              >
                Explore more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// className="border rounded-md hover:shadow-md group py-5 md:py-12 px-2 md:px-4 bg-[#F3FBFF] hover:bg-gradient-to-b from-blue-300 to-blue-50"
