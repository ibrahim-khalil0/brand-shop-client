import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartProduct from './CartProduct';

const Cart = () => {

    const products = useLoaderData()
    console.log(products)
    return (
        <div className='h-full'>
            {
                products.length ? <div className='bg-[#202020] px-[10%]'>
                    {
                        products.map(product => <CartProduct key={product._id} product={product}></CartProduct>)
                    }
                </div>
                :
                <div></div>
            }
        </div>
    );
};

export default Cart;