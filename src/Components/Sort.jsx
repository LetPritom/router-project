import React from 'react';

const Sort = ({p ,handleRemovedInstallation}) => {
    return (
        <div className='w-11/12 mx-auto my-5 p-5'>
            <div className="dv flex justify-center items-center card bg-white/70 backdrop-blur-md shadow-lg hover:scale-103 hover:shadow-[0_10px_30px_rgba(99,46,227,0.4)] hover:-translate-y-1 transition-all duration-500 rounded-2xl border border-white/40 p-3">
            <div className=" w-11/12 mx-auto flex flex-wrap justify-between items-center gap-5">
              <div className="flex gap-3">
                <figure className="">
                  <img
                    className="h-20 w-15 rounded-lg my-2"
                    src={p.image}
                    alt="Movie"
                  />
                </figure>
                <div className="flex">
                  <div className=" align flex flex-col flex-wrap justify-center ">
                    <h2 className="text-lg font-semibold">{p.title}</h2>
                    <p className="text-sm font-semibold">{p.downloads}k</p>
                  </div>
                </div>
              </div>
              <div className="">
                <button onClick={() => handleRemovedInstallation(p.id)} className="px-5 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-md  hover:bg-red/40 hover:shadow-xl hover:border-red-400 transition-all duration-300 cursor-pointer hover:text-black">
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Sort;