import React, { useContext, useEffect, useState } from 'react';
import CartProduct from './CartProduct';
import { AuthContext } from '../../Providers/AuthProviders';

const Cart = () => {

    const [products, setProducts] = useState([])

    const {user, loading,  setLoading} = useContext(AuthContext)
    const userId = user.uid

    useEffect(() => {
        fetch(`https://brand-shop-server-7sdp3kfz7-md-ibrahim-khalils-projects.vercel.app/cart/${userId}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            
        })
        setLoading(false)

    }, [])

    return (
        <div className='py-44 bg-[#202020]'>
            {
                loading && <h3>Loading...</h3> 
            }
            {
                products.length ? <div className='px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {
                        products.map(product => <CartProduct key={product._id} product={product} products={products} setProducts={setProducts}></CartProduct>)
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