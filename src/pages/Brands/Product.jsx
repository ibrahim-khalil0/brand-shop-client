import { Link } from "react-router-dom";


const Product = ({product, idx}) => {

    const {tittle, brand, category, photo, price, description, rating, _id} = product
    const id = "rating-" + idx

    return (
        <div className="shadow-xl shadow-[#0000003d] hover:shadow-lg hover:shadow-black relative hover:bottom-4">
            <div className="bg-black px-5 rounded-md relative">
                <img src={photo} alt="" className="w-full h-[230px]" />
                <span className="absolute top-0 right-0 bg-white text-black px-4 rounded-b-sm pb-1 font-semibold">{category}</span>
            </div>
            <div className="px-4 py-5 space-y-3 text-center">
                <span className="capitalize text-base bg-black px-3 py-2 rounded-lg">Brand: {brand}</span>
                <h2 className="text-xl">{tittle}</h2>
                <h4 className="text-2xl">${price}</h4>
                <h3>
                    {
                        rating == 1 && <div className="rating space-x-3 flex">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 2 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 3 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 4 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                      </div>
                    }
                    {
                        rating == 5 && <div className="rating">
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={id} className="mask mask-star-2 bg-orange-400" checked />
                      </div>
                    }
                </h3>
                <div className="flex gap-6">
                    <Link to={`/product/${_id}`} className="bg-white flex-1 text-black text-xl font-semibold py-1 rounded-lg"><button>Details</button></Link>
                    <Link to={'/'} className="border flex-1 border-white py-1 rounded-lg"><button>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;