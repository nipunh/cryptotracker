import React, { useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png'
import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectFilled } from '@ant-design/icons';
import { useState } from 'react';

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  
  }, [])

  useEffect(() => {
    if(screenSize < 768){
      setActiveMenu(false)
    }else{
      setActiveMenu(true);
    }
  }, [screenSize])
  
  

  return (
   <div className="nav-container">
    <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
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