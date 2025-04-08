import { Link } from "react-router-dom"

const Card = ({ url, title, subtitle, chapters,id }) => {
  return (
    <Link to={`/book-details/${id}`} state={{title,subtitle,chapters,id}} className="text-decoration-none ">
      <div className="card bg-imp border border-0 px-4 px-md-2 pe-lg-5">
        <img src={url} className="bg-imp card-clickable rounded-4" alt="..." />
        <div className="card-body h-25 text-center">
          <p className='text-capitalizes text-color-blue fs-5'>{title}<br />
            <span className='text-white'>
              {subtitle}
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}
export default Card