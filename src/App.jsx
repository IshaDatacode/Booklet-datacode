import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './App.scss'
import './assets/scss/style.scss'

import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
   const [openSidebarToggle,setOpenSidebarToggle]=useState(false);
   const openSidebar=()=>{
    setOpenSidebarToggle(prev=> !prev);
   }
  return (
    <div className='body'>
    <div className='grid-container' >
       <Navbar openSidebar={openSidebar}/>
       <Dashboard openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
       <Outlet/>
     </div>
    </div>
      
  )
}

export default App