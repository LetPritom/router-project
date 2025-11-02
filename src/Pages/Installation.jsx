import React, { useEffect, useState } from "react";
import Sort from "../Components/Sort";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) setInstallation(savedList);
  }, []);

    const sortItem = () => {
        if(sortOrder === 'download-asc') {
            return [...Installation].sort((a, b) => a.downloads-b.downloads)
        } else if ( sortOrder === "download-desc" ) {
            return [...installation].sort((a,b) => b.downloads-a.downloads)
        } else {
           return installation
        }
    }



  return (
    <div>
      <div className="feature flex flex-wrap justify-center items-center lg:justify-between gap-3  w-11/12 mx-auto my-8">
        <h1 className="text-3xl font-bold">
          Wishlist{" "}
          <span className="text-sm text-gray-400">
            ({installation.length}) Products Found
          </span>{" "}
        </h1>

        <label className="select select-border">
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
        {installation.map((p ,index) =>  <Sort key={index} p={p}></Sort>)}
      </div>
    </div>
  );
};

export default Installation;
