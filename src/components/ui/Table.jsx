import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import AddChapters from "./AddChapters";
import { removeChapter } from "../../reducer/Book/bookSlice";
import Status from "./Status";

{/*const TableData = [
  {
    "th": "Chapter1",
    "td1": "the life is shorting!!",
    "td2": "23 JAN 2025",
    "td3": "Complete"
  },
  {
    "th": "Chapter2",
    "td1": "the life is shorting!!",
    "td2": "24 JAN 2025",
    "td3": "Pending"
  },
  {
    "th": "Chapter3",
    "td1": "the life is shorting!!",
    "td2": "25 JAN 2025",
    "td3": "Pending"
  },
  {
    "th": "Chapter4",
    "td1": "the life is shorting!!",
    "td2": "26 JAN 2025",
    "td3": "Pending"
  },
]*/}

const Table = () => {
  const { id } = useParams();
  const [statusChapterId, setStatusChapterId] = useState("");
  const [openStatus, setOpenStatus] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === parseInt(id));
  const chapters = book.chapterDetails || [];
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [status, setStatus] = useState("Pending");
  const deleteChapter = (chapterId) => {
    dispatch(removeChapter({ id: parseInt(id), chapterId }));
  }
  const [chapterId, setChapterId] = useState("");
  const handleEdit = (chapterId) => {
    setOpenEditPopup(true);
    setChapterId(chapterId);
  }
  const handleStatus = (chapterid, chapterStatus) => {
    setStatusChapterId(chapterid);
    setOpenStatus(pre => !pre);
    setStatus(chapterStatus);
  }
  if (chapters.length === 0) {
    return (
      <div className="fs-3">
        " No Chapters... "
      </div>
    )
  }
  return (
    <div className='scrollbar h-auto w-100 ms-0 table-responsive'>
      {openEditPopup && <AddChapters setOpenChapter={setOpenEditPopup} option="Edit Chapter" chapterId={chapterId} />}
      {openStatus && status === "Pending" && <Status statusChapterId={statusChapterId} />}
      <table className="table align-middle table-borderless" style={{ backgroundColor: '#1D1D2A' }}>
        <tbody style={{ backgroundColor: '#1D1D2A' }}>
          {
            chapters.map((data) => (
              <tr key={data.chapterId}>
                <th className='cursor-pointer chapter fw-bold fs-4 ps-0 text-white text-start bg-imp d-flex' scope="row">Chapter{data.chapterNumber}<span className="d-flex gap-2 mx-2">
                  <button className="editbtn btn text-white" onClick={() => handleEdit(data.chapterId)}><AiFillEdit />Edit</button>
                  <button className="delete btn text-white" onClick={() => deleteChapter(data.chapterId)}><MdDelete />Delete</button></span></th>
                <td className='fw-normal fs-4 ps-0 text-white text-center text-capitalize bg-imp'>{data.chapterName}</td>
                <td className="color-blue fw-normal fs-4 ps-0 text-center bg-imp">{data.targetDate}</td>
                {data.status === "Pending" ? <td className="cursor-pointer color-yellow fw-normal fs-4 ps-0 text-center bg-imp " onClick={() => handleStatus(data.chapterId, data.status)}>{data.status}
                </td> : <td className="cursor-pointer color-green fw-normal fs-4 ps-0 text-center bg-imp " onClick={() => handleStatus(data.chapterId, data.status)}>{data.status}
                </td>}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default Table