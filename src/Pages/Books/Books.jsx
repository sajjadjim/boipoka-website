import React, { Suspense} from 'react';
import Book from '../Book/Book';


const Books = ({data}) => {
// const bookPromise = fetch('https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/bookData.json').then(res=> res.json())
// console.log(data)
    return (
        <div>
            <h1 className='text-center text-6xl font-bold'>Book</h1>
       <div className='grid md:grid-cols-3'>
       {
            data.map((singleBook) =><Book singleBook={singleBook} key={singleBook.bookId}></Book>)
        }
       </div>
        </div>
    );
};

export default Books;