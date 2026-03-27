import React, { use, useState } from 'react';
import Card from '../Card/Card';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, coin ,setCoin}) => {
    // console.log(playersPromise);
    const data = use(playersPromise);
    // console.log(data);
    const [selectedType, setSelectedType] = useState("available");
    // console.log(selectedType);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='mt-16 mb-10 max-w-300 m-auto '>
            {/* Two buttons */}
            <div className='flex justify-between items-center bg-gray-300 py-2.5 px-10 rounded-md sticky top-22'>
                {selectedType == "available" ? <h2 className='text-2xl font-extrabold text-blue-700'>Available Players</h2> : <h2 className='text-2xl font-extrabold text-blue-700'>Selected Players({selectedPlayers.length}/{data.length})</h2>}
                <div className='flex gap-5'>
                    <button onClick={()=>{setSelectedType("available")}} className={`btn ${selectedType=="available"? "btn-primary":"btn-outline"}`}>Available</button>
                    <button onClick={() => { setSelectedType("selected")}} className={`btn ${selectedType == "selected" ? "btn-primary" : "btn-outline"}`}>Selected <span>({selectedPlayers.length})</span></button>
                </div>
            </div>

            {/* All players cards dynamic */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {
                    selectedType == "available" ? data.map(obj => <Card key={obj.playerName} obj={obj} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>) : <SelectedPlayers data={data}  selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>
                }
            </div>
        </div>
    );
};

export default Players;
