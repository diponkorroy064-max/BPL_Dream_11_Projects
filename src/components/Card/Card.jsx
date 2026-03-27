import React, { useState } from 'react';
import { IoFlagSharp } from "react-icons/io5";
import { toast } from 'react-toastify';

const Card = ({ obj, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    // console.log(obj);
    // console.log(obj.price);
    const playerPrice = obj.price;
    const num = Number(playerPrice.replace(/[^0-9.-]+/g, "")) * 100;
    const numOfPrice = Math.round(num);
    // console.log(num);
    // console.log(numOfPrice);

    const [isSelected, setIsSelected] = useState(false);
    const handleChoosePlayer = () => {
        let newCoin = coin - numOfPrice;
        if (newCoin >= 0) {
            setCoin(coin - numOfPrice);
        }
        else { 
            toast.error("Not Enough Coin to Purchase this Player !");
            return;
        }
        // alert(`${obj.playerName} is Selected !`);
        toast.success(`${obj.playerName} is Selected !`);
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, obj]);
    };

    return (
        <div className='rounded-md p-5 space-y-2 shadow bg-gray-100'>
            <div>
                <img className='h-66 w-86 bg-contain rounded-md' src={obj.playerImage} alt="" />
            </div>

            <div className='flex justify-start items-center gap-2'>
                <div><img src="/assets/user 1.png" alt="" /></div>
                <h1 className='text-2xl font-bold'>{obj.playerName}</h1>
            </div>

            <div className='flex justify-between items-center border-b pb-3'>
                <p className='flex justify-start items-center gap-1 font-bold'><IoFlagSharp />{obj.playerCountry}</p>
                <p className='badge badge-outline badge-lg shadow font-semibold'>{obj.playerType}</p>
            </div>

            <div>
                <h2 className='font-extrabold text-2xl'>Rating</h2>

                <div className='flex justify-between text-[14px]'>
                    <p>{obj.battingStyle}</p>
                    <p>{obj.bowlingStyle}</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <p className='text-[14px]'><span className='font-bold'>Price : </span> {obj.price}</p>

                <button onClick={handleChoosePlayer} disabled={isSelected ? true : false} className='btn btn-soft btn-primary shadow'>{isSelected == true ? "Selected" : "Choose Player"}</button>
            </div>
        </div>
    );
};

export default Card;
