import React from 'react';
import useAppHooks from '../Hooks/useAppHook';

const Home = () => {

    const {apps ,} = useAppHooks();
    console.log(apps);

    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Home;