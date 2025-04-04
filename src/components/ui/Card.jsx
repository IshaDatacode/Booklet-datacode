import { Link } from "react-router-dom"

const Card = ({ url, title, subtitle, chapters}) => {
  return (
    <div className="bg-imp card border border-0 px-4 px-md-2 pe-lg-5">
      <Link to='/login' state={{url}}><img src={url} className="bg-imp rounded-4" alt="..." /></Link>
      <div className="card-body h-25 text-center">
        <p className='text-color-blue fs-5'>{title}, <span>{chapters}</span><br/>
          <span className='text-white'>
            {subtitle} 
          </span>
        </p>
      </div>
    </div>
  )
}
export default Card