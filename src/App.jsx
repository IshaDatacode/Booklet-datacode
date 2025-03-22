import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './assets/scss/style.scss'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'



const App = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const openSidebar = () => {
    setOpenSidebarToggle(prev => !prev);
  }

  return (
    <div className='body'>
      <div className='grid-container' >
        <Navbar openSidebar={openSidebar} />
        <SideNav openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default App