import React from 'react';
import useAppHooks from '../Hooks/useAppHook';
import AppCard from '../Components/AppCard';

const Home = () => {

    const {apps ,} = useAppHooks();
    const eightData = apps.slice(0,8)

    return (
        <div>
            <div className="trending  w-11/12 mx-auto flex flex-col justify-center items-center ">
                <h1 className='text-[#001931] text-2xl font-bold text-center my-1 py-1'>Trending Apps</h1>
                <p className='text-[#627382] text-center text-sm py-1 my-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="w-11/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-5 my-8">
                {
                    eightData.map((app) => <AppCard key={app.id} app={app}></AppCard> )
                }
            </div>
        </div>
    );
};

export default Home;