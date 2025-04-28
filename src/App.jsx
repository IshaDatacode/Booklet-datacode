import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './assets/scss/style.scss'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import Popup from './components/ui/Popup'

const App = () => {
  const [dropdown, setDropdown] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const openSidebar = () => {
    setOpenSidebarToggle(prev => !prev);
  }
  const [query,setQuery]=useState('');

  return (
    <div className='body'>
      <div className='grid-container' >
        <Navbar openSidebar={openSidebar} dropdown={dropdown} setDropdown={setDropdown} setQuery={setQuery}/>
        <SideNav openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
        {dropdown?<Popup dropdown={dropdown} setDropdown={setDropdown}/>:""}
        <Outlet context={query}/>
      </div>
    </div>
  )
}

export default App