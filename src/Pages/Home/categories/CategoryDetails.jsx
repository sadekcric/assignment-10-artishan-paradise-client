import { Helmet } from "react-helmet-async";
import { FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import CategoryCart from "./CategoryCart";

const CategoryDetails = () => {
  const products = useLoaderData();

  return (
    <div>
      <h1 className="mt-10 text-center text-5xl goldenText  font-bold">{products[0]?.category || "Empty"}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mt-10 lg:mt-24 container mx-auto mb-10">
        {products.map((product) => (
          <CategoryCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
