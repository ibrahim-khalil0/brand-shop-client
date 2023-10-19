const AddProduct = () => {
  return (
    <div>
      <div className="w-3/4 border-2 border-gray-300 mx-auto mt-16 mb-10 text-center py-10 px-16 rounded-md">
        <h1 className="text-center text-6xl mb-8 text-[#fff] ">
          Add New Product
        </h1>
        <div>
          <form className="product-form space-y-8">
            <div className="flex gap-8">
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

            <div className="flex gap-8">
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

            <div className="flex gap-8">
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
            <textarea className="w-full bg-black border border-white rounded-md text-xl px-4 py-3" rows="5" placeholder="Product Description..."></textarea>

            <input
              type="submit"
              value="Add Product"
              className="bg-[#EDB602] w-full rounded-md text-2xl px-4 py-2 text-white cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
