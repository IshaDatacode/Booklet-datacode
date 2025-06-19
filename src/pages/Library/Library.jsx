import { useSelector } from 'react-redux';
import { Link, useOutletContext } from 'react-router-dom';

import Image4 from '../../assets/images/image4.png';

const Library = () => {
   const books = useSelector(state => state.books);
   const query= useOutletContext();
   const searchBook = books.filter((data) =>
    data.bookTitle.toLowerCase().includes(query) ||
    data.bookAuthor.includes(query) 
  );
   return (
      <div id='main' className='mx-lg-4'>
      <div className='invisible-scrollbar  table-responsive'>
         <table className="table align-middle table-borderless" style={{ backgroundColor: '#1D1D2A' }}>
            <thead className='border-head '>
               <tr>
                  <th className='fw-bold fs-4 text-white text-center bg-imp'>Book Image</th>
                  <th className='fw-bold fs-4 text-white text-center bg-imp'>Book Title</th>
                  <th className='fw-bold fs-4 text-white text-center bg-imp'>Book Author</th>
                  <th className='fw-bold fs-4 text-white text-center bg-imp'>No. Of Chapters</th>
                  <th className='fw-bold fs-4 text-white text-center bg-imp'>No. of Readers</th>
                  <th className='fw-bold fs-4 text-white text-center bg-imp'>Book Creation Date</th>
               </tr>
            </thead>
            <tbody >
               {
                  searchBook.map((data) => (
                     <tr key={data.id} className='border-data'>
                        <td className='fw-bold fs-4 text-white text-center bg-imp'><Link to={`/book-details/${data.id}`} state={{title:data.bookTitle,subtitle:data.bookAuthor,chapters:data.noOfChapters}}><img src={Image4} className="rounded-4 " width={100} height={100} /></Link></td>
                        <td className='text-capitalize fw-normal fs-5 text-white text-center bg-imp'>{data.bookTitle}</td>
                        <td className="text-capitalize fw-normal fs-5 text-white text-center bg-imp">{data.bookAuthor}</td>
                        <td className="text-capitalize fw-normal fs-5 text-white text-center bg-imp">{data.noOfChapters}</td>
                        <td className="text-capitalize fw-normal fs-5 text-white text-center bg-imp">0</td>
                        <td className="text-capitalize fw-normal fs-5 text-white text-center bg-imp">{new Date(data.creationDate).toLocaleString()}</td>
                     </tr>
                  ))
               }
            </tbody>
         </table>
      </div>
   </div>
   );
};

export default Library;
