import React from "react";
// import Footer from "./Footer";
import { Home, Phone, Mail } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "./Loader";
import Cont from "../assets/Cont.jpg"
// import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";

const ContactForm = () => {
  const [color] = React.useState("#265670");
  const [error, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message) {
        toast.error("Please fill all inputs");
        return;
      }
      console.log("user Data:", inputs);
      setLoading(true);
      const response = await axios.post(
        "https://faxxway-delivery-api.onrender.com/api/contact",
        inputs,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response.data.error === false) {
        setInputs({
          name: "",
          email: "",
          subject: "",
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
      {/* Hero Banner */}

      <main
        class="w-full h-[80vh] py-[32%] md:py-[15%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Cont})`,
        }}
      >
        <div class="flex w-full mb-10">
          <div class="w-full relative">
            <h1 class="text-white text-center capitalize font-bold text-[35px] md:text-5xl py-2">
              Contact
            </h1>
            <p class="text-white text-center capitalize font-light text-2xl md:text-2xl py-2">
              Contact us and start planning your dream vacation
            </p>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="section-margin py-20">
        <div className="container w-[95%] md:w-[80%] mx-auto">
          {/* Google Map */}
          <div className="hidden sm:block mb-5 pb-4">
            <div id="map" style={{ height: "480px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15756.447199256882!2d7.328502436196469!3d9.144374504138666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf93a548ab97%3A0xff66bef4d5a3eab0!2s4B%20Pst.%20Samuel%20Udoko%20Close%20FCDA%20Kubwa!5e0!3m2!1sen!2sng!4v1709584013420!5m2!1sen!2sng"
                width="100%"
                height="450"
                frameborder="0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="col-span-1 md:col-span-1">
              <h2 className="contact-title text-3xl font-bold mb-6">
                Get in Touch
              </h2>
              <form
                className="contact_form"
                action="contact_process.php"
                method="post"
              >
                <textarea
                  cols={4}
                  rows={4}
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-300 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  name="message"
                  id="message"
                  placeholder="Enter Message"
                  value={inputs.message}
                  onFocus={() => handleError(null, "message")}
                  onChange={(e) => handleOnchange(e.target.value, "message")}
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <input
                    className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-300 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={inputs.name}
                    onFocus={() => handleError(null, "name")}
                    onChange={(e) => handleOnchange(e.target.value, "name")}
                  />
                  <input
                    className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-300 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={inputs.email}
                    onFocus={() => handleError(null, "email")}
                    onChange={(e) => handleOnchange(e.target.value, "email")}
                  />
                </div>
                <input
                  className="w-full text-gray-700 bg-opacity-20 placeholder:text-base placeholder:font-normal rounded border border-gray-300 focus:border-[#265670] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                  value={inputs.subject}
                  onFocus={() => handleError(null, "subject")}
                  onChange={(e) => handleOnchange(e.target.value, "subject")}
                />
                <button
                  type="button"
                  onClick={HandleSubmit}
                  className="p-3 w-60 bg-[#265670] hover:bg-[#13567a] cursor-pointer text-white lg:w-40 rounded-md mt-8"
                >
                  Subcribe
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="col-span-1 md:col-span-1 pt-10 ">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <Home strokeWidth={1.25} color="#f39c12" />
                  <div className="pl-5">
                    <h3 className="text-lg font-semibold">KUBWA, FCT</h3>
                    <p>M457, PASTOR SAMUEL IDOKO CLOSE, FCDA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone strokeWidth={1.25} color="#f39c12" />
                  <div className="pl-5">
                    <h3 className="text-lg font-semibold">
                      <a href="tel:454545654">09169220552, 08110889623</a>
                    </h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail strokeWidth={1.25} color="#f39c12" />
                  <div className="pl-5">
                    <h3 className="text-lg font-semibold">
                      <a href="mailto:support@colorlib.com">
                        Travelo@gmail.com
                      </a>
                    </h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};
export default ContactForm;
