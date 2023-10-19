
import { useLoaderData, useParams } from 'react-router-dom';

const Brands = () => {

    const products = useLoaderData()
    console.log(products)
    const {brand_name} = useParams()
    return (
        <div>
           <h1>brand</h1> 
           <h3>{brand_name}</h3>
           <h3>{products.length}</h3>
        </div>
    );
};

export default Brands;