import React from "react";
import rating from '../assets/icon-ratings.png'
import down from '../assets/icon-downloads.png'
// import useAppHooks from "../Hooks/useAppHook";

const AppCard = ({app}) => {
    
//   const [apps,] = useAppHooks()
  return (
    <div>
      <div className="card bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl border border-white/40">
        <figure className="h-75 overflow-hidden">
          <img className="w-full object-cover rounded-lg" src={app.image} alt="furniture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{app.title}</h2>
          <div className="title flex justify-between w-full gap-5">
            <p className="font-semibold flex items-center gap-1 text-[#00D390]"><span><img className="h-3" src={down} alt="rating-icon" /></span>{app.downloads}</p>
            <p className="font-semibold flex items-center gap-1 text-[#FF8811] justify-end"><span><img className="h-3" src={rating} alt="rating-icon" /></span>{app.ratingAvg}</p>
          </div>
          {/* <div className="card-actions justify-end">
            <Link to={`/products/${id}`}>
              <button className="px-5 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-md  hover:bg-white/40 hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer hover:text-black">
                View Details
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AppCard;
