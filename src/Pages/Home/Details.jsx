import { useLoaderData } from "react-router-dom";

const Details = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return <div className="container mx-auto p-3"></div>;
};

export default Details;
