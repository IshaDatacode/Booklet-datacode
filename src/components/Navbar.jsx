import { BsJustify } from 'react-icons/bs'

import Bell from "../assets/images/Bell.png"
import Ellipse from "../assets/images/Ellipse1.png"
import search from "../assets/images/search.png"

const Navbar = ({ openSidebar, dropdown, setDropdown }) => {
  return (
    <header  className='header'>
      <div onClick={openSidebar} className='menu-icon d-inline fs-2 d-lg-none text-white'>
        <BsJustify className="icon"/>
      </div>
      <div className='col-8 header-left'>
        <div className="input-group">
          <input type="text" className="bg-imp form-control text-white border border-end-0 " aria-label="" />
          <span className="bg-imp input-group-text border border-start-0"><img src={search} height={20} width={20} /></span>
        </div>
      </div>
      <div className='d-block positon-relative'>
        <div className='header-right gap-2 d-flex justify-content-center align-items-center'>
          <span className='px-lg-3'> <img src={Bell} className='h-4vmin' /> </span>
          <span className='px-lg-3 d-block ' onClick={() => setDropdown(!dropdown)}> <img src={Ellipse} className='ellipse h-7vmin' /> </span>
        </div>
      </div>
    </header>
  )
}
export default Navbar