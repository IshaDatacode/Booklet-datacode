import { useParams } from "react-router-dom";
import Image2 from "../../assets/images/image2.png"
import { useSelector } from "react-redux";
import ProgressBar from "./ProgessBar";
import { useState,useEffect } from "react";

const ContinueCard = ({ text }) => {
  const {id}=useParams();
  const books=useSelector(state=>state.books);
  const book=books.find((data)=>data.id===parseInt(id));
  const [chapters,setChapter]=useState(0);
  const [countComplete,setCountComplete]=useState(0);
  useEffect(()=>{
    if(book){
      const chapterLength=book.chapterDetails.length;
      const completelength = book.chapterDetails.filter(data => data.status === "Complete").length;
      setChapter(chapterLength);
      setCountComplete(completelength);
    }
  },[book])
  const percentage=chapters>0 ? (countComplete/chapters)*100:0;

  return (
    <div className="position-relative pe-3 ">
      <div className="img-container ">
      <div className="d-flex justify-content-center align-items-center ">
      <ProgressBar percentage={percentage}/>
      <img className="rounded-4 card-clickable position-relative" src={Image2} height={250} width={210}/>
      </div>
      </div>
      <p className='continue-card-text fw-bolder pt-4 '>{text}</p>
    </div>
  )
}
export default ContinueCard