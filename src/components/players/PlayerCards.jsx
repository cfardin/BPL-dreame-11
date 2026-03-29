import React from "react";
import { FaFontAwesomeFlag, FaUser } from "react-icons/fa";


const PlayerCards = ({ p }) => {
  const { playerName, playerCountry, playerType, rating, battingStyle, bowlingStyle, price , playerImg } = p;

  return (
    <div>
      <div className="w-full shadow-sm p-6 rounded-2xl">
        <figure>
          <img 
            className="rounded-2xl"
            src={playerImg}
            alt="Shoes"
          />
        </figure>
        <h2 className="card-title">
            <FaUser/>
            {playerName}
        </h2>
        <div className="flex justify-between">
            <h3 className="flex justify-center items-center">
                <FaFontAwesomeFlag/>
                {playerCountry}
            </h3>
          <div className="badge badge-ghost">{playerType}</div>
        </div>
        <div className="divider"></div>
        {/* player info */}
        <div className="">
            <div>
                <h4>Ratting : {rating}</h4>
                <h4>{battingStyle}</h4>
            </div>
            <div className="flex justify-between">
                <h4>Price : {price}</h4>
                <button className="btn">Choose Player</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCards;
