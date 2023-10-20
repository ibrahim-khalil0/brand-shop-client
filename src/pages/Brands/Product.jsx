

const Product = ({product}) => {

    const {tittle, brand, category, photo, price, description, rating, _id} = product
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
                <h3>{rating}</h3>
                <div className="flex gap-6">
                    <button className="bg-white flex-1 text-black text-xl font-semibold py-1 rounded-lg">Details</button>
                    <button className="border flex-1 border-white py-1 rounded-lg">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;