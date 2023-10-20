
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Brands = () => {

    const products = useLoaderData()
    const {brand_name} = useParams()
    return (
        <div>
           {
            products.length ? 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10%] py-24 gap-6 bg-[#202020]'>
                {
                    products.map((product, idx) => <Product key={product._id} idx={idx} product={product}></Product>)
                }
            </div> 
            : 
            
            <div className='grid h-[500px] place-items-center bg-[#202020]'>
                <h3 className='text-5xl'>{brand_name}'s Products Not Found</h3>
            </div>
           }
        </div>
    );
};

export default Brands;