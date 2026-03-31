import React, { use, useState } from "react";
import PlayerCards from "./PlayerCards";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, money ,setMoney }) => {
    const [selectedType, setSelectedType] = useState(true);
    const player = use(playerPromise);
  // console.log(player);

  return (
    <div className="w-11/12 m-auto">
        <div className="flex justify-between items-center mb-6">
            <h2>{selectedType ? "Available Players" : "Selected Player" }</h2>
            {/* toggle btns */}
            <div className="flex">
                <button onClick={() => setSelectedType(true)} className={`btn ${selectedType ? "btn-info" : ""} rounded-r-none`}>All players</button>
                <button onClick={() => setSelectedType(false)} className={`btn  ${selectedType ? "" : "btn-info"}  rounded-l-none`}>Selected (<span>0</span>)</button>
            </div>
        </div>
        {/* cards for selected and all players*/}
        {
            selectedType ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {player.map((p, index) => (
            <PlayerCards money = {money} setMoney = {setMoney} key={index} p={p}></PlayerCards>
            ))}
        </div> : <SelectedPlayers></SelectedPlayers>
        }
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {player.map((p, index) => (
            <PlayerCards key={index} p={p}></PlayerCards>
            ))}
        </div> */}
    </div>
  );
};

export default Players;
