import React from 'react';
import Banner from './Banner';
import Brand from './Brand';
import Offer from './Offer';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-24'>
                <div className='px-[10%]'>
                    <h1 className='text-4xl mb-8'>Popular Brands</h1>
                </div>
                <Brand></Brand>
            </div>
            <Offer></Offer>
            <Category></Category>
        </div>
    );
};

export default Home;