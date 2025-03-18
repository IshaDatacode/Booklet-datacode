import React from 'react'

function Card({ url, title, subtitle }) {
  return (
    <div className="bg-imp card border border-0 px-4 px-md-2 pe-lg-5">
      <img src={url} className="bg-imp rounded-4" alt="..." />
      <div className="card-body h-25 text-center">
        <p className='text-color-blue fs-5'>{title}<br />
          <span className='text-white'>
            {subtitle}
          </span>
        </p>
      </div>
    </div>

  )
}

export default Card