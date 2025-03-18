import React from 'react'

function Card2({ url, title, subtitle }) {
  return (
    <div className="card border border-0 px-4 bg-color-grey">
      <img src={url} class=" rounded-4 w-auto bg-color-grey" height={210} alt="..." />
      <div className="card-body h-auto">
        <h6 className='text-white fs-6'>{title}<br/>
          <span className='text-color-blue fs-6' >
            {subtitle}
          </span>
        </h6>
      </div>
    </div>
  )
}

export default Card2