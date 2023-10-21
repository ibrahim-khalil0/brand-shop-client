import React from 'react';

const Category = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-[10%] gap-8 py-16'>
            <div className='border border-white text-center rounded-md cursor-pointer'>
                <div className='bg-gray-200 rounded-t-md p-4'>
                    <img src="https://i.ibb.co/syn7HvZ/hp.png" alt="" className='h-[250px]' />
                </div>
                <div>
                    <h2 className='text-3xl py-3'>Laptop</h2>
                </div>
            </div>
            <div className='border border-white text-center rounded-md cursor-pointer'>
                <div className='bg-gray-200 rounded-t-md p-4'>
                    <img src="https://i.ibb.co/4RnJK3n/giant-225754-removebg-preview.png" alt="" className='h-[250px]' />
                </div>
                <div>
                    <h2 className='text-3xl py-3'>Mobile</h2>
                </div>
            </div>
            <div className='border border-white text-center rounded-md cursor-pointer'>
                <div className='bg-gray-200 rounded-t-md p-4'>
                    <img src="https://i.ibb.co/Pj8tNPD/au8100-01-500x500-removebg-preview.png" alt="" className='h-[250px]' />
                </div>
                <div>
                    <h2 className='text-3xl py-3'>LED TV</h2>
                </div>
            </div>
            <div className='border border-white text-center rounded-md cursor-pointer'>
                <div className='bg-gray-200 rounded-t-md p-4'>
                    <img src="https://i.ibb.co/WHdfrDb/wni-5f3-gdel-dd-removebg-preview-1.png" alt="" className='h-[250px]' />
                </div>
                <div>
                    <h2 className='text-3xl py-3'>Refrigerator</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;