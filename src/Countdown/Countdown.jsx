import React, { useEffect, useState } from "react";
import { getZoneInformation } from './helpers'


function Countdown() {
  const calculateZone = () => {
    const {countdowm, location} = getZoneInformation();
    return {
      'time': {
        minutes: countdowm.minutes,
        seconds: countdowm.seconds
      },
      'location': location
    };
  };

  const [zoneData, setZone] = useState(calculateZone());

  useEffect(() => {
    setTimeout(() => {
      setZone(calculateZone());
    }, 1000);
  });

  const timerComponents = [];

  const timeLeft = zoneData.time;
  const zone = zoneData.location;

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <center>
        <div>{timerComponents} until 5 pm</div>
        <div> in {zone['city']}, {zone['country']} and </div>
        <div>The drink of choice is {zone['drink']}!</div>
    </center>
  );
}

export default Countdown;
