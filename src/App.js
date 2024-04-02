import React, { useState } from 'react'
import './App.css';

import { CiChat1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline  } from "react-icons/io5";
import { MdOutlineViewAgenda, MdOutlineDashboard, MdErrorOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import EnhancedTable from "./components/EnhancedTable";


document.getElementById("nav3").classList.add("active-nav");

const App = () => {

  const [activeNav, setActiveNav] = React.useState('nav3');

  return (
    <div className='container'>
      <div className='page'>
        {/* Sidebar Navigation */}
        <div className='sidebar'>

          {/* Profile */}
          <div className='profile'>
            <img src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" alt="user" width={48} height={48} className='user-image' />
            <div className='profile-info'>
              <div className='user-info'>
                <span className='username'>Anna George</span>
                <p className='bio'>Customer Operations</p>
              </div>
              <div className='profile-dropdown'>
                {/* Dropdown icon */}
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className='nav-menu'>
            <div className='nav-item' id='nav1'>
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </div>
            <div className='nav-item' id='nav2'>
              <MdOutlineViewAgenda />
              <span>Task</span>
            </div>
            <div className='nav-item'  id='nav3'>
              <FaRegUser />
              <span>Customers</span>
              <IoIosArrowForward className='right-arrow' />
            </div>
            <div class="dropdown">
              <div className='vertical-bar'></div>
              <div className='vertical-bar-active'></div>
              <div className='sub-menu'>
                <a href="#" className="sub-item">All</a>
                <a href="#" className="sub-item-active">Account Upgrade</a>
              </div>
            </div>
            <div className='nav-item' id='nav4'>
              <CiChat1 />
              <span>Chats</span>
            </div>
            <div className='nav-item'  id='nav5'>
              <MdErrorOutline />
              <span>Disputes</span>
            </div>
            <div className='nav-line'></div>
            <div className='nav-item'  id='nav6'>
              <IoSettingsOutline />
              <span>Settings</span>
            </div>
          </div>

        </div>
        <div className='customer-page'>
          {/* Dashboard */}
          <EnhancedTable />
        </div>
      </div>
    </div>
  )
}

export default App