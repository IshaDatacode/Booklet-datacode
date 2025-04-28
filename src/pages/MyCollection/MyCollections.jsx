import { useSelector } from 'react-redux'

import ContinueCard from '../../components/ui/ContinueCard'
import Image2 from "../../assets/images/image2.png"
import Card from '../../components/ui/Card'
import Image3 from "../../assets/images/image3.png"
import Image4 from "../../assets/images/image4.png"
import Rectangle6 from "../../assets/images/Rectangle6.png"
import Rectangle7 from "../../assets/images/Rectangle7.png"
import Card2 from '../../components/ui/Card2'
import { useOutletContext, useParams } from 'react-router-dom'

const cardJson=[
  {
    "url":Image3,
    "title": "The Flash, Vol.1",
    "subtitle":"Joshua Williamson",
  },
  {
    "url":Image4,
    "title": "Titans, Vol.2",
    "subtitle":"Andrew Robinson",
  }, 
  {
    "url":Rectangle6,
    "title": "Harley Quinn, Vol.1",
    "subtitle":"Jimmy Palmiotti",
  }, 
  {
    "url":Rectangle7,
    "title": "Suicide Squad #8",
    "subtitle":"Tom Taylor",
  }
];

const MyCollections = () => {
  const books = useSelector(state=>state.books)
  const CompleteBooks = books.filter((book) =>
    book.chapterDetails.every((ch) => ch.status === "Complete")
  );
  const query=useOutletContext();
  const searchBook=books.filter((data)=>data.bookTitle.includes(query)||data.bookAuthor.includes(query)||data.bookDescription.includes(query))
  return (
    <div id='main' className=' main-container px-3 px-sm-5 pt-0'>
      <div className='container'>
        <div className='row gap'>
          <div className='bg-color-grey col-md-8 rounded-4 text-center p-3 mt-4' >
            <h3 className='fs-29px complete-text-align fs-3 fw-bolder ps-4 pb-2 ' >Completed Read</h3>
            <div className='row overflow-x-auto invisible-scrollbar bg-color-grey d-flex  justify-content-start  gap-3'>
              {  CompleteBooks.map((data)=>(
                 <div className="col-12 col-md-6 col-lg-4 text-center" key={data.id}>
                   <Card2 url={Image2} title={data.bookTitle} subtitle={new Date(data.creationDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })} />
                </div>
              ))  
              }
             
            </div>
          </div>
          <div className='col-md-4  continue-card continue-text-align' >
            <h3 className=" continue-text  fw-bolder ">Continue reading</h3>
            <ContinueCard text="Kobra Kai: Ultimate"/>
          </div>
        </div>
      </div>
      <div>
        <h3 className='fs-29px text-center text-lg-start h-auto w-auto fw-bolder pt-5 pb-3'>Todo Read</h3>
        <div className="container  p-0 ">
          <div className="row  p-0 ">
            {
               searchBook.map((data)=>(
                <div className="col-sm-6 col-md-4 custom-col-4 col-lg-3 text-center" key={data.id}>
                <Card url={Image4} title={data.bookTitle} subtitle={data.bookAuthor} id={data.id} chapters={data.noOfChapters} />
              </div>
              ))
            } 
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyCollections 