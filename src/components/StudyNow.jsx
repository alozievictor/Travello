import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Study from "../assets/Study-Now.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "./Loader";
// import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";
import Ser from "../assets/Serv.jpeg";

const StudyNow = () => {
  const [color] = React.useState("#265670");
  const [error, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    fullname: "",
    email: "",
    academic: "",
    program: "",
    number: "",
    message: "",
  });

  const HandleVacation = async (e) => {
    e.preventDefault();
    try {
      console.log("user Data:", inputs);
      if (
        !inputs.fullname ||
        !inputs.email ||
        !inputs.academic ||
        !inputs.program ||
        !inputs.number ||
        !inputs.message
      ) {
        toast.error("Please fill all inputs");
        return;
      }

      setLoading(true);
      const response = await axios.post(
        "https://faxxway-delivery-api.onrender.com/api/study/apply",
        inputs,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response.data.error === false) {
        setInputs({
          fullname: "",
          email: "",
          academic: "",
          program: "",
          number: "",
          message: "",
        });
        console.log("Response Data: ", response.data);
        toast.success(response.data.message);
      }
      toast.error(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

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

      <section className="w-[95%] md:w-[80%] mx-auto bg-white px-3 md:px-0">
        <div className="py-[60px] md:py-[80px] grid md:grid-cols-2 gap-16">
          <div class="box-img py-2">
            <img className="w-full pt-20 h-[600px]" src={Study} alt="" />
          </div>
          <div className="md:flex items-center">
            <div className="">
              <div className="flex items-center">
                <div className="h-[2px] w-[8%] bg-[#f39c12]"></div>
                <p className="mx-2 font-semibold text-black">STUDY PROGRAM</p>
              </div>
              <h2 className="text-4xl md:text-[42px] leading-tight my-5 font-bold text-black">
                Explore Study <br />{" "}
                <span className="text-[#265670]">Abroad Programs</span>
              </h2>
              <div className="md:w-[80%] md:mb-8">
                <p className="text-[16px] text-justify text-gray-800 ">
                  {" "}
                  we offer a diverse range of study abroad programs and partner
                  with prestigious universities worldwide to provide students
                  with unparalleled opportunities for academic and cultural
                  enrichment. Explore our affiliated universities and programs
                  below to find the perfect fit for your interests and academic
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-[#F3FBFF] body-font py-[40px] md:py-[60px]">
        <section class="max-w-4xl p-6 mx-auto">
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Full name
                </label>
                <input
                  type="text"
                  id="full-name"
                  value={inputs.fullname}
                  onFocus={() => handleError(null, "fullname")}
                  onChange={(e) => handleOnchange(e.target.value, "fullname")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Current academic institution
                </label>
                <input
                  id="academic"
                  type="text"
                  value={inputs.academic}
                  onFocus={() => handleError(null, "academic")}
                  onChange={(e) => handleOnchange(e.target.value, "academic")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={inputs.email}
                  onFocus={() => handleError(null, "email")}
                  onChange={(e) => handleOnchange(e.target.value, "email")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Program of interest
                </label>
                <input
                  id="program"
                  type="text"
                  value={inputs.program}
                  onFocus={() => handleError(null, "program")}
                  onChange={(e) => handleOnchange(e.target.value, "program")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Phone number
                </label>
                <input
                  id="phone number"
                  type="number"
                  value={inputs.number}
                  onFocus={() => handleError(null, "number")}
                  onChange={(e) => handleOnchange(e.target.value, "number")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label
                  class="text-gray-800 capitalize"
                  for="passwordConfirmation"
                >
                  Text Area
                </label>
                <textarea
                  id="textarea"
                  type="textarea"
                  rows="5"
                  cols="50"
                  value={inputs.message}
                  onFocus={() => handleError(null, "message")}
                  onChange={(e) => handleOnchange(e.target.value, "message")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>

            <div class="flex justify-start mt-6">
              <button
                onClick={HandleVacation}
                class="px-10 py-3 leading-5 text-white transition-colors duration-200 transform bg-[#265670] rounded-md focus:outline-none focus:bg-gray-600"
              >
                Submit Now
              </button>
            </div>
          </form>
        </section>
      </section>

      <Loader open={loading}>
        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <GridLoader
                color={color}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>

            <p className="text-center my-2 font-normal text-[#265670]">
              Loading please please wait.
            </p>
          </div>
        </div>
      </Loader>

      <Footer />
    </div>
  );
};

export default StudyNow;
