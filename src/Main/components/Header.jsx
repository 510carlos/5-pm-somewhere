import React from "react";
import { Menu } from 'antd';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .ant-menu {
    background-color: #111;
    color: white;
    box-shadow: 0 0 12px #333;
  }
  .Logo {
    background-image: url(./logo.png);
  }
`;

function Header () {
  
  const home = () => window.location.assign('https://theweekendisneverover.com/');
  const blog = () => window.location.assign('http://blog.theweekendisneverover.com/');
  
  return (
    <StyledDiv>
      
      <Menu
        mode="horizontal"
      >
        <Menu.Item onClick={home} key="mail">
          Home
        </Menu.Item>
        <Menu.Item onClick={blog} key="app">
          Blog
        </Menu.Item>
      </Menu>
    </StyledDiv>
  )
}

export default Header;