import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { useState } from "react";

import { changeStatus } from "../../reducer/Book/bookSlice";

const Status = ({ statusChapterId }) => {
    const [statusOpen, setStatusOpen] = useState(true)
    const { id } = useParams();
    const chapterId = statusChapterId;
    const dispatch = useDispatch();
    const statusComplete = () => {
        dispatch(changeStatus({ id, chapterId }));
        setStatusOpen(false);
    }

    return (
        <>
            {statusOpen ?
                <div className="d-flex w-100 h-100 align-items-center justify-content-center top-0 start-0 position-fixed ">
                    <div className="w-100 h-100 start-0 top-0  position-fixed z-12 bg-imp opacity-75" onClick={() => setStatusOpen(false)}></div>
                    <div className=" bg-popup position-absolute z-3 rounded-3 mt-2 fs-19px border text-white status-popup p-5">
                        Do you want to complete pending status of chapter?<br />
                        <button className="btn bg-color-blue m-2" onClick={statusComplete}>Yes</button>
                        <button className="btn bg-color-blue m-2" onClick={() => setStatusOpen(false)}>No</button>
                    </div>
                </div> : ""
            }
        </>
    )
}
export default Status;