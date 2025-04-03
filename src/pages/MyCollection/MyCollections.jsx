import { useSelector } from 'react-redux'

import ContinueCard from '../../components/ui/ContinueCard'
import Image2 from "../../assets/images/image2.png"
import Card from '../../components/ui/Card'
import Image3 from "../../assets/images/image3.png"
import Image4 from "../../assets/images/image4.png"
import Rectangle6 from "../../assets/images/Rectangle6.png"
import Rectangle7 from "../../assets/images/Rectangle7.png"
import Card2 from '../../components/ui/Card2'

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
  return (
    <div id='main' className=' main-container px-3 px-sm-5 pt-0'>
      <div className=' container'>
        <div className='row gap '>
          <div className=' bg-color-grey col-md-8  rounded-4 text-center p-3 mt-4' >
            <h3 className='fs-29px complete-text-align fs-3 fw-bolder ps-4 pb-3 ' >Completed Read</h3>
            <div className='bg-color-grey d-flex flex-wrap h-auto justify-content-center align-items-center gap-3'  >
              <Card2 url={Image2} title="Kobra Kai: Ultimate" subtitle="12 Feb 2025" />
              <Card2 url={Image2} title="Kobra Kai: Ultimate" subtitle="12 Feb 2025" />
              <Card2 url={Image2} title="Kobra Kai: Ultimate" subtitle="12 Feb 2025" />
            </div>
          </div>
          <div className='col-md-4  continue-card continue-text-align' >
            <h3 className=" continue-text  fw-bolder ">Continue reading</h3>
            <ContinueCard text="Kobra Kai: Ultimate"/>
          </div>
        </div>
      </div>
      <div>
        <h3 className='fs-29px text-center text-lg-start h-auto w-auto fw-bolder py-4'>Todo Read</h3>
        <div className="container h-auto p-0">
          <div className="row h-auto p-0">
            {
               books.map((data,index)=>(
                <div className="h-auto col-sm-6 col-md-4 custom-col-4 col-lg-3 text-center" key={data.id}>
                <Card url={Image4} title={data.bookTitle} subtitle={data.bookAuthor} chapters={data.noOfChapters} />
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