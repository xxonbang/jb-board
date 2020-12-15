import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import SignInModal from './sign-in-modal/sign-in-modal';

function Navbar() {

  // 'findDOMNode is deprecated in StrictMode.' error 제거 목적의 createRef 활용
  // const wrapper = createRef();

  const [sideBar, setSideBar] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const showSideBar = () => setSideBar(!sideBar)

  const openSignInModal = () => { setModalOpen(true); }
  const closeSignInModal = () => { setModalOpen(false); }

  return (
    <>
      {/*dimmed page 부분*/}
      <div className={sideBar ? 'dimmed-page' : ''} onClick={showSideBar}></div>
      <IconContext.Provider value={{ color: '#F27935' }}>
        {/*상단 navbar (header)*/}
        <div className="navbar">
          <div className="navbar-left-side">
            <div className="menu-bars">
              <Link to="#">
                <FaIcons.FaBars onClick={showSideBar} />
              </Link>
            </div>
            <div className='board-title'>
              <Link to="/">JB-Board</Link>
            </div>
          </div>
          <div className="sign-in" onClick={openSignInModal}>
            <FaIcons.FaSignInAlt className="sign-in-icon" />
          </div>
        </div>
        {/*left side nav bar*/}
        <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSideBar}>
            <li className='navbar-toggle'>
              <Link to="#" className='side-nav-close'>
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
      <SignInModal isModalOpen={isModalOpen} close={closeSignInModal} />
    </>
  )
}

export default Navbar
