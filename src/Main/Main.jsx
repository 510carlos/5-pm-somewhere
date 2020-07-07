import React from "react";
import Countdown from '../Countdown';
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import './Main.css';

const GlobalStyle = createGlobalStyle`

  body {
    text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
    padding: 0;
    margin: 0;
  }

  html, body {
    height: 100%;
    background-color: #333;

  }

  a {
    color: #337ab7;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: #23527c;
    text-decoration: underline;
  }
  a:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
`

var Main = () => {
    return (
        <div>  
            <Header />
            <Countdown />
            <GlobalStyle />
        </div>
    )
};

export default Main;