import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer'
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <Books data={data}></Books>          
        </div>
    );
};

export default Home;