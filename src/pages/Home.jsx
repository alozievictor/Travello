import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import LandingAbout from "../components/LandingAbout";
import LandingDest from "../components/LandingDest";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <LandingAbout />
      <LandingDest/>
      <Footer/>
    </>
  );
};

export default Home;
