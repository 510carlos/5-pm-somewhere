import React from "react";
import Countdown from '../Countdown';
import { Body, Header} from './components'
import './Main.css';
import logo from './components/twino.jpeg';


var Main = () => {
    return (
        <div>  
            <Header />
            <img style={{display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginTop: '66px',
                          marginBottom: '66px'
            }} src={logo} alt="Logo" />
            <Body>
              <Countdown />
            </Body>
        </div>
    )
};

export default Main;