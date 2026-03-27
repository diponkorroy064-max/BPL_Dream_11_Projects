import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';
import NoSelectedCard from '../NoSelectedCard/NoSelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    return (
        <div className='col-span-full space-y-5'>
            {
                selectedPlayers.length == 0 ? <NoSelectedCard></NoSelectedCard> : selectedPlayers.map(objs => <SelectedCard objs={objs} key={objs.playerName} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;

