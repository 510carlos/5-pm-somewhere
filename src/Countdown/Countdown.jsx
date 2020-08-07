import React, { useEffect, useState } from "react";
import { whereIsIt4pm } from './helpers'
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

const Div = styled.div`
  margin: auto;
  text-align: center;
  text-shadow: 0 1px #fff;

  span {
    font-size: 66px;
    font-family: Orbitron;
    color: red;
    font-weight:bold;
    text-shadow: 0 1px #000;
  }

`;

function Countdown() {
  const calculateZone = () => {
    const {city, country, drink, countdowm, note} = whereIsIt4pm();
    return {
      drink,
      note,
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

  const { timeLeft, city, country, drink, note } = zoneData;

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
      <h1>It's always happy hour somewhere!</h1>
      <div>Count down until 5 pm</div>
      <span>{timeLeft.minutes} : {timeLeft.seconds}</span>
      <p>{drink} is the drink of choice in <br />{city}, {country}</p>
      <p>{note}</p>
    </Div>
  );

}

export default Countdown;
