

const handleRemoveProduct = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/cart/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

const CartProduct = ({product}) => {
    const {tittle, photo, price, _id} = product
    return (
        <div className='flex bg-[#000000] px-5 py-8 rounded-lg'>
            <div className='w-1/6'>
                <img src={photo} alt="" className="h-[100px] w-full" />
            </div>
            <div className='flex-1 ml-6'>
                <h1 className='text-3xl'>{tittle}</h1>
                <h3 className='text-xl mt-4'>Price : ${price}</h3>
            </div>
            <div className='w-[30px] flex items-center'>
                <button onClick={() => handleRemoveProduct(_id)} className='bg-white text-black text-xl py-1 px-3 rounded-lg'>X</button>
            </div>
        </div>
    );
};

export default CartProduct;