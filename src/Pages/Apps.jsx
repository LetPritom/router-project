/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAppHooks from "../Hooks/useAppHook";
import AppCard from "../Components/AppCard";
import Loader from "../Components/Loader";
import SkeletonLoader from "../Components/SkeletonLoader";
import { useLoaderData } from "react-router";
import NotFound from "./NotFound";

const Apps = () => {
  const loadingData = useLoaderData();
  const { apps, loading } = useAppHooks();
  console.log(apps);
  const [search, setSearch] = useState("");
  const matchResult = search.trim().toLocaleLowerCase();
  const foundApps = matchResult
    ? apps.filter((ap) => ap.title.toLocaleLowerCase().includes(matchResult))
    : apps;
  console.log(search);
  return (
    <div className="all-apps-container my-20">
      <div className="text-center space-y-5 my-8 py-8 w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-sm font-semibold text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className=" my-5 feature flex flex-wrap justify-center items-center lg:justify-between gap-3 w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-[#001931] ">
          All Apps{" "}
          <span className="text-sm text-gray-400">
            {" "}
            ({foundApps.length}) Apps Found
          </span>{" "}
        </h1>

        <label className="input">
          <input
            className="w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="search Products"
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : foundApps.length ? (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
          {foundApps.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Apps;
