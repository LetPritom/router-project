import React from 'react';
import hero from '../assets/hero.png'
const HeroSection = () => {
    return (
        <div className='mt-12 pt-5 flex flex-col justify-center items-center  w-11/12 mx-auto'>
            <div className="hero-text text-center space-y-3">
                <h1 className='text-5xl font-bold'>We Build</h1>
                <h1 className='text-5xl font-bold'><span className='text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='py-2 space-y-2 text-sm text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="main-img overflow-hidden ">
                <div className="hero-image object-cover mt-12 pt-5 ">
                <img className='h-80 ' src={hero} alt="" />
            </div>
            </div>
        </div>
    );
};

export default HeroSection;