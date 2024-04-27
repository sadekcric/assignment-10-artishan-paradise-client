import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { CommonContext } from "../../Layout/CommonRoute";
import MyArtCart from "./MyArtCart";

const MyArt = () => {
  const { products, user } = useContext(CommonContext);

  const usersProduct = products.filter((product) => product.email === user.email);

  return (
    <div>
      <Helmet>
        <title>Artisan Paradise|My Art</title>
      </Helmet>

      <div className="mb-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mt-10 mb-5 goldenText">My Art & Craft</h2>

        <p className="lg:text-lg font-semibold w-2/3 mx-auto text-center">
          This is your Art and Craft page. Here, you can see the art you've posted. Through this website, you can also sell the art you
          create. It will encourage you to create more and more art.
        </p>
      </div>

      <div>
        {usersProduct.map((product) => (
          <MyArtCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyArt;
