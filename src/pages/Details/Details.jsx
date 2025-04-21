import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ContinueCard from '../../components/ui/ContinueCard'
import Table from '../../components/ui/Table'
import AddChapters from '../../components/ui/AddChapters'

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const book = useSelector((state) =>
    (state.books.find((data) => data.id === parseInt(id))));
  const [noOfdays,setNoOfDays]=useState(0);

  useEffect(() => {
    if (!book) {
      navigate("/");
    }
    if (book.chapterDetails.length > 0) {
      const startDateStr=book.chapterDetails[0].targetDate;
      const startDate=new Date(startDateStr).getTime();
      const l=book.chapterDetails.length;
      const lastDateStr=book.chapterDetails[l-1].targetDate;
      const lastDate=new Date(lastDateStr).getTime();
      const diff=lastDate-startDate;
      const days=Math.floor(diff/(1000*60*60*24));
      setNoOfDays(days);
    }   
  }, [book]);
  
  if (!book) return null;
  const [openAddChapters, setOpenAddChapters] = useState(false);

  return (
    <div id="main" className='main-container invisible-scrollbar px-3 px-sm-5 pb-5 pt-0'>
      <div className='container m-0'>
        <div className='row gap'>
          <div className='col-md-8 p-0 text-container'>
            <h1 className='fs-74px text-start  fw-bolder fw-bold text-capitalize'>{book.bookTitle}:
              {book.bookAuthor}</h1>
            <p className='text-start py-3 fw-light fs-4'>
              A book description is a brief summary of a book's plot, characters, and themes.
              It helps readers get a sense of what the book is about.
              Book descriptions are often found on the back cover of the book, or on retailer websites.
            </p>
          </div>
          <div className='col-md-4 d-block align-items-center text-start  text-lg-end'>
            <div className=' ps-lg-3 ps-xl-3 ms-xl-3 text-start  '>
              <h3 className='fs-29px fw-bold ps-xl-5  ms-xl-5' >Book Progress</h3>
              <h6 className=' fs-19px fw-bold ps-xl-5   ms-xl-5' >Started:<span className='text-color-blue'>5 days ago</span></h6>
            </div>
            <div className="detail-container">
            <ContinueCard />
            </div>
          </div>
        </div>
      </div>
      <div className='h-50  my-3'>
        <h5 className=' text-start fw-bold fs-3 py-3 '>Reading Plan <span className='btn ms-4 fs-5 text-white bg-color-blue rounded-2' onClick={() => setOpenAddChapters(true)}>Add Chapters</span>
          {openAddChapters ? <AddChapters setOpenChapter={setOpenAddChapters} option="Add Chapters" /> : ""}
        </h5>
        <div className='h-auto w-auto container m-0 pb-4'>
          <div className='row'>
            <div className='col-md-5 col-md-2 p-0 fs-2 fw-bolder m-0'>Chapters:<span className='text-color-blue'> {String(book.chapterDetails.length).padStart(2,'0')} / {book.noOfChapters}</span></div>
            <div className='col-md-5 col-md-2 p-0 fs-2 fw-bolder m-0'>Days:<span className='text-color-blue'> {String(noOfdays).padStart(2,'0')}</span></div>
          </div>
        </div>
        <div className='h-auto w-auto'><Table /></div>
      </div>
    </div>
  )
}
export default Details