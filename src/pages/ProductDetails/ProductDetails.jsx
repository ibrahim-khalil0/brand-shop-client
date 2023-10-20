import { useLoaderData, useParams } from "react-router-dom";
import Rating from "../../sharedComponents/Rating/Rating";

const ProductDetails = () => {
    const {productId} = useParams()
    const product = useLoaderData()
    
    const {brand, category, description, photo, price, rating, tittle} = product
    return (
        <div className="bg-[#202020] px-[10%] py-24 flex">
            <div className="flex-1 bg-[#000000] px-16 py-20 rounded-sm flex">
                <img src={photo} alt="" className="w-full"/>
            </div>
            <div className="flex-1 pl-10 space-y-6">
                <div className="flex gap-8 text-lg">
                    <h3 className="capitalize">Brand : {brand}</h3>
                    <h3>&gt;</h3>
                    <h3 className="capitalize">Category : {category}</h3>
                </div>
                <h1 className="text-3xl">{tittle}</h1>
                <div className="flex gap-8">
                    <Rating rating={rating} id={'1'}></Rating>
                    <h3>&gt;</h3>
                    <h5>{rating} Star Rating</h5>
                </div>
                <h4 className="text-3xl">Price : ${price}</h4>
                <button className="bg-white text-black text-xl px-5 py-2 rounded-md font-semibold">Add To Cart</button>
                <div className="pt-8 pb-4">
                    <hr/>
                </div>
                <div>
                    <h1 className="text-3xl">Product Description :</h1>
                    <p className="text-md mt-4">{description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;