import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import HeroInfo from "../Components/HeroInfo";
import { ToastContainer } from "react-toastify";
import { Loader } from "lucide-react";
import SkeletonLoader from "../Components/SkeletonLoader";

const MainLayouts = () => {
  const navigation = useNavigation()
  if(navigation.state === 'loading') {
    return <SkeletonLoader></SkeletonLoader>;
  }
  return (
    <div>
      <div className="hero-part  ">
        <Navbar></Navbar>
      </div>
      <div className>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayouts;
