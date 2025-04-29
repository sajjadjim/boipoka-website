import React from 'react';
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
const SingleReadBook = ({book}) => {
    // const [bookName] = book;
    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
  
  <li className="px-3">
    <div><img className="size-10 rounded-box" src={book.image}/></div>
    <div>
      <div>{book.bookName}</div>
    </div>
    <div className='flex gap-5 border-b-1 pb-2'><span className=' font-semibold mb-2'>Tags : </span>{
        book.tags.map((tag , index) =><p key={index} className='text-green-600 font-bold'>#{tag}</p>)
        }
        <p>Year of publishing: {book.yearOfPublishing}</p>
        </div>
        <div className='flex opacity-50 gap-5'>
            <p className='flex gap-1'><BsPersonWorkspace className='h-5'/>Publisher : {book.publisher}</p> <p className='flex'><MdOutlineContactPage className='h-5'/>Pages : {book.totalPages}</p>
        </div>
    <div className='flex gap-5 mt-2'>
        <button className='bg-amber-200 rounded-3xl py-1 px-3 text-yellow-800'>Ratting: {book.rating}</button>
        <button className='bg-green-200 rounded-3xl py-1 px-3 text-green-800'>category : {book.category}</button>
        <button className='bg-blue-200 rounded-3xl py-1 px-3'>Views details</button>
    </div>
  </li>
   
</ul>
        </div>
    );
};

export default SingleReadBook;