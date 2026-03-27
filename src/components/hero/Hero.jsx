import React from 'react';
import bannarImg from '../../assets/banner-main.png';

const Hero = () => {
    return (
        <div className="bg-linear-to-tr from-[#E7FE29] via-[#131313] to-pink-600 py-10 max-w-300 m-auto rounded-md">
            <div className="flex justify-center">
                <img src={bannarImg} alt="" />
            </div>
            <div className="text-white text-center mt-5">
                <div className="">
                    <h1 className="mb-5 text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5">Beyond Boundaries Beyond Limits</p>
                    <button className="btn btn-primary">Claim Free Credit</button>
                </div>
            </div>
        </div>
    )
};

export default Hero;


