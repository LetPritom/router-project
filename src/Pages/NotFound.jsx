import { ShieldAlert } from "lucide-react";
import React from "react";
import notFound from "../assets/error-message.png";
import { NavLink, useLoaderData } from "react-router";

const NotFound = () => {
    // eslint-disable-next-line no-unused-vars
    const loadingData = useLoaderData()
  return (
    <div>
      <div className="error-container h-screen">
        <div className="error w-11/12 py-3 my-10 mx-auto flex flex-col justify-center items-center bg-[#f9f9ff] gap-2">
          <img
            className="max-w-[400px] w-full object-contain"
            src={notFound}
            alt="not-found"
          />
          <NavLink to="./">
            <div className="into-text py-2">
              <h1 className="text-center text-3xl font-bold">
                <p>No Data </p>
              </h1>
              <p className="text-center py-1 text-3xl font-bold">Found</p>
            </div>
            <button className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-3 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
              Go Back Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
