import React from "react";
import error from "../assets/error-404.png";
import { NavLink, useLoaderData } from "react-router";



const Error = () => {

  const loadingData = useLoaderData()
  return (
    <div>
      <div className="error-container h-screen">
        <div className="error w-11/12 py-5 my-10 mx-auto flex flex-col justify-center items-center gap-4">
          <img src={error} alt="error" />
          <NavLink to='./'>
          <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">Go Back Home</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
