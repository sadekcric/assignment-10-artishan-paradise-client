import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommonContext } from "../../Layout/CommonRoute";

const AllCartTable = ({ product, index }) => {
  const { category, customization, name, photo, price, processingTime, rating, stock, _id } = product;

  const { loaded, setLoaded } = useContext(CommonContext);

  if (loaded) {
    return (
      <div className="fixed top-[50%] left-[50%] z-50">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG2"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600 goldenBG"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <tr className="border-2 goldenBorder border-b-0 text-lg font-semibold">
        <td className="p-2">{index + 1}</td>
        <td>{name}</td>
        <td>{customization}</td>
        <td>${price}</td>
        <td>{rating}</td>
        <td>
          <Link onClick={() => setLoaded(true)} className="goldenBG2 px-4 py-1 rounded-md" to={`/details/${_id}`}>
            details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllCartTable;
