import Image2 from "../assets/image2.png"
function ContinueCard({ text, progress }) {
  return (
    <div className="h-auto position-relative ">
      <img className="rounded-4 position-relative" src={Image2} height={250} width={220} />
      <p className='fw-bolder fs-4 pt-4'>{text}</p>
    </div>
  )
}
export default ContinueCard