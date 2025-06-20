import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

import Logo from '../../assets/images/logo-text.png'
import { addBook, editBookDetails } from '../../reducer/Book/bookSlice';

const CreateBook = () => {
    const navigate = useNavigate();
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [noOfChapters, setNoOfChapter] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookImageUrl, setBookImageUrl] = useState(null);
    const dispatch = useDispatch();
    const handleCreateSubmit = (e) => {
        e.preventDefault();
        if (bookTitle && bookAuthor && noOfChapters) {
            dispatch(addBook({ bookTitle, bookAuthor, noOfChapters, bookDescription }))
            setBookTitle("");
            setBookAuthor("");
            setNoOfChapter("");
            setBookDescription("");
            alert("Book is created");
            navigate("/");
        }

    }
    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (bookTitle && bookAuthor && noOfChapters) {
            dispatch(editBookDetails({ id: parseInt(bookstatus), bookTitle, bookAuthor, noOfChapters, bookDescription }));
            setBookTitle("");
            setBookAuthor("");
            setNoOfChapter("");
            setBookDescription("");
            alert("Book details is edit");
            navigate("/");
        }
    }
    const { book, bookstatus } = useParams();
    const bookToEdit = useSelector((state) =>
        state.books.find((b) => b.id.toString() === bookstatus));

    const isEdit = book === "editBook" && bookstatus !== "New";

    useEffect(() => {
        if (isEdit && bookToEdit) {
            setBookTitle(bookToEdit.bookTitle);
            setBookAuthor(bookToEdit.bookAuthor);
            setNoOfChapter(bookToEdit.noOfChapters);
            setBookDescription(bookToEdit.bookDescription);
            setBookImageUrl(bookToEdit.ImageUrl);
        }
    }, [])

    return (
        <div>
            {isEdit ? <div className='start-0 top-0 vh-100 position-fixed z-1'><img src={bookImageUrl} className='start-0 top-0 vh-100 w-100 position-fixed ' /></div> : ""}
            <div className="vh-100 d-flex justify-content-center align-items-center ">
                <div className="create-book h-85 z-3 rounded-4 bg-color-grey d-flex flex-column align-items-center justify-content-center pt-2">
                    <div><img src={Logo} className='icon' /></div>
                    <div className='fs-3'>{book == "editBook" ? <span>Edit a Book</span> : <span>Create a Book</span>}</div>
                    <form className='p-3 w-75 ' onSubmit={book == "editBook" ? handleEditSubmit : handleCreateSubmit}>
                        <div className="form-group pb-2 ">
                            <label htmlFor="bookTitle" className='fs-19px py-1'>Book Title</label>
                            <input type="text" value={bookTitle} onChange={(e) => setBookTitle(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2 " id="bookTitle" aria-describedby="Book" placeholder="" />
                        </div>
                        <div className="form-group pb-2">
                            <label htmlFor="bookAuther" className='fs-19px py-1'>Book Auther</label>
                            <input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2" id="bookAuther" placeholder="" />
                        </div>
                        <div className="form-group pb-2">
                            <label htmlFor="NoOfChapter" className='fs-19px py-1'>No of Chapters</label>
                            <input type="number" value={noOfChapters} onChange={(e) => setNoOfChapter(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2" id="NoOfChapter" />
                        </div>
                        <div className="form-group pb-2">
                            <label htmlFor="bookDescription" className='fs-19px py-1'>Book Description</label>
                            <textarea type="text" value={bookDescription} onChange={(e) => setBookDescription(pre => pre = e.target.value)} className="form-control bg-grey text-white p-2" id="bookDescription" placeholder="" />
                        </div>
                        <div className='text-center pt-2'>
                            <button type="submit" className="btn btn-primary bg-color-blue border rounded-5 fs-25px border-0 text-center py-2 px-4 px-md-5 ">{book == "editBook" ? "Edit Book" : "Create Book"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateBook;