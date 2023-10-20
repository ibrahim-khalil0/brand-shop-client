
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Brands = () => {

    const products = useLoaderData()
    console.log(products)
    const {brand_name} = useParams()
    return (
        <div>
           {
            products.length ? 
            <div className='grid grid-cols-4 px-[10%] py-24 gap-6 bg-[#202020]'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div> 
            : 
            <div>0</div>
           }
        </div>
    );
};

export default Brands;