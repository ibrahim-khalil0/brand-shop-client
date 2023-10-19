
import { useParams } from 'react-router-dom';

const Brands = () => {
    const {brand_name} = useParams()
    return (
        <div>
           <h1>brand</h1> 
           <h3>{brand_name}</h3>
        </div>
    );
};

export default Brands;