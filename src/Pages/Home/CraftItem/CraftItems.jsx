import { useContext } from "react";
import { CommonContext } from "../../../Layout/CommonRoute";
import CraftItem from "./CraftItem";

const CraftItems = () => {
  const { products } = useContext(CommonContext);
  const newProducts = [...products].reverse();

  const sliceProduct = newProducts.slice(0, 6);

  return (
    <div className="container mx-auto p-3 mt-10 lg:mt-24">
      <div className="space-y-3">
        <h2 className="text-center text-3xl lg:text-6xl font-bold goldenText">CRAFT ITEMS</h2>

        <p className=" lg:text-lg goldenText lg:w-2/3 lg:mx-auto lg:font-semibold">
          Welcome to Craftopia Creations, your ultimate destination for unique craft items! Explore a world of creativity with our handmade
          treasures. Let your imagination soar and craft your dreams into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-10">
        {sliceProduct.map((product) => (
          <CraftItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
