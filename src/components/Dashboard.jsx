import React, { useState } from 'react'
import VectorIcon from "../assets/Vector.png"
import Fav from "../assets/Fav.png"
import Book from "../assets/Book.png"
import Setting from "../assets/Setting.png"
import Arrow from "../assets/Arrow.png"
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo-text.png"



function Dashboard({ openSidebarToggle, openSidebar }) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title '>
        <img src={Logo} className='icon' />
        <span onClick={openSidebar} className='d-md-inline d-lg-none text-danger'>X</span>
      </div>
      <ul className="sidebar-list pt-3">
        <li className="sidebar-list-item">
          <NavLink to='/' className={({ isActive }) => `Nav ${isActive ? "bg-color-blue" : ""}`}>
            <img className='icon me-2' src={VectorIcon} height={20} width={20} />
            Dashboard
          </NavLink>
        </li>
        <li className="sidebar-list-item  ">
          <NavLink to='/myCollections' className={({ isActive }) => `Nav ${isActive ? "bg-color-blue" : ""}`}>
            <img className='icon me-2' src={Book} height={20} width={20} />
            My Collections
          </NavLink>
        </li>
        <li className="sidebar-list-item ">
          <NavLink to='/favourites' className={({ isActive }) => `Nav ${isActive ? "bg-color-blue" : ""}`}>
            <img className='icon me-2' src={Fav} height={20} width={20} />
            Favourites
          </NavLink>
        </li>
      </ul>
      <div className='setting d-flex p-4 align-items-end ps-5' >
        <div className='text-white'>
          <div className='text-white fs-4 py-2'> <img src={Setting} className='me-2' />Settings</div>
          <div className='text-white  fs-4 py-2'  ><img src={Arrow} className='me-2' />Log Out</div>
        </div>

      </div>

    </aside>
  )
}

export default Dashboard


