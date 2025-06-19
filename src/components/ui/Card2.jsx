import { Link } from "react-router-dom"

const Card2 = ({ url, bookTitle, creationDate,id }) => {
  return (
    <Link to={`/book-details/${id}`} className="text-decoration-none ">
    <div className="card card-clickable  border-0 d-flex p-0 px-3  justify-content-center bg-color-grey" >
      <img src={url} class="rounded-4 bg-color-grey text-center" alt="..." />
      <div className="card-body h-auto text-center">
        <h6 className='text-white fs-6'>{bookTitle}<br />
          <span className='text-color-blue fs-6' >
            {creationDate}
          </span>
        </h6>
      </div>
    </div>
    </Link>
  )
}
export default Card2