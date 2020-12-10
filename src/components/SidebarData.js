import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Humors',
    path: '/humor',
    icon: <AiIcons.AiOutlineSmile />,
    cName: 'nav-text'
  },
  {
    title: 'Society',
    path: '/society',
    icon: <BiIcons.BiNews />,
    cName: 'nav-text'
  }
]
