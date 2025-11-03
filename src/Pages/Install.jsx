import React, { useState } from "react";
import downImage from "../assets/icon-downloads.png";
import ratingStar from "../assets/icon-ratings.png";
import reviewers from "../assets/icon-review.png";
import { useParams } from "react-router";
import useAppHooks from "../Hooks/useAppHook";
import { toast } from "react-toastify";
import Charts from "../Components/Charts";
import NotFound from "./NotFound";

const Install = () => {
  const { id } = useParams();

  console.log(id);
  const { apps, loading } = useAppHooks();
  
  const appFind = apps.find((app) => String(app.id) === id);
  // console.log(appFind);
  // state all time return er age declear korte hoi

  const [install, setInstall] = useState(() => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const isAlreadyInstalled = existingList.some(
      (app) => String(app.id) === id
    );
    return isAlreadyInstalled;
  });

  if (loading) return <p>Loading...</p>;
  const {
    title,
    downloads,
    ratingAvg,
    reviews,
    companyName,
    size,
    description,
    image,
    ratings
    
  } = appFind || {};
  console.log(downloads)

  const handleAddTOInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];

    // jodi age install kora thake taile 

    const alreadyInstalled = existingList.some((ap) => ap.id === appFind.id);
    if (alreadyInstalled) {
      toast.info("Already Installed!");
      setInstall(true);
      return;
    }

    //  notun kore install kora

    toast.success("Your Application Is Installing");
    const updatedList = [...existingList, appFind];
    localStorage.setItem("installation", JSON.stringify(updatedList));
    setInstall(true);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row lg:flex-row ">
        <figure className="h-auto shadow-xl rounded-xl">
          <img
            className="rounded-3xl object-cover p-3 "
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            {title} : {description}
          </h2>
          <p className="font-semibold">
            Developed By{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              {companyName}
            </span>
          </p>
          <div className="info-container flex justify-evenly gap-5">
            <div className="install-info flex flex-col justify-center gap-3">
              <div className="ins-img">
                <img src={downImage} alt="" />
              </div>
              <div className="view-info">
                <p className="text-[#001931] font-semibold">Downloads</p>
                <h1 className="font-extrabold text-2xl">{downloads}K</h1>
              </div>
            </div>
            <div className="install-info flex flex-col justify-center gap-3">
              <div className="ins-img">
                <img src={ratingStar} alt="" />
              </div>
              <div className="view-info">
                <p className="text-[#001931] font-semibold">Average Ratings</p>
                <h1 className="font-extrabold text-2xl">{ratingAvg}</h1>
              </div>
            </div>
            <div className="install-info flex flex-col justify-center gap-1">
              <div className="ins-img">
                <img src={reviewers} alt="" />
              </div>
              <div className="view-info">
                <p className="text-[#001931] font-semibold">Total Reviews</p>
                <h1 className="font-extrabold text-2xl">{reviews}</h1>
              </div>
            </div>
          </div>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddTOInstallation()}
              className="relative cursor-pointer inline-flex items-center justify-center py-3 font-semibold text-white rounded-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group w-auto px-12"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#ffffff33] via-[#ffffff66] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              <span className="relative z-10"></span>
              {install ? "Installed" : `Install Now ${size}(MB)`}
            </button>
          </div>
        </div>
      </div>

     <Charts ratings = {ratings}></Charts>

     <div className="description text-left my-5 p-4">
    <div className="title">
      <h1 className="text-3xl  mt-2 py-2 font-bold text-[#001931]">Description</h1>
    </div>
      <p className="text-sm text-[#627382] mt-3 py-2 mb-10">{description}</p>
      <p className="text-sm text-[#627382] mt-3 py-2 mb-10">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest</p>
     </div>
    </div>

    
  );
};

export default Install;
