import { useContext } from "react";
import { CommonContext } from "../../Layout/CommonRoute";
import Swal from "sweetalert2";
import background from "../../assets/loginBg.png";

const AddProduct = () => {
  const { handleAddProduct } = useContext(CommonContext);

  return (
    <div className="relative py-3 overflow-y-scroll">
      <div className="w-full  hidden lg:block">
        <img className="w-full h-full blur-sm opacity-50" src={background} alt="" />
      </div>
      <div className=" flex flex-col items-center justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-[50%] lg:-translate-x-[50%]">
        <div className=" p-3 lg:px-10 lg:py-20 rounded-lg container mx-auto bg-[#E4C59E] lg:bg-opacity-25 text-[#6D2932]  font-semibold lg:border-2 lg:shadow-xl lg:border-[#af8260]">
          <div>
            <h2 className="text-3xl lg:text-5xl text-center font-bold">Add Craft Item</h2>
          </div>

          <form
            onSubmit={handleAddProduct}
            className="w-4/5 mx-auto mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5 rounded-lg font-semibold items-center"
          >
            <div className="lg:col-span-2">
              <p>Item Name:</p>
              <input className="py-2 px-4 w-full" type="text" name="name" required />
            </div>

            <div className="lg:col-span-2">
              <p>subCategory:</p>
              <select name="category" className="py-2 px-4 w-full" required>
                <option value=""></option>

                <option value="Landscape Painting">Landscape Painting</option>

                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolor Painting">Watercolor Painting</option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </div>

            <div className="lg:col-span-1">
              <p>Rating:</p>
              <input className="py-2 px-4 w-full" type="text" name="rating" required />
            </div>

            <div className="lg:col-span-1">
              <p>Price:</p>
              <input className="py-2 px-4 w-full" type="number" name="price" required />
            </div>

            <div className="lg:col-span-2">
              <p>Customization:</p>
              <select name="customization" className="py-2 px-4 w-full" required>
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <p>Photo URL:</p>
              <input className="py-2 px-4 w-full " type="text" name="photo" required />
            </div>

            <div className="lg:col-span-1">
              <p>Stock Status:</p>
              <select name="stock" className="py-2 px-4 w-full" required>
                <option value=""></option>
                <option value="In Stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>

            <div className="lg:col-span-1">
              <p>Processing Time:</p>
              <input className="py-2 px-4 w-full" type="text" name="processingTime" required />
            </div>

            <div className="lg:col-span-4">
              <p>Details:</p>
              <textarea className="py-2 px-4 w-full" type="text" name="details" required />
            </div>

            <div className="lg:col-span-4">
              <input className="py-2 px-4 w-full bg-[#AF8260] text-white" type="submit" value="Add Product" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
