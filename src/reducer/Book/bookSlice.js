import { createSlice } from '@reduxjs/toolkit'
// random book id generartion //
const randomId = () => {
    const random = Math.floor(Math.random() * 500000);
    return random;
}
// remove exceed characters from book title //
const truncate = (str) => {
    if (str.length > 30) {
        return str.slice(0, 30);
    }
    return str;
}

const initialState = {
    books: [{ id: randomId(), bookTitle: "Titans, Vol. 2", bookAuthor: "Andrew Robinson", noOfChapters: "20", creationDate: Date.now() }]
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
                creationDate: Date.now()
            }
            state.books.push(book);
        }
    }
})

export const { addBook } = bookSlice.actions
export default bookSlice.reducer