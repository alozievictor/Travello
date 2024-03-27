import React, { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/lucid.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => setNav(!nav);
  const handleClose = () => {
    untoggleNav();
    setNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth <= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Services" },
    { to: "/contact", label: "Contact us" },
  ];

  const [showComponent, setShowComponent] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    setShowComponent(false);

    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentUrl]);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restore overflow when closing menu
    }
  };

  const untoggleNav = () => {
    setNav(nav);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={`md:fixed top-0 z-50 drop-shadow-sm ${
        scrolling
          ? "glassmorphism w-full"
          : "md:mt-1 w-full"
      } `}
    >
      <div className={`w-full  top-0 ${scrolling ? "h-[10vh] bg-white" : "h-[10vh]"}`}>
        <div className="md:w-[90%] mx-auto px-2 flex justify-between items-center">
          {windowWidth > 768 ? (
            <div className="flex items-center text-white md:pt-0">
              <img src={logo} alt="pic" className="w-12 h-12 mt-1" />

              <h2
                className={`ml-2 text-xl md:mt-2 ${
                  scrolling ? "text-black " : "text-white"
                }`}
              >
                Travelo
              </h2>
            </div>
          ) : (
            <div
              className={`flex items-center pt-2 md:pt-0 ${
                scrolling ? "text-white " : "text-black"
              }`}
            >
              <img src={logo} alt="pic" className="w-12 h-12" />
              <h2 className="ml-2 text-[21px] md:mt-2">Travelo</h2>
            </div>
          )}

          {windowWidth > 768 && (
            <div className="flex flex-col items-center md:flex-row md:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-light pt-2 focus:outline-none hover:font-normal cursor-pointer hover:text-[#f39c12] transition duration-300 ${
                    scrolling ? "text-black " : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="hidden md:flex mt-1.5 items-center space-x-4 sm:hidden">
            <a
              href="#contact"
              // type="button"
              className={`p-2.5 border text-center cursor-pointer lg:w-28 rounded-md ${
                scrolling
                  ? "border-[#265670] hover:text-white hover:bg-[#265670] text-[#265670]"
                  : "border-white border text-white"
              }`}
            >
              onboard
            </a>
          </div>

          <div
            className="md:hidden w-full px-2 pt-3 flex justify-end items-end"
            onClick={toggleNav}
          >
            {!nav ? (
              <FaBars
                className={`w-6 flex justify-end items-end ${
                  scrolling ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <FaTimes className="w-6 flex justify-end items-end" />
            )}
          </div>
        </div>

        <div
          className={
            !nav
              ? "hidden"
              : "absolute z-50 bg-white w-full  h-[100vh] drop-shadow-sm px-8 py-5"
          }
        >
          <ul className="w-full bg-white">
            {links.map((link) => (
              <li
                key={link.to}
                className="border-b-2 border-zinc-100 w-full text-center py-5 cursor-pointer hover:text-[#f39c12] transition duration-300"
              >
                <Link
                  onClick={handleClose}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className=" z-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
