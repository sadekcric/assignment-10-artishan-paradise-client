import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { CommonContext } from "../../Layout/CommonRoute";
import AllCartTable from "./AllCartTable";
import "./nth.css";

const AllArtAndCraft = () => {
  const { products } = useContext(CommonContext);

  return (
    <div className="lg:min-h-[calc(100vh-120px)] lg:flex lg:items-center lg:justify-center">
      <Helmet>
        <title>Artisan Paradise|All Art & Craft</title>
      </Helmet>

      <div>
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-center goldenText mt-10 mb-2">ALL PRODUCTS</h2>
          <p className="lg:text-lg font-semibold lg:w-2/3 lg:mx-auto text-center">
            Welcome to Our Vibrant Art and Craft Hub! Dive into a realm where imagination knows no bounds and creativity flourishes. From
            painting and drawing to sculpting and DIY projects, our page is your go-to source for inspiration, tutorials, and community
            engagement.
          </p>
        </div>

        <div className="my-10 overflow-x-scroll lg:overflow-hidden ">
          <table className="w-full  container mx-auto p-3 text-center rounded-md">
            <thead>
              <tr className="border-2 border-b-0 goldenBorder text-lg goldenBG2">
                <th className="p-2 ">SL</th>
                <th>Title</th>
                <th>Customization</th>
                <th>Price</th>
                <th>rating</th>
                <th>View Details</th>
              </tr>
            </thead>

            <tbody className="border-b-2 goldenBorder">
              {products.map((product, idx) => (
                <AllCartTable key={product._id} product={product} index={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
