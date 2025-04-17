import { Link, useNavigate } from "react-router-dom"
import { FaEllipsisH } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

const Card = ({ url, title, subtitle, chapters, id }) => {
  const navigate = useNavigate();
  const [editDisplay, setEditDisplay] = useState(false);
  const handleEditClick = (e) => {
    e.stopPropagation(); // prevent card click
    e.preventDefault();  // prevent outer Link navigation
    navigate(`/editBook/${id}`);
  };
  const handleEllipse = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setEditDisplay(pre => !pre);
  }
  return (
    <Link to={`/book-details/${id}`} className="text-decoration-none">
      <div className="card bg-imp border border-0 p-2 me-lg-5 card-clickable  ">
        <div className="dropdown ">
          <span onClick={handleEllipse} className="btn ellipse-1 fs-4 rounded-2 bg-imp px-2 py-0 mt-0 opacity-75 text-white position-absolute top-0 end-0 " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
            <FaEllipsisH />
          </span>
          {editDisplay && <ul className="dropdown-menu show position-absolute border end-0 m-25 rounded-2 bg-imp text-white opacity-75 p-2" >
            <li onClick={handleEditClick} className=" p-0 m-0"> <AiFillEdit className="mb-1 me-1" />Edit</li>
          </ul>}
        </div>
        <img src={url} className="bg-imp rounded-4" alt="Book Cover" />
        <div className="card-body h-25 text-center">
          <p className="text-capitalize text-color-blue fs-5">
            {title}
            <br />
            <span className="text-white">{subtitle}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
