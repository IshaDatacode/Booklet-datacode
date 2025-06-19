import { Link, useParams } from "react-router-dom";
import Image2 from "../../assets/images/image2.png"
import { useSelector } from "react-redux";
import ProgressBar from "./ProgessBar";
import { useState, useEffect } from "react";
import { addPercentage } from "../../reducer/Book/bookSlice";
import { useDispatch } from "react-redux";

const ContinueCard = ({ NormalPage }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  let book = books.find((data) => data.id === parseInt(id));
  if (NormalPage) {
    const NormalBook = books.find((data) => data.chapterDetails.some(e => e.status === "Pending"));
    book = NormalBook;
  }
  useEffect(() => {
    if (book) {
      const chapterLength = book.chapterDetails.length;
      const completelength = book.chapterDetails.filter(data => data.status === "Complete").length;
      const percentage = chapterLength > 0 ? (completelength / chapterLength) * 100 : 0;
      dispatch(addPercentage({ book, percentage }))
    }
  },[book])

  return (
    <Link to={`/book-details/${book.id}`} className="text-decoration-none text-white">
    <div className="position-relative pe-3 ">
      <div className="img-container ">
        <div className="d-flex justify-content-center align-items-center ">
          <ProgressBar percentage={book.percentage} />
          <img className="rounded-4 card-clickable position-relative" src={Image2} height={250} width={210} />
        </div>
      </div>
      <p className='continue-card-text fw-bolder pt-4 pe-2'>{NormalPage ? book.bookTitle : ""}</p>
    </div>
    </Link>
  )
}
export default ContinueCard