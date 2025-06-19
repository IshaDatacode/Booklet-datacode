import { createSlice, nanoid } from '@reduxjs/toolkit'
import  Image4 from "../../assets/images/image4.png"
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
     books : [
        {
          id: randomId(),
          bookTitle: "Winds of Eternity",
          bookAuthor: "Ava Sinclair",
          bookDescription: "A fantasy tale of kingdoms at war, ancient prophecies, and a warrior destined to change the fate of the realm.",
          noOfChapters: "20",
          creationDate: Date.now(),
          percentage: 10,
          ImageUrl:  Image4,
          chapterDetails: [
            { chapterId: nanoid(), chapterName: "The Awakening", chapterNumber: 1, targetDate: "2025-03-01", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Crown of Storms", chapterNumber: 2, targetDate: "2025-03-02", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Lost Heir", chapterNumber: 3, targetDate: "2025-03-03", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Echoes of Magic", chapterNumber: 4, targetDate: "2025-03-04", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Broken Blade", chapterNumber: 5, targetDate: "2025-03-05", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Shadow Pact", chapterNumber: 6, targetDate: "2025-03-06", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Whispers in the Wind", chapterNumber: 7, targetDate: "2025-03-07", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Siege", chapterNumber: 8, targetDate: "2025-03-08", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Fall of the Phoenix", chapterNumber: 9, targetDate: "2025-03-09", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Destiny's Edge", chapterNumber: 10, targetDate: "2025-03-10", status: "Pending" }
          ]
        },
        {
          id: randomId(),
          bookTitle: "Neural Sparks",
          bookAuthor: "Dr. Eliza Ray",
          bookDescription: "A science-driven journey through the brain's potential, AI consciousness, and the boundaries of machine learning.",
          noOfChapters: "20",
          creationDate: Date.now(),
          percentage: 100,
          ImageUrl:  Image4,
          chapterDetails: [
            { chapterId: nanoid(), chapterName: "The Digital Dawn", chapterNumber: 1, targetDate: "2025-03-01", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Cognitive Code", chapterNumber: 2, targetDate: "2025-03-02", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Neurons and Networks", chapterNumber: 3, targetDate: "2025-03-03", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Learning Machines", chapterNumber: 4, targetDate: "2025-03-04", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Mirror Mind", chapterNumber: 5, targetDate: "2025-03-05", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Synthetic Empathy", chapterNumber: 6, targetDate: "2025-03-06", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Algorithm Soul", chapterNumber: 7, targetDate: "2025-03-07", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Virtual Ethics", chapterNumber: 8, targetDate: "2025-03-08", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Ghost in the Cloud", chapterNumber: 9, targetDate: "2025-03-09", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Singularity", chapterNumber: 10, targetDate: "2025-03-10", status: "Complete" }
          ]
        },
        {
          id: randomId(),
          bookTitle: "Fragments of the Forgotten",
          bookAuthor: "Noah Bennett",
          bookDescription: "A mystery unraveling an ancient civilization through hidden clues, lost artifacts, and a race against time.",
          noOfChapters: "20",
          creationDate: Date.now(),
          percentage: 100,
          ImageUrl:  Image4,
          chapterDetails: [
            { chapterId: nanoid(), chapterName: "The Dig", chapterNumber: 1, targetDate: "2025-03-01", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Beneath the Dust", chapterNumber: 2, targetDate: "2025-03-02", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Obsidian Tablet", chapterNumber: 3, targetDate: "2025-03-03", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Secret Vault", chapterNumber: 4, targetDate: "2025-03-04", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Translator", chapterNumber: 5, targetDate: "2025-03-05", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Labyrinth", chapterNumber: 6, targetDate: "2025-03-06", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Fallen Empire", chapterNumber: 7, targetDate: "2025-03-07", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Timebound Clues", chapterNumber: 8, targetDate: "2025-03-08", status: "Complete" },
            { chapterId: nanoid(), chapterName: "The Betrayal", chapterNumber: 9, targetDate: "2025-03-09", status: "Complete" },
            { chapterId: nanoid(), chapterName: "Legacy Restored", chapterNumber: 10, targetDate: "2025-03-10", status: "Complete" }
          ]
        },
        {
          id: randomId(),
          bookTitle: "The Last Horizon",
          bookAuthor: "Mira Thorne",
          bookDescription: "A post-apocalyptic adventure where survival, hope, and humanity are put to the ultimate test.",
          noOfChapters: "20",
          creationDate: Date.now(),
          percentage: 0,
          ImageUrl:  Image4,
          chapterDetails: [
            { chapterId: nanoid(), chapterName: "Day Zero", chapterNumber: 1, targetDate: "2025-03-01", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Ashes and Echoes", chapterNumber: 2, targetDate: "2025-03-02", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Signal", chapterNumber: 3, targetDate: "2025-03-03", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Scorched Earth", chapterNumber: 4, targetDate: "2025-03-04", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Forgotten City", chapterNumber: 5, targetDate: "2025-03-05", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Through the Wasteland", chapterNumber: 6, targetDate: "2025-03-06", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Reunion", chapterNumber: 7, targetDate: "2025-03-07", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Uprising", chapterNumber: 8, targetDate: "2025-03-08", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Dawn Breaks", chapterNumber: 9, targetDate: "2025-03-09", status: "Pending" },
            { chapterId: nanoid(), chapterName: "New World", chapterNumber: 10, targetDate: "2025-03-10", status: "Pending" }
          ]
        },
        {
          id: randomId(),
          bookTitle: "Beyond the Canvas",
          bookAuthor: "Leo Moreno",
          bookDescription: "A heartfelt story of a painter rediscovering inspiration, love, and the forgotten masterpieces of his past.",
          noOfChapters: "20",
          creationDate: Date.now(),
          percentage: 0,
          ImageUrl:  Image4,
          chapterDetails: [
            { chapterId: nanoid(), chapterName: "Faded Colors", chapterNumber: 1, targetDate: "2025-03-01", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Brushstrokes of Memory", chapterNumber: 2, targetDate: "2025-03-02", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Muse Returns", chapterNumber: 3, targetDate: "2025-03-03", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Studio of Shadows", chapterNumber: 4, targetDate: "2025-03-04", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Color Theory", chapterNumber: 5, targetDate: "2025-03-05", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Lost Exhibit", chapterNumber: 6, targetDate: "2025-03-06", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Framed Regret", chapterNumber: 7, targetDate: "2025-03-07", status: "Pending" },
            { chapterId: nanoid(), chapterName: "The Canvas Speaks", chapterNumber: 8, targetDate: "2025-03-08", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Masterpiece", chapterNumber: 9, targetDate: "2025-03-09", status: "Pending" },
            { chapterId: nanoid(), chapterName: "Gallery of the Soul", chapterNumber: 10, targetDate: "2025-03-10", status: "Pending" }
          ]
        }
      ]
      
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
                bookDescription: action.payload.bookDescription,
                percentage: 0,
                ImageUrl:  Image4,
                chapterDetails: []
            }
            state.books.push(book);
        },
        addPercentage: (state, action) => {
          const { book, percentage } = action.payload;
          const foundBook = state.books.find((b) => b.id === book.id);
          if (foundBook) {
            foundBook.percentage = percentage;
          }
        }
        ,
        editBookDetails: (state, action) => {
            const { id, bookTitle, bookAuthor, noOfChapters, bookDescription } = action.payload;
            const book = state.books.find((data) => data.id === id);
            if (book) {
                book.bookTitle = truncate(bookTitle);
                book.bookAuthor = bookAuthor;
                book.noOfChapters = noOfChapters;
                book.bookDescription = bookDescription;
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

export const { addBook, editBookDetails, addChapters, removeChapter, editChapter, changeStatus, addPercentage } = bookSlice.actions
export default bookSlice.reducer