import { NavLink } from 'react-router-dom'

import VectorIcon from "../assets/images/Vector.png"
import Fav from "../assets/images/Fav.png"
import Book from "../assets/images/Book.png"
import Setting from "../assets/images/Setting.png"
import Arrow from "../assets/images/Arrow.png"
import Logo from "../assets/images/logo-text.png"

const SideNav = ({ openSidebarToggle, openSidebar }) => {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
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
        <li className="sidebar-list-item">
          <NavLink to='/myCollections' className={({ isActive }) => `Nav ${isActive ? "bg-color-blue" : ""}`}>
            <img className='icon me-2' src={Book} height={20} width={20} />
            My Collections
          </NavLink>
        </li>
        <li className="sidebar-list-item">
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

export default SideNav