import React from "react";
import Countdown from '../Countdown';
import { Body, Header} from './components'
import './Main.css';
import logo from './components/logo-twino.png';
import styled from 'styled-components';
import Footer from './components/Footer'

var StyledDiv = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

var Main = () => {
    return (
        <StyledDiv>  
            <Header />
            <img style={{display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginTop: '66px',
                          marginBottom: '66px',
                          width: '100%',
						  height: 'auto',
						  maxWidth: '569px'
            }} src={logo} alt="Logo" />
            <Body>
              <Countdown />
            </Body>
			<Footer />
        </StyledDiv>
    )
};

export default Main;