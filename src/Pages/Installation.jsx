import React, { useEffect, useState } from "react";
import Sort from "../Components/Sort";
import { toast } from "react-toastify";
// import useAppHooks from "../Hooks/useAppHook";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) setInstallation(savedList);
  }, []);

  //   const {id} = useAppHooks();

  const sortItem = (() => {
    if (sortOrder === "download-asc") {
      return [...installation].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-desc") {
      return [...installation].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installation;
    }
  })();

  const handleRemovedInstallation = (deleteID) => {
    toast.success("Your App Is Uninstalled");
    const existingList = JSON.parse(localStorage.getItem("installation"));
    const deleteData = existingList.filter((fl) => fl.id !== deleteID);
    setInstallation(deleteData);
    localStorage.setItem("installation", JSON.stringify(deleteData));

  };

  return (
    <div>
      <div className="text-center space-y-5 my-8 py-8 w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-sm font-semibold text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="feature flex flex-wrap justify-center items-center lg:justify-between gap-3  w-11/12 mx-auto my-8">
        <h1 className="text-3xl font-bold text-[#001931]">
          {" "}
          Installed
          <span className="text-sm px-1 text-gray-400">
            ({installation.length}) App
          </span>{" "}
        </h1>

        <label className="select select-border text-gray-400 font-semibold cursor-pointer">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Download</option>
            <option value="download-asc">Low-&gt;High</option>
            <option value="download-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-6 ">
        {sortItem.map((p, index) => (
          <Sort
            handleRemovedInstallation={handleRemovedInstallation}
            key={index}
            p={p}
          ></Sort>
        ))}
      </div>
    </div>
  );
};

export default Installation;
