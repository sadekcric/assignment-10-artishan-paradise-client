import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { CommonContext } from "../../Layout/CommonRoute";
// import { CommonContext } from "../../Layout/CommonRoute";

const Details = () => {
  const loadedData = useLoaderData();

  const { setLoaded } = useContext(CommonContext);
  setLoaded(false);

  const { category, customization, details, displayName, email, name, photo, photoURL, price, processingTime, rating, stock } = loadedData;

  const byeProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Purchase this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, buy it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: " PURCHASED!",
          text: "This Painting Purchase Successfully.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-3 goldenText font-semibold">
      <Helmet>
        <title>Artisan Paradise|Details</title>
      </Helmet>
      <div className="mb-10">
        <h2 className="text-3xl lg:text-5xl text-center mt-10 mb-3">DETAILS</h2>
        <p className="w-2/3 mx-auto lg:text-lg">
          Thank you for your interest in our product! Your curiosity is the spark that ignites our passion for innovation and excellence.
          We're truly grateful for the opportunity to share with you something we're so passionate about.
        </p>
      </div>
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img src={photo} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
              </div>

              <div className="px-4 md:px-8 lg:px-12">
                <button onClick={byeProduct} className="relative w-full py-3 font-medium text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 goldenBG group-hover:goldenBG2 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 goldenBG2 group-hover:goldenBG group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 goldenBG -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 goldenBG2 -rotate-12"></span>
                  <span className="relative font-semibold text-lg goldenText">BUY NOW</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
              <div>
                <h2 className="text-xl lg:text-3xl font-semibold">{name}</h2>

                <p className="text-lg text-[#af8260]">{category}</p>
              </div>

              <p className="text-lg">{details}</p>

              <div>
                <p className="text-lg goldenBG2 flex border-2 border-b-0 goldenBorder px-6 py-2">
                  <span className="font-bold pr-2 w-2/3">Customization Status:</span> {customization} customized
                </p>

                <p className="text-lg border-2 flex border-b-0 goldenBorder px-6 py-2 bg-[#FFF5E0]">
                  <span className="font-bold w-2/3">Stock:</span> {stock}
                </p>

                <p className="text-lg goldenBG2 border-2 flex border-b-0 goldenBorder px-6 py-2">
                  <span className="font-bold w-2/3">Processing Time:</span> {processingTime}
                </p>

                <p className="text-lg border-2 flex border-b-0 goldenBorder px-6 py-2 bg-[#FFF5E0]">
                  <span className="font-bold w-2/3">Average Rating:</span> {rating}
                </p>

                <p className="text-lg goldenBG2 text-red-700 flex border-2 goldenBorder px-6 py-2">
                  <span className="font-bold w-2/3">Price:</span> $ {price}
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-3xl font-semibold ">Painter Information</h2>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-lg mt-3 overflow-hidden">
                    <img className="h-full w-full" src={photoURL} alt="" />
                  </div>

                  <div>
                    <p className="text-lg">{displayName}</p>
                    <p className="text-lg">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
