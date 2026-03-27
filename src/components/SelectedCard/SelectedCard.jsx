import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedCard = ({ objs, selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(objs);

    const handleDeleteSelectedPlayer = (objs) => {
        // console.log(objs);
        const filterPlayers = selectedPlayers.filter(player => player.playerName != objs.playerName);
        // console.log(filterPlayers);
        setSelectedPlayers(filterPlayers);

        const playerPrice = objs.price;
        const num = Number(playerPrice.replace(/[^0-9.-]+/g, "")) * 100;
        const numOfPrice = Math.round(num);
        // console.log(num);
        console.log(numOfPrice);
        setCoin(coin + numOfPrice);
    };

    return (
        <div className='flex justify-between border-2 border-gray-400 py-2.5 px-12 rounded-md bg-gray-100 shadow'>
            <div className='flex justify-start items-center gap-4'>
                <div className='border-2 border-gray-400 rounded-md'>
                    <img className='w-12 h-12 rounded-md' src={objs.playerImage} alt="" />
                </div>

                <div>
                    <h2 className='text-2xl font-bold'>{objs.playerName}</h2>
                    <h3 className='text-gray-500'>{objs.battingStyle}</h3>
                </div>
            </div>

            
            <button onClick={() => handleDeleteSelectedPlayer(objs)} className='btn rounded-full text-red-500 shadow px-2 text-2xl'><RiDeleteBin6Line/>
            </button>
            
        </div>
    );
};

export default SelectedCard;

