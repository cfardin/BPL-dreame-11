import React, { useState } from "react";
import { FaFontAwesomeFlag, FaUser } from "react-icons/fa";


const PlayerCards = ({ p, money,setMoney }) => {
  const { playerName, playerCountry, playerType, rating, battingStyle, bowlingStyle, price , playerImg } = p;
  const [isSelected, setSelected] = useState(false);

  const calculate = (value) =>{
    const x = money - value;
    x < 0 ? setMoney(0) : setMoney(x);
  }

  return (
    <div>
        {/* card */}
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
        <div className="space-y-1">
            <div className="space-y-1">
                <h4>Ratting : {rating}</h4>
                <div className="flex justify-between">
                    <h4>{battingStyle}</h4>
                    <h4>{bowlingStyle}</h4>
                </div>
                
            </div>
            <div className="flex justify-between">
                <h4>Price : {price}</h4>
                <button 
                    onClick={() => {
                        setSelected(true); 
                        calculate(price)}}
                    disabled ={isSelected ? true : false}
                    className="btn">
                        {isSelected ? "Selected" : "Choose Player"}
                </button>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCards;
