import {configureStore} from '@reduxjs/toolkit'
import  bookReducer from '../reducer/Book/bookSlice'
export const store= configureStore({
   reducer: bookReducer
})