import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    // console.log(id)
    const bookID = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book=> book.bookId === bookID)
     console.log(singleBook)
    const {bookName , review,tags ,image ,totalPages, yearOfPublishing , rating , publisher,author,category} = singleBook;
    return (

        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <h3 className='border-b-1 pb-2'>By :{author}</h3>
      <h3 className='border-b-1 pb-2'>{category}</h3>
      <p className="py-6">
        {review}
      </p>
      <div className='flex gap-5 border-b-1 pb-2'><span className=' font-semibold mb-2'>Tags : </span>{
        tags.map((tag) =><p className='text-green-600 font-bold'>#{tag}</p>)
        }</div>
        <div className='my-4'>
            <p>Number of Pages : <span className='font-bold'>{totalPages}</span></p>
            <p>Publish year : {yearOfPublishing}</p>
            <p>Publisher : <span className='font-bold'>{publisher}</span></p>
            <p>Rating : <span className='font-bold'>{rating}</span></p>
        </div>
        <div className='flex gap-5'>
        <button className='btn'>Read</button>
        <button className="btn btn-primary">Wishlist</button>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;