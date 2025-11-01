import React from "react";
import downloads from "../assets/icon-downloads.png";
import ratingStar from "../assets/icon-ratings.png";
import reviewers from "../assets/icon-review.png";

const Install = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="h-50">
          <img
            className="rounded-3xl object-cover p-3  "
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">card title : description</h2>
          <p className="font-semibold">Developed By</p>
          <div className="info-container flex justify-evenly gap-5">
            <div className="install-info flex flex-col justify-center gap-3">
            <div className="ins-img">
                <img src={downloads} alt="" />
            </div>
            <div className="view-info">
              <p className="text-[#001931] font-semibold">Downloads</p>
              <h1 className="font-extrabold text-2xl" >8M</h1>
            </div>
          </div>
          <div className="install-info flex flex-col justify-center gap-3">
            <div className="ins-img">
                <img src={ratingStar} alt="" />
            </div>
            <div className="view-info">
              <p className="text-[#001931] font-semibold">Average Ratings</p>
              <h1 className="font-extrabold text-2xl" >4.9</h1>
            </div>
          </div>
          <div className="install-info flex flex-col justify-center gap-1">
            <div className="ins-img">
                <img src={reviewers} alt="" />
            </div>
            <div className="view-info">
              <p className="text-[#001931] font-semibold">Total Reviews</p>
              <h1 className="font-extrabold text-2xl" >15k</h1>
            </div>
          </div>
          </div>
          <div className="card-actions justify-center">
            <button className="relative cursor-pointer inline-flex items-center justify-center py-3 font-semibold text-white rounded-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group w-auto px-12">
                <span className="absolute inset-0 bg-linear-to-r from-[#ffffff33] via-[#ffffff66] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                <span className="relative z-10"></span>
                Install Now (220)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
