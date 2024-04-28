import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

import CategoryCart from "./CategoryCart";

const Categories = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);

  const sliceProduct = categoryProduct.slice(0, 6);

  useEffect(() => {
    fetch(`https://artisan-paradise-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setCategoryProduct(data));
  }, []);

  const handleCategory = (category) => {
    // console.log("I am Clicked");
    fetch(`https://artisan-paradise-server.vercel.app/products-category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryProduct(data));
  };
  const handleAllProduct = () => {
    fetch(`https://artisan-paradise-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setCategoryProduct(data));
  };

  return (
    <div className="p-3 container mx-auto">
      <div>
        <h2 className="text-3xl lg:text-5xl mt-10 lg:mt-24 text-center font-bold goldenText">CATEGORIES</h2>
        <p className="text-center lg:w-2/3 lg:mx-auto font-semibold lg:text-lg goldenText">
          On my website's categories page, you'll find detailed information about different categories related to art and craft. This page
          will showcase a list of six special categories, with each category displaying its name, image, and other relevant information.{" "}
        </p>
      </div>

      <div className="flex items-center justify-center mt-10 mb-5">
        <div className="dropdown goldenBG2 rounded-lg ">
          <div tabIndex={0} role="button" className="px-3 py-3 w-52 flex items-center justify-center m-1 goldenBG2 goldenText">
            <div className="flex items-center gap-4 font-semibold text-lg">
              <span>Category</span>
              <span>
                <FaCaretDown />
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[50] menu py-2  px-3 goldenBG rounded-lg mt-1 text-white font-semibold text-lg w-52"
          >
            <li>
              <button onClick={handleAllProduct}>All Categories</button>
            </li>
            <li>
              <button onClick={() => handleCategory("Landscape Painting")}>Landscape Painting</button>
            </li>
            <li>
              <button onClick={() => handleCategory("Portrait Drawing")}>Portrait Drawing</button>
            </li>
            <li>
              <button onClick={() => handleCategory("Watercolor Painting")}>Watercolor Painting</button>
            </li>
            <li>
              <button onClick={() => handleCategory("Oil Painting")}>Oil Painting</button>
            </li>
            <li>
              <button onClick={() => handleCategory("Charcoal Sketching")}>Charcoal Sketching</button>
            </li>
            <li>
              <button onClick={() => handleCategory("Cartoon Drawing")}>Cartoon Drawing</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center  lg:grid-cols-3 gap-5 ">
        {sliceProduct.map((product) => (
          <CategoryCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
