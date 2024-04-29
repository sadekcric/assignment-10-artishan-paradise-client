import { useContext } from "react";
import { CommonContext } from "../../../Layout/CommonRoute";
import Category from "./Category";

const CategoryCart = () => {
  const { categoryProduct, loader } = useContext(CommonContext);

  if (loader) {
    return (
      <div className="fixed top-[50%] left-[50%] z-50">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG2"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-3 flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
      <div className=" mt-10 lg:mb-10 mb-6">
        <h2 className="text-3xl lg:text-5xl goldenText font-bold text-center">{categoryProduct[0]?.category || "Empty"}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-10 ">
        {categoryProduct.map((product) => (
          <Category key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCart;
