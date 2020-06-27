import React, { useEffect, useState } from "react";
import { whereIsIt4pm } from './helpers'


function Countdown() {
  const calculateZone = () => {
    const {city, country, drink, countdowm} = whereIsIt4pm();
    return {
      drink,
      country,
      city,
      timeLeft: {
        minutes: countdowm.minutes,
        seconds: countdowm.seconds
      },
      
    };
  };

  const [zoneData, setZone] = useState(calculateZone());

  useEffect(() => {
    setTimeout(() => {
      setZone(calculateZone());
    }, 1000);
  });

  const timerComponents = [];
  const {timeLeft, city, country, drink} = zoneData;

  Object.keys(timeLeft).forEach(interval => {

    if (!timeLeft[interval]) return;

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <center>
      <div>{timerComponents} until 5 pm in {city}, {country}</div>
      <div>The drink of choice is {drink}.</div>
    </center>
  );

}

export default Countdown;
