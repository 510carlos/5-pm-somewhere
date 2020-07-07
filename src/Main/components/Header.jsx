import React from "react";
import { Menu } from 'antd';


function Header () {
  
  const home = () => window.location.assign('https://theweekendisneverover.com/');
  const blog = () => window.location.assign('http://blog.theweekendisneverover.com/');
  
  return (
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
  )
}

export default Header;