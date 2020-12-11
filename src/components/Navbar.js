import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from "react-icons";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar)

  return (
    <>
      {/*dimmed page 부분*/}
      <div className={sideBar ? 'dimmed-page' : ''} onClick={showSideBar}></div>
      <IconContext.Provider value={{ color: '#F27935' }}>
        {/*상단 navbar (header)*/}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
          <Link to="/" className='board-title'>JB-Board</Link>
          <FaIcons.FaSignInAlt className="sign-in-icon" />
        </div>
        {/*left side nav bar*/}
        <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSideBar}>
            <li className='navbar-toggle'>
              <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
