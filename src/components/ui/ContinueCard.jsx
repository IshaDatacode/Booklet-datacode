import Image2 from "../../assets/images/image2.png"

const ContinueCard = ({ text }) => {
  return (
    <div className=" position-relative pe-3  ">
      <img className="rounded-4 card-clickable position-relative text-center" src={Image2} height={250} width={210}/>
      <p className='continue-card-text fw-bolder pt-4  '>{text}</p>
    </div>
  )
}
export default ContinueCard