import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addtoDB';
import SingleReadBook from './SingleReadBook';
const ReadList = () => {
    const [readList , setReadList] = useState([]);
    const data = useLoaderData()
    // console.log(data)
 useEffect(()=>{
    const storeBookData = getStoredBook();
    // console.log(storeBookData)
    const convertedBookData = storeBookData.map(id => parseInt(id))
    // console.log(convertedBookData)
    const myReadList =  data.filter(book =>convertedBookData.includes(book.bookId))
    setReadList(myReadList)
},[])

const [sort , setSort] =useState('')
const handleSort = (type) =>{
    setSort(type)
    if(type === "pages")
        {
const sortedByPages = [...readList].sort((a,b) => a.totalPages- b.totalPages)
setReadList(sortedByPages)    
}
// Here  Sort by Rating  
if(type === "ratings")
    {
const sortedByRatings = [...readList].sort((a,b) => a.rating- b.rating)
setReadList(sortedByRatings)    
}
}

    return (
        <div>
            <details className="dropdown">
  <summary className="btn m-1">sort by : {sort? sort :""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>{handleSort('pages')}}>pages</a></li>
    <li><a  onClick={()=>{handleSort('ratings')}}>rating</a></li>
  </ul>
</details>
              <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>List length  {readList.length}</h2>
      {
        readList.map((book,index)=> <SingleReadBook key={index} book={book}></SingleReadBook>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;