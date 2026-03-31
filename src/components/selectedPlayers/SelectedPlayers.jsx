import React from 'react';
import { LuDelete } from 'react-icons/lu';


const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, money, setMoney}) => {

    // console.log(selectedPlayers);
    const handleSelectedPlayer = (p) =>{
        const filterPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != p.playerName);

        setMoney(money + p.price);


        setSelectedPlayers(filterPlayers);
    }



    return (
        <div>
            <div>
                <h1>Selected Players : </h1>
                <div className='divider'></div>
            </div>
            {
                selectedPlayers.map((player, index) => (
                    <div key={index} className='flex items-center justify-between p-5 rounded-2xl border gap-2.5'>
                        <div className='flex'>
                            <img className='w-auto h-25 rounded-md' src={player.playerImg} alt="" />
                            <div>
                                <h2>{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                           
                        </div>
                        <button onClick={() => handleSelectedPlayer(player)} className='btn bg-red-300'><LuDelete /></button>
                    </div>
                ))
            }
        </div>
    );
};

export default SelectedPlayers;