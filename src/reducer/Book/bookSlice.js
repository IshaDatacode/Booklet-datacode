import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    books : [{id:1 , bookTitle:"Titans" , bookAuthor:"Andrew Robinson" ,noOfChapters:"Vol.2"}]
}

export const bookSlice= createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const book={
                id: nanoid(),
                bookTitle: action.payload.bookTitle,
                bookAuthor: action.payload.bookAuthor,
                noOfChapters: action.payload.noOfChapters
            }
            state.books.push(book);
        }
    }
})

export const {addBook} = bookSlice.actions
export default bookSlice.reducer