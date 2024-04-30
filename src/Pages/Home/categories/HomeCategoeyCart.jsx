import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HomeCategoeyCart = ({ cat }) => {
  const { subCategory, photo, details } = cat;
  return (
    <div>
      <Link to={`products/${subCategory}`}>
        <div className=" hover:-translate-y-2 transition  shadow-xl image-full relative">
          <img className="h-[250px] w-full" src={photo} alt="" />

          <div className="card-body absolute top-0 w-full bg-[#FFF5E0] bg-opacity-50 h-full goldenText font-semibold">
            <h2 className="text-xl lg:text-3xl font-bold ">{subCategory}</h2>
            <p className="lg:text-lg ">{details}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCategoeyCart;

HomeCategoeyCart.propTypes = {
  cat: PropTypes.object,
};
