const Card2 = ({ url, title, subtitle }) => {
  return (
    <div className="card card-clickable  border-0 d-flex h-auto  p-2 px-3  justify-content-center bg-color-grey" >
      <img src={url} class=" rounded-4 bg-color-grey" alt="..." />
      <div className="card-body h-auto text-center">
        <h6 className='text-white fs-6'>{title}<br />
          <span className='text-color-blue fs-6' >
            {subtitle}
          </span>
        </h6>
      </div>
    </div>
  )
}
export default Card2