import React from 'react';
import coinImg from '../../assets/Coin.png';
import logoImg from '../../assets/logo.png';

const Navbar = ({coin}) => {
    return (
        <div className="flex justify-between items-center bg-base-200 shadow max-w-300 m-auto mb-5 px-10 py-2 rounded-sm sticky top-0 z-50">
            <div className="">
                <img className='w-15' src={logoImg} alt="" />
            </div>
            <div className="">
                <ul className="flex justify-center items-center gap-4 font-bold">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    <li className='badge badge-md shadow font-bold py-4'><span>{coin}</span>Coin<img src={coinImg} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
