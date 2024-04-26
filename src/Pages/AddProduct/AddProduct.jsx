import { useContext } from "react";
import { CommonContext } from "../../Layout/CommonRoute";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { user } = useContext(CommonContext);
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // const displayName = user.displayName;
    // const email = user.email;
    const processingTime = form.processingTime.value;
    // const photoURL = user.photoURL;

    const product = { name, price, rating, category, customization, stock, details, photo, processingTime };

    fetch(`https://artisan-paradise-server.vercel.app/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center">
      <div className="bg-[#E4C59E] text-[#6D2932] p-3 lg:px-10 lg:py-20 rounded-lg container mx-auto">
        <div className="">
          <h2 className="text-3xl lg:text-5xl text-center font-bold">Add New Product</h2>
          <p className="lg:w-2/3 lg:mx-auto mt-2 text-center">
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddProduct} className="w-4/5 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-md font-semibold">
          <div>
            <p>Item Name:</p>
            <input className="py-2 px-4 w-full" type="text" name="name" required />
          </div>

          <div>
            <p>subCategory:</p>
            <select name="category" className="py-2 px-4 w-full" required>
              <option value=""></option>

              <option value="Landscape Painting">Landscape Painting</option>

              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolor Painting">Watercolor Painting</option>
              <option value="Oil Painting">Oil Painting:</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>

          <div>
            <p>Rating:</p>
            <input className="py-2 px-4 w-full" type="text" name="rating" required />
          </div>

          <div>
            <p>Price:</p>
            <input className="py-2 px-4 w-full" type="number" name="price" required />
          </div>

          <div>
            <p>Customization:</p>
            <select name="customization" className="py-2 px-4 w-full" required>
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <p>Stock Status:</p>
            <select name="stock" className="py-2 px-4 w-full" required>
              <option value=""></option>
              <option value="In Stock">In Stock</option>
              <option value="Made to Order" className="text-red-500">
                Made to Order
              </option>
            </select>
          </div>

          <div>
            <p>Processing Time:</p>
            <input className="py-2 px-4 w-full" type="text" name="processingTime" required />
          </div>

          <div>
            <p>Photo URL:</p>
            <input className="py-2 px-4 w-full " type="text" name="photo" />
          </div>

          <div className="lg:col-span-2">
            <p>Details:</p>
            <textarea className="py-2 px-4 w-full" type="text" name="details" required />
          </div>

          <div className="lg:col-span-2">
            <input className="py-2 px-4 w-full bg-[#AF8260] text-white" type="submit" value="Add Product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
