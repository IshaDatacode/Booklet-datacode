import { useSelector} from 'react-redux'

import Image1 from "../../assets/images/image1.png"
import Card from '../../components/ui/Card'
import Image3 from "../../assets/images/image3.png"
import Image4 from "../../assets/images/image4.png"
import Rectangle6 from "../../assets/images/Rectangle6.png"
import Rectangle7 from "../../assets/images/Rectangle7.png"
import ContinueCard from '../../components/ui/ContinueCard'
import { useOutletContext } from 'react-router-dom'

{/*const cardJson = [
  {
    "url": Image3,
    "title": "The Flash, Vol.1",
    "subtitle": "Joshua Williamson",
  },
  {
    "url": Image4,
    "title": "Titans, Vol.2",
    "subtitle": "Andrew Robinson",
  }, {
    "url": Rectangle6,
    "title": "Harley Quinn, Vol.1",
    "subtitle": "Jimmy Palmiotti",
  }, {
    "url": Rectangle7,
    "title": "Suicide Squad #8",
    "subtitle": "Tom Taylor",
  }
];*/}

const Dashboard = () => {
  const books= useSelector(state=>state.books)
  const query= useOutletContext();
  const searchBook = books.filter((data) =>
    data.bookTitle.toLowerCase().includes(query) ||
    data.bookAuthor.includes(query) ||
    data.bookDescription.includes(query)
  );
  
 
  return (
    <div id='main' className='main-container scrollbar px-3 px-lg-5 pb-5'>
      <div className='container'>
        <div className='row ' >
          <div className='col-md-8 p-0'>
            <div className="homeImage" >
              <div className="card bg-imp z-1 border border-0 text-white position-relative h-100 w-auto" >
                <img src={Image1} className="card-img  z-1  h-100 position-absolute w-100 rounded-3 "  alt="..." />
                <div className='w-100 h-100  position-absolute bottom-0 p-4 d-flex flex-column gap-col-3'>
                  <h6 className="top-55 z-1 position-absolute fw-lighter  fs-5" >Frank Miller</h6>
                  <h2 className='top-65 fs-2vmax fw-bolder z-1 text-start position-absolute pt-2 pb-0 pe-lg-5' >Batman: <br /> The dark Knight</h2>
                  <button className='bg-color-blue btn btn-primary top-73 left-60 fs-1vmax border-0 text-white px-3 px-lg-4 px-xlg-5 py-2 z-1 position-absolute rounded-pill fw-bold'>Read Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 continue-text-align continue-card '>
            <h3 className="continue-text fw-bolder">Continue reading</h3>
            <ContinueCard text="Kobra Kai: Ultimate" />
          </div>
        </div>
      </div>
      <div className=''>
        <h3 className='fs-29px text-center text-lg-start fw-bolder py-4'>Top Rated Comics</h3>
        <div className="container ps-0">
          <div className="row  ">
            {
              searchBook.map((data) => (
                <div className="col-sm-6 col-md-4 col-lg-3 custom-col-4 text-center" key={data.id}>
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
export default Dashboard