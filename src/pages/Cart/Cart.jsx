import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartProduct from './CartProduct';

const Cart = () => {

    const products = useLoaderData()
    console.log(products)
    return (
        <div className='py-44 bg-[#202020]'>
            {
                products.length ? <div className='px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {
                        products.map(product => <CartProduct key={product._id} product={product}></CartProduct>)
                    }
                </div>
                :
                <div>
                    <h1 className='text-center text-5xl my-12'>You Have Not Any Product In Cart</h1>
                </div>
            }
        </div>
    );
};

export default Cart;