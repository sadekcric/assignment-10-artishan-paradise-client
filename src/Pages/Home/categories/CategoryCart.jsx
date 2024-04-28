import { useContext } from "react";
import { CommonContext } from "../../../Layout/CommonRoute";
import Category from "./Category";

const CategoryCart = () => {
  const { categoryProduct } = useContext(CommonContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container p-3 mt-10">
      {categoryProduct.map((product) => (
        <Category key={product._id} product={product} />
      ))}
    </div>
  );
};

export default CategoryCart;
