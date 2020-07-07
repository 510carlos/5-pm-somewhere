import React from "react";
import Countdown from '../Countdown';
import Header from './components/Header'
import Body from './components/Body'
import './Main.css';


var Main = () => {
    return (
        <div>  
            <Header />
            {/* <Logo /> */}
            <Body>
              <Countdown />
            </Body>
        </div>
    )
};

export default Main;