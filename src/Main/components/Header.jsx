import React from "react";
import styled from 'styled-components';

var StyledHeader = styled.div`

    color: white;
    width: 600px;
    margin: 0 auto;
    color: #fff;
    text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, .5);
    padding-top:30px;
    border-bottom: 1px grey;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 22px;
        width: 375px;
        float:left;
    }
    

    nav {
        margin: 0;
        padding: 0;
        
        list-style: none;
        font-size: 18px;
        float: right;
    }
        nav a {
            float: left;
            padding: 6px;
            display: block;
            color: white;
            border-bottom: .25rem solid transparent;

            position: relative;
            display: block;
            text-decoration: none;
            color: #ecf0f1;
            text-transform: uppercase;
            transition: 0.5s;
            font-weight:bold;
        }

        nav a::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 3px;
            top: 100%;
            left: 0;
            background: white;
            transition: transform 0.5s;
            transform: scaleX(0);
            transform-origin: right;
          }

        nav a:hover,
        nav a:focus
         {
            text-decoration: none;
            float: left;
            border-bottom: 2px solid;
            display: block;
            padding-bottom:6px; 
        }

        nav a:hover {
            color: #95a5a6;
          }
          nav a:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }


`;

const Header = () => (
    <StyledHeader>
        <h1>The Weekend Is Never Over</h1>
        <nav>
            <a href="http://theweekendisneverover.com/">Home</a>
            {/* <a href="#">Music</a> */}
            <a href="http://blog.theweekendisneverover.com/">Blog</a>
        </nav>
    </StyledHeader>
);

export default Header;