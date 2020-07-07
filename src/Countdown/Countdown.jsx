import React, { useEffect, useState } from "react";
import { whereIsIt4pm } from './helpers'
import styled from 'styled-components';

const Div = styled.div`
  margin: auto;
  width: 500px;
  text-align: center;
  padding-top:360px;

  div span {
    font-size: 36px;
    text-shadow: black 1px 1px 1px;
    color:white;
  }

`;

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
    }, 100);
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
    <Div>
      <div>{timerComponents}</div>
      <div> until 5 pm in {city}, {country}</div>
      <div>The drink of choice is {drink}.</div>
    </Div>
  );

}

export default Countdown;
