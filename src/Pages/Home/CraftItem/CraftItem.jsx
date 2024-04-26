import PropTypes from "prop-types";

const CraftItem = ({ product }) => {
  const { category, customization, details, displayName, email, name, photo, photoURL, price, processingTime, rating, stock, _id } =
    product;

  return <div></div>;
};

export default CraftItem;

CraftItem.propTypes = {
  product: PropTypes.object,
};
