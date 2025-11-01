import React from "react";

const HeroInfo = () => {
  return (
    <div className="h-auto bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
      <h1 className="text-white font-bold text-center text-3xl p-5 flex flex-wrap justify-center items-center ">
        Trusted by Millions, Built for You
      </h1>

      <div className="content-container w-11/12 mx-auto  flex flex-col md:flex lg:flex-row justify-evenly items-center gap-4 p-10">
        <div className="info text-center text-white space-y-2 p-1">
          <p className="text-sm">Total Downloads</p>
          <h1 className="text-5xl font-semibold">29.6M</h1>
          <p className="text-sm">21% more than last month</p>
        </div>
        <div className="info text-center text-white space-y-2 p-1">
          <p className="text-sm">Total Reviews</p>
          <h1 className="text-5xl font-semibold">906K</h1>
          <p className="text-sm">46% more than last month</p>
        </div>
        <div className="info text-center text-white space-y-2 p-1">
          <p className="text-sm">Active Apps</p>
          <h1 className="text-5xl font-semibold">132+</h1>
          <p className="text-sm">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
