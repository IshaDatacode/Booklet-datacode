import { NavLink, Link } from 'react-router-dom'

import VectorIcon from "../assets/images/Vector.png"
import Fav from "../assets/images/Fav.png"
import Book from "../assets/images/Book.png"
import Setting from "../assets/images/Setting.png"
import Arrow from "../assets/images/Arrow.png"
import Logo from "../assets/images/logo-text.png"

const SideNav = ({ openSidebarToggle, openSidebar }) => {
  return (
    <div>
      {openSidebarToggle && (
        <div
          className="w-100 h-100 position-fixed z-2 top-0 start-0 bg-imp opacity-25"
          onClick={openSidebar}
        ></div>
      )}
      <aside id='sidebar' className={`${openSidebarToggle ? "sidebar-responsive" : ""} position-fixed z-3 top-0 start-0`}>
        <div className='sidebar-title h-10 m-0  '>
          <span onClick={openSidebar} className='d-lg-none text-danger w-100 p-2 fw-bold text-end'>X</span>
          <div><img src={Logo} className='icon pt-lg-2'/></div>
        </div>
        <ul className="sidebar-list  h-40 pt-5 m-0">
          <li className="sidebar-list-item">
            <NavLink to='/' className={({ isActive }) => `fs-4 Nav ${isActive ? "bg-color-blue" : ""}`}>
              <img className='icon me-2' src={VectorIcon} height={20} width={20} />
              Dashboard
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <NavLink to='/myCollections' className={({ isActive }) => `fs-4 Nav ${isActive ? "bg-color-blue" : ""}`}>
              <img className='icon me-2' src={Book} height={20} width={20} />
              My Collections
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <NavLink to='/favourites' className={({ isActive }) => `fs-4 Nav ${isActive ? "bg-color-blue" : ""}`}>
              <img className='icon me-2' src={Fav} height={20} width={20} />
              Favourites
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <NavLink to='/createBook' className={({ isActive }) => `fs-4 Nav ${isActive ? "bg-color-blue" : ""}`}>
              <img className='icon me-2' src={Book} height={20} width={20} />
              Create Book
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <NavLink to='/library' className={({ isActive }) => `fs-4 Nav ${isActive ? "bg-color-blue" : ""}`}>
              <img className='icon me-2' src={Book} height={20} width={20} />
              Library
            </NavLink>
          </li>
        </ul>
        <div className='h-50 p-0 m-0  pb-4 d-flex align-items-end  ' >
          <div className='text-white'>
            <div className='Nav text-white fs-4 py-2'> <img src={Setting} className=' me-2' />Settings</div>
            <Link to='/login' className='m-0 p-0 text-decoration-none'><div className='Nav text-white fs-4 py-2'> <img src={Arrow} className=' me-2' />Log Out</div></Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
export default SideNav