import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

  const handleAddProduct = e => {
    e.preventDefault()
    const form = e.target

    const tittle = form.name.value
    const photo = form.photo.value
    const brandName = form.brand.value
    const brand = brandName.toLowerCase()
    const category = form.category.value
    const priceString = form.price.value
    const price = parseInt(priceString)
    const rating = form.rating.value
    const description = form.description.value

    const newProduct = {tittle, photo, brand, category, price, rating, description}

    if(isNaN(price)){
      alert('Invalid Price')
      return
    }
    

    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast('Product Added Successfully')
    })
    form.reset()

  }
  return (
    <div>
      <div className="w-3/4 border-2 border-gray-300 mx-auto mt-16 mb-10 text-center py-10 px-4 md:px-16 rounded-md">
        <h1 className="text-center text-6xl mb-8 text-[#fff] ">
          Add New Product
        </h1>
        <div>
          <form onSubmit={handleAddProduct} className="product-form space-y-8">
            <div className="flex gap-8 flex-col lg:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                required
              />
              <input
                type="text"
                name="photo"
                placeholder="Product URL"
                required
              />
            </div>

            <div className="flex gap-8 flex-col lg:flex-row">
              <input
                type="text"
                name="brand"
                required
                placeholder="Brand Name"
              />
              <input
                type="text"
                name="category"
                required
                placeholder="Category Name"
              />
            </div>

            <div className="flex gap-8 flex-col lg:flex-row">
              <input
                type="text"
                name="price"
                required
                placeholder="Product Price"
              />
              <input
                type="number"
                name="rating"
                required
                placeholder="Product Rating"
                max="5"
              />
            </div>
            <textarea name="description" className="w-full bg-black border border-white rounded-md text-xl px-4 py-3" rows="5" placeholder="Product Description..."></textarea>

            <input
              type="submit"
              value="Add Product"
              className="bg-[#EDB602] w-full rounded-md text-2xl px-4 py-2 text-white cursor-pointer"
            />
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;
