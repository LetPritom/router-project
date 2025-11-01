import React from "react";
import useAppHooks from "../Hooks/useAppHook";
import AppCard from "../Components/AppCard";
import { NavLink } from "react-router";

const Home = () => {
  const { apps } = useAppHooks();
  const eightData = apps.slice(0, 8);

  return (
    <div>
      <div className="trending  w-11/12 mx-auto flex flex-col justify-center items-center ">
        <h1 className="text-[#001931] text-2xl font-bold text-center my-1 py-1">
          Trending Apps
        </h1>
        <p className="text-[#627382] text-center text-sm py-1 my-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="w-11/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-5 my-8">
        {eightData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>

      <div className="see-all flex justify-center py-5">
        <NavLink to="/apps">
        <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:from-[#7B3FF2] hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer ">
          Show All
        </button>
      </NavLink>
      </div>
      {/* <div className="card-actions justify-end">
            <Link to={`/products/${id}`}>
              <button className="px-5 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-md  hover:bg-white/40 hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer hover:text-black">
                View Details
              </button>
            </Link>
          </div> */}
    </div>
  );
};

export default Home;
