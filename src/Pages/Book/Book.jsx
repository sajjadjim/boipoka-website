import React from 'react';
import { Link } from 'react-router';

const Book = ({singleBook}) => {
console.log(singleBook)
    const {tags , bookId,publisher ,yearOfPublishing , category} = singleBook;
    return (
<Link to={`/bookDetails/${bookId}`}>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-30 h-40' 
      src={singleBook.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-5  justify-center'>
    {
        tags.map((tag , index) => <button key={index} className=''>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {singleBook.bookName}
      <div className="badge badge-secondary">Rating: {singleBook.rating}</div>
    </h2>
    <div><p>{publisher}</p>
        <p>Publish year : {yearOfPublishing}</p>
        <p>Category : {category}</p>
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Total Page:{singleBook.totalPages}</div>
      <div className="badge badge-outline">Publish:{singleBook.yearOfPublishing}</div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;