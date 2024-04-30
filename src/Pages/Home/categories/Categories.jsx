import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../../Layout/CommonRoute";
import HomeCategoeyCart from "./HomeCategoeyCart";

const Categories = () => {
  const { loader } = useContext(CommonContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://artisan-paradise-server.vercel.app/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

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
    <div className="p-3 container mx-auto">
      <div>
        <h2 className="text-3xl lg:text-5xl mt-10 lg:mt-24 text-center font-bold goldenText">CATEGORIES</h2>
        <p className="text-center lg:w-2/3 lg:mx-auto font-semibold lg:text-lg goldenText">
          On my website's categories page, you'll find detailed information about different categories related to art and craft. This page
          will showcase a list of six special categories, with each category displaying its name, image, and other relevant information.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <HomeCategoeyCart key={category._id} cat={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
