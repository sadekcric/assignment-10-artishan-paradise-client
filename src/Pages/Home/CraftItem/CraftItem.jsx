import PropTypes from "prop-types";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CommonContext } from "../../../Layout/CommonRoute";

const CraftItem = ({ product }) => {
  const { category, details, displayName, name, photo, photoURL, price, rating, stock, _id } = product;

  const { loaded, setLoaded, user } = useContext(CommonContext);

  if (loaded) {
    if (user) {
      return (
        <div className="fixed top-[50%] left-[50%] z-50">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG2"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
          </div>
        </div>
      );
    } else {
      setLoaded(false);
    }
  }

  return (
    <div className="goldenText goldenBG2 border-4 border-transparent hover:border-[#FFF5E0] transition rounded-lg">
      <Helmet>
        <title>Artisan Paradise|Home</title>
      </Helmet>
      <div className="max-w-lg p-4  dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center gap-2">
            <div className="w-8 md:w-12 h-10 md:h-12 rounded-full">
              <img className="w-full h-full rounded-full" src={photoURL} alt="" />
            </div>
            <div>
              <p className="goldenText font-semibold text-sm">{displayName}</p>
              <p className="goldenText font-semibold text-sm">{stock}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaStarHalfAlt className="text-yellow-600 text-lg font-semibold" />
            </span>
            <span className="goldenText font-semibold">{rating}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl lg:text-2xl font-semibold dark:text-violet-600">{name}</h3>
            </a>
            <div className="flex justify-between bg-[#FFF5E0] rounded-lg shadow-xl px-2 lg:px-4 py-2">
              <p className="md:text-lg font-semibold">{category}</p>
              <p className="md:text-lg font-semibold text-red-600">${price}</p>
            </div>
            <p className="leading-snug dark:text-gray-600 md:text-lg font-semibold">{details}</p>

            <div>
              <div className="text-center mt-8 mb-5">
                <Link onClick={() => setLoaded(true)} to={`/details/${_id}`} className="relative px-8 py-5 font-medium text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 goldenBG group-hover:goldenBG group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#FFF5E0] group-hover:goldenBG group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 goldenBG -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#FFF5E0] -rotate-12"></span>
                  <span className="relative font-semibold text-lg goldenText">View Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;

CraftItem.propTypes = {
  product: PropTypes.object,
};
