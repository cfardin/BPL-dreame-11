import React, { use, useState } from "react";
import PlayerCards from "./PlayerCards";

const Players = ({ playerPromise }) => {
    const [selectedType, setSelectedType] = useState(true);
  const player = use(playerPromise);
  // console.log(player);

  return (
    <div className="w-11/12 m-auto">
        <div className="flex justify-between items-center">
            <h2>Available Players</h2>
            {/* toggle btns */}
            <div className="flex">
                <button className={`btn btn-info rounded-r-none`}>All players</button>
                <button className="btn  rounded-l-none">Selected (<span>0</span>)</button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {player.map((p, index) => (
            <PlayerCards key={index} p={p}></PlayerCards>
            ))}
        </div>
    </div>
  );
};

export default Players;
