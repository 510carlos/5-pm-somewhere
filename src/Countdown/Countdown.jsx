import React, { useEffect, useState } from "react";
import { whereIsIt4pm } from './helpers'
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

const Div = styled.div`
  margin: auto;
  text-align: center;

  div span {
    font-size: 36px;
    text-shadow: black 1px 1px 1px;
    color:white;
  }

  span {
    font-size: 66px;
    font-family: Orbitron;
    color: red;
    font-weight:bold;
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

  const {timeLeft, city, country, drink} = zoneData;

  return (
    <Div>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Orbitron',
            weights: [400, '400i'],
          }
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <h1>It's always happy our somewhere</h1>
      <div>Count down until 5 pm</div>
      <span>{timeLeft.minutes} : {timeLeft.seconds}</span>
      <p>{drink} is the drink of choice in <br />{city}, {country}</p>
    </Div>
  );

}

export default Countdown;
