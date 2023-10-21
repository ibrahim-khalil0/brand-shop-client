
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Brands = () => {

    const products = useLoaderData()
    const {brand_name} = useParams()
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full h-[500px]">
                        <img src="https://cdn.shopify.com/s/files/1/0010/6450/1309/files/landing-hp-wave.jpg?v=1569761652" alt="" className='w-full' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full h-[500px]">
                        <img src="https://www.sammobile.com/wp-content/uploads/2022/01/Galaxy-S21-FE-hands-on-20-scaled.jpg" className="w-full h-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full h-[500px]">
                        <img src="https://thebusinesswatch.com/wp-content/uploads/2018/11/LG.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full h-[500px]">
                        <img src="https://4.bp.blogspot.com/-qt8SYpI2J5s/WXXHsrb9nlI/AAAAAAAAAfw/nmVnbUXl3cIrbqxkQhecOTbZlkK9xJfYACLcBGAs/s1600/Derect%2Bcool%2Bbanner%2Bco-1920x600.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
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