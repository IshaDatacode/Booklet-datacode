import React from 'react'
import Bell from "../assets/Bell.png"
import Ellipse from "../assets/Ellipse1.png"
import search from "../assets/search.png"
import { BsJustify } from 'react-icons/bs'

function Navbar({ openSidebar }) {

  return (
    <header className='header  '>
      <div onClick={openSidebar} className='menu-icon  d-inline d-lg-none  text-white'>
        <BsJustify className="icon" />
      </div>
      <div className='w-65 header-left'>
        <div className="input-group">
          <input type="text" className="bg-imp form-control text-white border border-end-0 "  aria-label="Dollar amount (with dot and two decimal places)" />
          <span className="bg-imp input-group-text border border-start-0"><img src={search} height={20} width={20} /></span>
        </div>
      </div>
      <div className='header-right'>
        <span className='px-lg-3'> <img src={Bell} className='h-4vmin'/> </span>
        <span className='px-lg-3' > <img src={Ellipse} className='h-7vmin'/> </span>
      </div>
    </header>
  )
}
export default Navbar