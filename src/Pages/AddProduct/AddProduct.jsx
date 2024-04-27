import { useContext } from "react";
import { CommonContext } from "../../Layout/CommonRoute";
import Swal from "sweetalert2";
import background from "../../assets/loginBg.png";

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
    const displayName = user.displayName;
    const email = user.email;
    const processingTime = form.processingTime.value;
    const photoURL = user.photoURL;

    const product = { name, price, rating, category, customization, stock, details, photo, processingTime, displayName, email, photoURL };

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
    <div className="relative">
      <div className="w-full  hidden md:block">
        <img className="w-full h-full blur-sm opacity-50" src={background} alt="" />
      </div>
      <div className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center md:absolute md:top-1/2 md:left-1/2 md:-translate-y-[50%] md:-translate-x-[50%]">
        <div className=" p-3 lg:px-10 lg:py-20 rounded-lg container mx-auto bg-[#E4C59E] md:bg-opacity-25 text-[#6D2932] font-semibold md:border-2 md:shadow-xl md:border-[#af8260]">
          <div>
            <h2 className="text-3xl lg:text-5xl text-center font-bold">Add Craft Item</h2>
            <p className="lg:w-2/3 lg:mx-auto mt-2 text-center lg:text-lg">
              Crafting is more than just a hobby; it's a form of artistic expression that allows us to unleash our creativity and transform
              ordinary materials into extraordinary pieces. Our Craft page is a haven for enthusiasts of all levels, offering inspiration,
              tutorials, and resources to ignite your passion for DIY projects.
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
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>

            <div>
              <p>Processing Time:</p>
              <input className="py-2 px-4 w-full" type="text" name="processingTime" required />
            </div>

            <div>
              <p>Photo URL:</p>
              <input className="py-2 px-4 w-full " type="text" name="photo" required />
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
    </div>
  );
};

export default AddProduct;
