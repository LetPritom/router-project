import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import HeroInfo from "../Components/HeroInfo";

const MainLayouts = () => {
  return (
    <div>
      <div className="hero-part">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <HeroInfo></HeroInfo>
      </div>
      <div className="outlet flex-1 w-11/12 mx-auto space-y-5 my-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
