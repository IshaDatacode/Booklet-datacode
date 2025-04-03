import { useState } from 'react';
import {useDispatch} from 'react-redux'

import Logo from '../../assets/images/logo-text.png'
import { addBook } from '../../reducer/Book/bookSlice';

const CreateBook = () => {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [noOfChapters, setNoOfChapter] = useState("");
    const dispatch=useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(bookTitle && bookAuthor && noOfChapters){
            dispatch(addBook({bookTitle , bookAuthor , noOfChapters}))
        }
       
        setBookTitle("");
        setBookAuthor("");
        setNoOfChapter("");
    }

    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center ">
            <div className="create-book h-85 rounded-4 bg-color-grey d-flex flex-column align-items-center justify-content-center gap-3 ">
                <div><img src={Logo} className='icon' /></div>
                <div className='fs-3'>Create a Book</div>
                <form className='p-3 w-75 ' onSubmit={handleSubmit}>
                    <div className="form-group py-2 ">
                        <label htmlFor="bookTitle" className=''>Book Title</label>
                        <input type="text" value={bookTitle} onChange={(e) => setBookTitle(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2" id="bookTitle" aria-describedby="Book" placeholder="" />
                    </div>
                    <div className="form-group py-2">
                        <label htmlFor="bookAuther">Book Auther</label>
                        <input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2" id="bookAuther" placeholder="" />
                    </div>
                    <div className="form-group py-2">
                        <label htmlFor="NoOfChapter">No of Chapters</label>
                        <input type="number" value={noOfChapters} onChange={(e) => setNoOfChapter(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2" id="NoOfChapter" />
                    </div>
                    <div className='text-center  py-3'>
                        <button type="submit" className="btn btn-primary bg-color-blue border rounded-5 fs-25px border-0 text-center py-2 px-4 px-md-5 ">Create Book</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateBook;