const Popup = ({dropdown}) => {
    return(
        <div>
        { dropdown ?
        <div className="z-3 w-17 popup h-34 bg-popup rounded-4 position-absolute">
            <div className="p-2   text-center  fw-semibold">Akshay Mandliya</div>
            <hr className=" bg-white p-0 m-0"/>
            <div className="p-2 d-flex justify-content-around">
                <span className="fw-normal">Status</span>
                <span className="bg-active-green fw-bold">Active</span>
            </div>
        </div>:" "
        }
        </div>
    )
}
export default Popup;