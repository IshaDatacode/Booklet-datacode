import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import Logo from '../../assets/images/logo-text.png'
import { addChapters, editChapter } from '../../reducer/Book/bookSlice';

const AddChapters = ({ setOpenChapter, option, chapterId }) => {
    const [chapterName, setChapterName] = useState("");
    const [chapterNumber, setChapterNumber] = useState("");
    const [targetDate, setTargetDate] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams();
    const BookId = parseInt(id);
    const handleAddSubmit = (e) => {
        e.preventDefault();
        if (chapterName && chapterNumber && targetDate) {
            dispatch(addChapters({ id, chapterName, chapterNumber: parseInt(chapterNumber), targetDate }))
            setChapterName("");
            setChapterNumber("");
            alert("Chapter is added");
            setOpenChapter(false);
        }
        else {
            alert("please fill all the fields")
        }

    }
    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(editChapter({ id: parseInt(id), chapterId, chapterName, chapterNumber: parseInt(chapterNumber), targetDate }));
        setChapterName("");
        setChapterNumber("");
        alert("Chapter is edited");
        setOpenChapter(false);
    }
    const books = useSelector(state => state.books);
    const book = books.find((data) => data.id === BookId);
    const chapter = book.chapterDetails.find((data) => data.chapterId === chapterId);
    useEffect(() => {
        if (option === "Edit Chapter") {
            setChapterName(chapter.chapterName);
            setChapterNumber(chapter.chapterNumber);
            setTargetDate(chapter.targetDate);
        }
    }, [])

    return (
        <div>
            <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 z-3 d-flex justify-content-center align-items-center" onClick={() => setOpenChapter(false)}></div>
            <div className="position-fixed m-5 z-3 top-0 create-book h-85 rounded-4 bg-color-grey d-flex flex-column align-items-center  gap-3 ">
                <div className='w-100 text-danger text-end p-2 fs-5 fw-bold ' onClick={() => setOpenChapter(false)}>X</div>
                <div><img src={Logo} className='icon' /></div>
                <div className='fs-3'>{option}</div>
                <form className='w-75' onSubmit={option === "Edit Chapter" ? handleEditSubmit : handleAddSubmit}>
                    <div className="form-group py-2">
                        <label htmlFor="chapterName" className='fs-19px py-1 fw-normal'>Chapter Name</label>
                        <input type="text" value={chapterName} onChange={(e) => setChapterName(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2 " id="chapterName" aria-describedby="Book" placeholder="" />
                    </div>
                    <div className="form-group py-2">
                        <label htmlFor="chapterNumber" className='fs-19px py-1 fw-normal'>Chapter Number</label>
                        <input type="Number" value={chapterNumber} onChange={(e) => setChapterNumber(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2" id="chapterNumber" placeholder="" />
                    </div>
                    <div className="form-group py-2 text-white">
                        <label htmlFor="targetDate" className='fs-19px py-1 fw-normal text-white'>Target Date</label>
                        <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="form-control bg-grey text-white p-2" id="targetDate" placeholder="" />
                    </div>
                    <div className='text-center py-3'>
                        <button type="submit" className="btn btn-primary bg-color-blue border rounded-5 fs-25px border-0 text-center py-2 px-4 px-md-5 ">{option}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddChapters;