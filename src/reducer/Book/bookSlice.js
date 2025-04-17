import { createSlice, nanoid } from '@reduxjs/toolkit'
// random book id generartion //
const randomId = () => {
    const random = Math.floor(Math.random() * 500000);
    return random;
}
// remove exceed characters from book title //
const truncate = (str) => {
    if (str.length > 20) {
        str.slice(0, 20);
        str += "..."

    }
    return str;
}

const initialState = {
    books: [{ id: randomId(), bookTitle: "Titans, Vol. 2", bookAuthor: "Andrew Robinson", noOfChapters: "20", creationDate: Date.now(), chapterDetails: [] }]
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const book = {
                id: randomId(),
                bookTitle: truncate(action.payload.bookTitle),
                bookAuthor: action.payload.bookAuthor,
                noOfChapters: action.payload.noOfChapters,
                creationDate: Date.now(),
                chapterDetails: []
            }
            state.books.push(book);
        },
        editBookDetails: (state, action) => {
            const { id, bookTitle, bookAuthor, noOfChapters } = action.payload;
            const book = state.books.find((data) => data.id === id);
            if (book) {
                book.bookTitle = truncate(bookTitle);
                book.bookAuthor = bookAuthor;
                book.noOfChapters = noOfChapters;
            }
        },
        addChapters: (state, action) => {
            const { id, chapterName, chapterNumber, targetDate } = action.payload;
            const book = state.books.find((data) => data.id == id);
            if (book) {
                const chapter = {
                    chapterId: nanoid(),
                    chapterName: chapterName,
                    chapterNumber: chapterNumber,
                    status: "Pending",
                    targetDate: targetDate,
                    date: Date.now(),
                }
                book.chapterDetails.push(chapter);
            }
        },
        editChapter: (state, action) => {
            const { id, chapterId } = action.payload;
            const book = state.books.find((data) => data.id === id);
            if (book) {
                const chapter = book.chapterDetails.find((data) => data.chapterId === chapterId);
                if (chapter) {
                    chapter.chapterName = action.payload.chapterName;
                    chapter.chapterNumber = action.payload.chapterNumber;
                    chapter.targetDate = action.payload.targetDate;
                }
            }
        },
        removeChapter: (state, action) => {
            const { id, chapterId } = action.payload
            const book = state.books.find((data) => data.id === id);
            if (book) {
                book.chapterDetails = book.chapterDetails.filter((data) => data.chapterId !== chapterId);
            }
        },
        changeStatus: (state, action) => {
            const { id, chapterId } = action.payload;
            const book = state.books.find((data) => data.id === parseInt(id));
            if (book) {
                const chapter = book.chapterDetails.find((data) => data.chapterId === chapterId);
                if (chapter) {
                    chapter.status = "Complete";
                }
            }
        }

    }
})

export const { addBook, editBookDetails, addChapters, removeChapter, editChapter, changeStatus } = bookSlice.actions
export default bookSlice.reducer