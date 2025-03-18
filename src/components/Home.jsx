import React from 'react'
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import Card from './Card'
import Image3 from "../assets/image3.png"
import Image4 from "../assets/image4.png"
import Rectangle6 from "../assets/Rectangle6.png"
import Rectangle7 from "../assets/Rectangle7.png"
import ContinueCard from './ContinueCard'
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
  
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
    }, {
      "url":Rectangle6,
      "title": "Harley Quinn, Vol.1",
      "subtitle":"Jimmy Palmiotti",
    }, {
      "url":Rectangle7,
      "title": "Suicide Squad #8",
      "subtitle":"Tom Taylor",
    }
  ];
  
  return (
    <div id='main' className='main-container px-5 pb-5 pt-0 '>
      <div className='container'>
        <div className='row ' >
          <div className='col-md-8  p-0'>
            <div className="homeImage w-auto  " >
              <div className="card  z-1 border border-0 text-white  position-relative h-100 w-auto     " >
                <img src={Image1} className="card-img  z-1  h-100 position-absolute w-100 rounded-3  " alt="..." />
                <div className='w-100 h-100  position-absolute bottom-0 p-4 d-flex flex-column gap-col-3'>
                  <h6 className="top-55 z-1 position-absolute fw-lighter  fs-5 " >Frank Miller</h6>
                  <h2 className='top-65 fs-2vmax fw-bolder z-1 text-start position-absolute pt-2 pb-0 pe-lg-5' >Batman: <br /> The dark Knight</h2>
                  <Link to="/details"><button className='bg-color-blue top-73 left-60 fs-1vmax border-0 text-white px-3 px-lg-5 py-2 z-1 position-absolute rounded-pill fw-bold'>Read Now</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center p-0 text-lg-end'>
            <h3 className=" continue-text fw-bolder">Continue reading</h3>
            <ContinueCard text="Kobra Kai: Ultimate" progress={75} />
          </div>
        </div>
      </div>
      <div className=''>
        <h3 className='fs-29px text-center text-md-start h-auto w-auto fw-bolder py-4'>Top Rated Comics</h3>
        <div className="container ps-0 h-auto">
          <div className="row h-auto ">
            {
              cardJson.map((data,index)=>(
                <div className="h-auto col-sm-6 col-md-4 col-lg-3 " key={index}>
                <Card url={data.url} title={data.title} subtitle={data.subtitle} />
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home