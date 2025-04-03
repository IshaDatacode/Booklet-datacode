import Image2 from "../../assets/images/image2.png"

const ContinueCard = ({ text }) => {
  return (
    <div className="h-auto position-relative  ">
      <img className="rounded-4 position-relative continue-img" src={Image2} height={250} />
      <p className='continue-card-text fw-bolder pt-4'>{text}</p>
    </div>
  )
}
export default ContinueCard