import { useContext, useEffect } from "react";
import { CommonContext } from "../../../Layout/CommonRoute";

const Categories = () => {
  const { products } = useContext(CommonContext);
  console.log(products);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${products.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div></div>;
};

export default Categories;
