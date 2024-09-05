import React, { useEffect } from 'react'
import { Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(typeof window !== "undefined" ? window.innerWidth : null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth); 
    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  useEffect(() => {
    if (screenSize !== null) {   
      if (screenSize < 768) {
        setActiveMenu(false);  
      } else {
        setActiveMenu(true); 
      }
    }
  }, [screenSize]);
  
  

  return (
   <div className="nav-container">
    <div className="logo-container">
        <Typography.Title level={2} className="logo" >
            <Link to="/">Cypto Tracker</Link>
        </Typography.Title>
    </div>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>

      {
        activeMenu && 
        <Menu theme='dark'>
          <Menu.Item icon = {<HomeOutlined />} key = {1}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item icon = {<FundOutlined />} key = {2}>
            <Link to="/cryptocurrencies">Crypto Currencies</Link>
          </Menu.Item>

          {/* <Menu.Item icon = {<MoneyCollectFilled />} key = {3}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item> */}


          <Menu.Item icon = {<BulbOutlined />} key = {4}>
            <Link to="/news">News</Link>
          </Menu.Item>

        </Menu>
      }
    </div>

    
  )
}

export default Navbar;