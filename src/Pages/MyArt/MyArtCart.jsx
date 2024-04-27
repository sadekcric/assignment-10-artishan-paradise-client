import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useContext } from "react";
import { CommonContext } from "../../Layout/CommonRoute";
import Swal from "sweetalert2";
const MyArtCart = ({ product, setSort, sort }) => {
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, buy it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artisan-paradise-server.vercel.app/products/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const remainingItem = sort.filter((item) => item._id !== id);
            setSort(remainingItem);
            Swal.fire({
              title: " DELETED!",
              text: "This Painting Delete Successfully.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 mb-5 ">
        <div className="container flex flex-col mx-auto lg:flex-row border-2 goldenBorder rounded-lg">
          <div className="w-full lg:w-1/3">
            <img className="rounded-l-lg h-full" src={photo} alt="" />
          </div>

          <div className="flex  flex-col w-full p-6 lg:w-2/3 goldenBG2 md:p-8 lg:p-12 rounded-r-lg">
            <div>
              <h2 className="text-xl lg:text-3xl goldenText font-semibold">{name}</h2>

              <p className="text-lg text-[#af8260] font-semibold">{category}</p>
            </div>

            <div className="flex flex-col lg:items-center lg:justify-between lg:flex-row">
              <div className="mt-3 lg:w-[70%]">
                <p className="lg:text-lg font-semibold goldenBG flex border-2 border-b-0 goldenBorder px-6 py-2">
                  <span className=" pr-2 w-2/3">Customization Status:</span> {customization} customized
                </p>

                <p className="lg:text-lg font-semibold border-2 flex border-b-0 goldenBorder px-6 py-2 bg-[#FFF5E0]">
                  <span className=" w-2/3">Stock:</span> {stock}
                </p>

                <p className="lg:text-lg font-semibold goldenBG border-2 flex border-b-0 goldenBorder px-6 py-2">
                  <span className=" w-2/3">Processing Time:</span> {processingTime}
                </p>

                <p className="lg:text-lg font-semibold border-2 flex border-b-0 goldenBorder px-6 py-2 bg-[#FFF5E0]">
                  <span className=" w-2/3">Average Rating:</span> {rating}
                </p>

                <p className="lg:text-lg font-semibold goldenBG text-red-700 flex border-2 goldenBorder px-6 py-2">
                  <span className=" w-2/3">Price:</span> $ {price}
                </p>
              </div>

              <div className="lg:space-y-3 mt-5 lg:mt-0 flex lg:block gap-5 items-center justify-center">
                <Link
                  to={`/update/${_id}`}
                  onClick={() => setLoaded(true)}
                  className="text-lg flex items-center gap-2 font-semibold goldenText bg-[#FFF5E0] w-32 justify-center py-2 rounded-md shadow-lg"
                >
                  {" "}
                  <span>
                    <FiEdit />
                  </span>{" "}
                  Update
                </Link>
                <button
                  onClick={() => {
                    handleDelete(_id);
                  }}
                  className="text-lg flex items-center gap-2 font-semibold goldenText bg-[#FFF5E0] w-32 justify-center py-2 rounded-md shadow-lg"
                >
                  {" "}
                  <span>
                    <RiDeleteBin3Line />
                  </span>{" "}
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyArtCart;

MyArtCart.propTypes = {
  product: PropTypes.object,
  sort: PropTypes.array,
  setSort: PropTypes.func,
};
