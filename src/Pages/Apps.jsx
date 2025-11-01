import React from "react";
import useAppHooks from "../Hooks/useAppHook";
import AppCard from "../Components/AppCard";

const Apps = () => {

    const {apps,} = useAppHooks();
    console.log(apps);
  return (
    <div className="w-11/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-5 my-8">
        {
            apps.map((app ,index) => <AppCard key={index} app={app}></AppCard>)
        }
    </div>
  );
};

export default Apps;
