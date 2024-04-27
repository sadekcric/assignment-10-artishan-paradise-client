import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonContext } from "../../Layout/CommonRoute";
import MyArtCart from "./MyArtCart";
import { FaCaretDown } from "react-icons/fa";

const MyArt = () => {
  const { user } = useContext(CommonContext);
  const [myArt, setMyArt] = useState([]);
  const [sort, setSort] = useState([]);
  const [myProduct, setMyProduct] = useState([]);

  useEffect(() => {
    fetch(`https://artisan-paradise-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setMyArt(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const usersProduct = myArt.filter((product) => product.email === user.email);
    setSort(usersProduct);
    setMyProduct(usersProduct);
  }, [myArt]);

  const handleAll = () => {
    const All = myArt.filter((product) => product.email === user.email);

    setSort(All);
  };
  const handleYes = () => {
    const yes = myProduct.filter((product) => product.customization === "Yes");

    setSort(yes);
  };
  const handleNo = () => {
    const no = myProduct.filter((product) => product.customization === "No");

    setSort(no);
  };

  return (
    <div className="p-3">
      <Helmet>
        <title>Artisan Paradise|My Art</title>
      </Helmet>

      <div className="mb-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mt-10 mb-5 goldenText">My Art & Craft</h2>

        <p className="lg:text-lg font-semibold lg:w-2/3 lg:mx-auto lg:text-center">
          This is your Art and Craft page. Here, you can see the art you've posted. Through this website, you can also sell the art you
          create. It will encourage you to create more and more art.
        </p>
      </div>

      <div className="text-center mb-10">
        <div className="dropdown goldenBG2 rounded-lg">
          <div tabIndex={0} role="button" className="px-6 py-3  m-1 goldenBG2 goldenText">
            <div className="flex items-center gap-4">
              <span>Customization </span>
              <span>
                <FaCaretDown />
              </span>
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 goldenBG rounded-lg mt-1 text-white font-semibold text-lg w-[190px]">
            <li>
              <button onClick={handleAll}>All</button>
            </li>
            <li>
              <button onClick={handleYes}>Yes</button>
            </li>
            <li>
              <button onClick={handleNo}>No</button>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {sort.map((product) => (
          <MyArtCart key={product._id} product={product} setSort={setSort} sort={sort} />
        ))}
      </div>
    </div>
  );
};

export default MyArt;
