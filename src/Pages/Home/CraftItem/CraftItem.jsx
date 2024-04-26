import PropTypes from "prop-types";
import { FaStarHalfAlt } from "react-icons/fa";

const CraftItem = ({ product }) => {
  const { category, customization, details, displayName, email, name, photo, photoURL, price, processingTime, rating, stock, _id } =
    product;

  return (
    <div className="goldenText goldenBG2 border-4 border-transparent hover:border-[#FFF5E0] transition rounded-lg">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
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
