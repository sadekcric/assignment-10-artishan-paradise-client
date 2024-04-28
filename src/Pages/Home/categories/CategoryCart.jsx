import { useContext } from "react";
import { CommonContext } from "../../../Layout/CommonRoute";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCart = ({ product }) => {
  const { setLoaded } = useContext(CommonContext);
  const { category, details, photo, _id } = product;

  return (
    <div className="goldenText bg-[#FFF5E0] border-4 border-transparent hover:border-[#FFF5E0] transition rounded-lg">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold dark:text-violet-600">{category}</h3>

            <p className="leading-snug dark:text-gray-600 md:text-lg font-semibold">{details}</p>

            <div>
              <div className="text-center mt-8 mb-5">
                <Link onClick={() => setLoaded(true)} to={`/details/${_id}`} className="relative px-8 py-5 font-medium text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 goldenBG group-hover:goldenBG group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 goldenBG2 group-hover:goldenBG group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 goldenBG -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 goldenBG2 -rotate-12"></span>
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

export default CategoryCart;
//
CategoryCart.propTypes = {
  product: PropTypes.object,
};
