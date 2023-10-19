import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import Footer from '../../sharedComponents/Footer/Footer';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <div className='pt-28'>
            <h1 className='text-center text-9xl'>404</h1>
            <h2 className='text-center text-3xl'>Not Found</h2>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Error;