import React from "react";
import downImage from "../assets/icon-downloads.png";
import ratingStar from "../assets/icon-ratings.png";
import reviewers from "../assets/icon-review.png";
import { useParams } from "react-router";
import useAppHooks from "../Hooks/useAppHook";

const Install = () => {

    const{id} =useParams();
    console.log(id);
    const {apps ,loading} = useAppHooks();
    const appFind = apps.find((app) => String(app.id) === id);
    console.log(appFind);
    if(loading) return <p>Loading...</p>
    const {title ,downloads,ratingAvg,reviews,companyName,size,description ,image } = appFind || {} ;


    const handleAddTOInstallation = () => {
            
    }


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
          <h2 className="card-title font-bold">{title} : {description}</h2>
          <p className="font-semibold">Developed By <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">{companyName}</span></p>
          <div className="info-container flex justify-evenly gap-5">
            <div className="install-info flex flex-col justify-center gap-3">
            <div className="ins-img">
                <img src={downImage} alt="" />
            </div>
            <div className="view-info">
              <p className="text-[#001931] font-semibold">Downloads</p>
              <h1 className="font-extrabold text-2xl" >{downloads}</h1>
            </div>
          </div>
          <div className="install-info flex flex-col justify-center gap-3">
            <div className="ins-img">
                <img src={ratingStar} alt="" />
            </div>
            <div className="view-info">
              <p className="text-[#001931] font-semibold">Average Ratings</p>
              <h1 className="font-extrabold text-2xl" >{ratingAvg}</h1>
            </div>
          </div>
          <div className="install-info flex flex-col justify-center gap-1">
            <div className="ins-img">
                <img src={reviewers} alt="" />
            </div>
            <div className="view-info">
              <p className="text-[#001931] font-semibold">Total Reviews</p>
              <h1 className="font-extrabold text-2xl" >{reviews}</h1>
            </div>
          </div>
          </div>
          <div className="card-actions justify-center">
            <button onClick={()=> handleAddTOInstallation() } className="relative cursor-pointer inline-flex items-center justify-center py-3 font-semibold text-white rounded-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group w-auto px-12">
                <span className="absolute inset-0 bg-linear-to-r from-[#ffffff33] via-[#ffffff66] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                <span className="relative z-10"></span>
                Install Now ({size})</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
