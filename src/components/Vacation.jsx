import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Vaction from "../assets/VacationNow.jfif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "./Loader";
// import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";
import Ser from "../assets/Serv.jpeg";

const Vacation = () => {
  const [color] = React.useState("#265670");
  const [error, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    fullname: "",
    email: "",
    nation: "",
    destination: "",
    duration: "",
    dob: "",
    phone: "",
    gender: "",
  });

  const HandleVacation = async (e) => {
    e.preventDefault();
    try {
      if (
        !inputs.fullname ||
        !inputs.email ||
        !inputs.nation ||
        !inputs.destination ||
        !inputs.duration ||
        !inputs.dob ||
        !inputs.phone ||
        !inputs.gender
      ) {
        toast.error("Please fill all inputs");
        return;
      }
      console.log("user Data:", inputs);
      setLoading(true);
      const response = await axios.post(
        "https://faxxway-delivery-api.onrender.com/api/vacation",
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
          nation: "",
          destination: "",
          duration: "",
          dob: "",
          phone: "",
          gender: "",
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
              Vacation
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
            <img className="w-full pt-20 h-[600px]" src={Vaction} alt="" />
          </div>
          <div className="md:flex items-center">
            <div className="">
              <div className="flex items-center">
                <div className="h-[2px] w-[8%] bg-[#f39c12]"></div>
                <p className="mx-2 font-semibold text-black">
                  Your Next Vacation
                </p>
              </div>
              <h2 className="text-4xl md:text-[42px] leading-tight my-5 font-bold text-black">
                Your Gateway to Unforgettable <br />{" "}
                <span className="text-[#265670]">Vacations</span>
              </h2>
              <div className="md:w-[80%] md:mb-8">
                <p className="text-[16px] text-justify text-gray-800 ">
                  {" "}
                  Are you yearning for a break from the monotony of daily life
                  and craving an exhilarating vacation experience? Your search
                  ends here! Welcome to [Your Website Name], where we excel in
                  crafting extraordinary vacation programs tailored to fulfill
                  the wanderlust of every soul.
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
                  id="fullname"
                  type="text"
                  value={inputs.fullname}
                  onFocus={() => handleError(null, "fullname")}
                  onChange={(e) => handleOnchange(e.target.value, "fullname")}
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
                  Nationality
                </label>
                <input
                  id="Nationality"
                  type="text"
                  value={inputs.nation}
                  onFocus={() => handleError(null, "nation")}
                  onChange={(e) => handleOnchange(e.target.value, "nation")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Destination Country
                </label>
                <input
                  id="country"
                  type="text"
                  value={inputs.destination}
                  onFocus={() => handleError(null, "destination")}
                  onChange={(e) =>
                    handleOnchange(e.target.value, "destination")
                  }
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Duration of Stay
                </label>
                <input
                  id="duration"
                  type="text"
                  value={inputs.duration}
                  onFocus={() => handleError(null, "duration")}
                  onChange={(e) => handleOnchange(e.target.value, "duration")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Gender
                </label>
                <select
                  id="gender"
                  value={inputs.gender}
                  onChange={(e) => handleOnchange(e.target.value, "gender")} // Update inputs.gender on change
                  className="w-full py-2 text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="">Choose gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  value={inputs.dob}
                  onFocus={() => handleError(null, "dob")}
                  onChange={(e) => handleOnchange(e.target.value, "dob")}
                  class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-gray-800 capitalize" for="fullname">
                  Phone number
                </label>
                <input
                  id="phone number"
                  type="number"
                  value={inputs.phone}
                  onFocus={() => handleError(null, "phone")}
                  onChange={(e) => handleOnchange(e.target.value, "phone")}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-200 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div class="flex justify-start mt-10">
              <button
                type="button"
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

export default Vacation;
