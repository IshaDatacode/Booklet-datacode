import React from 'react'
import ContinueCard from './ContinueCard'
import Table from './Table'

function Details() {
  return (
    <div id="main" className='main-container h-auto w-100 px-5 pb-5 pt-0'>
      <div className=' container h-auto w-100 '>
        <div className='row '>
          <div className='col-md-8 p-0 '>
            <h1 className='fs-74px text-start fw-bolder fw-bold'>Batman:
              <br />The Dark Knight</h1>
            <p className='text-start py-3 fw-light fs-4' >A book description is a brief summary of a book's plot, characters, and themes.
              It helps readers get a sense of what the book is about.
              Book descriptions are often found on the back cover of the book, or on retailer websites.
            </p>
          </div>
          <div className='col-md-4 d-block align-items-center text-start  text-lg-end '>
            <div className='h-auto ps-xl-3 ms-xl-3 text-start '>
              <h3 className='fs-29px fw-bold ps-xl-5 ms-xl-5' >Book Progress</h3>
              <h6 className=' fs-19px fw-bold ps-xl-5 ms-xl-5' >Started:<span className='text-color-blue'>5 days ago</span></h6>
            </div>
            <ContinueCard progress={75} />
          </div>
        </div>
      </div>
      <div className='h-50  my-3'>
        <h5 className=' text-start fw-bold fs-3 py-3'>Reading Plan</h5>
        <div className='h-auto w-auto container  pb-4 '   >
          <div className='row'>
            <div className='col-md-5 col-sm-2 p-0 fs-2 fw-bolder'>Chapters:<span className='text-color-blue'>20</span></div>
            <div className='col-md-5 col-sm-2 p-0 fs-2 fw-bolder '>Days:<span className='text-color-blue'>20</span></div>
          </div>
        </div>
        <div className='h-auto w-auto'> <Table /></div>
      </div>
    </div>
  )
}

export default Details