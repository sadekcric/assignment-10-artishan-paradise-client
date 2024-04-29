import { useContext } from "react";

import { CommonContext } from "../../../Layout/CommonRoute";
import { Link } from "react-router-dom";

const Categories = () => {
  const { setCategoryProduct, setLoader } = useContext(CommonContext);

  const handleCategory = (category) => {
    // console.log("I am Clicked");
    setLoader(true);
    fetch(`https://artisan-paradise-server.vercel.app/products-category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="p-3 container mx-auto">
      <div>
        <h2 className="text-3xl lg:text-5xl mt-10 lg:mt-24 text-center font-bold goldenText">CATEGORIES</h2>
        <p className="text-center lg:w-2/3 lg:mx-auto font-semibold lg:text-lg goldenText">
          On my website's categories page, you'll find detailed information about different categories related to art and craft. This page
          will showcase a list of six special categories, with each category displaying its name, image, and other relevant information.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Link to="/categoryCart">
          <div
            onClick={() => handleCategory("Landscape Painting")}
            className=" hover:-translate-y-2 transition  shadow-xl image-full relative"
          >
            <div>
              <img className="h-[250px] w-full" src="https://i.ibb.co/MDhwxZH/1-07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg" alt="" />
            </div>

            <div className="card-body absolute top-0 bg-[#FFF5E0] bg-opacity-50 h-full goldenText font-semibold">
              <h2 className="text-xl lg:text-3xl font-bold ">Landscape Painting</h2>
              <p className="lg:text-lg ">
                "Morning Glow" depicts a tranquil countryside at dawn, with rolling hills, a winding stream, and distant mountains.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/categoryCart">
          <div
            onClick={() => handleCategory("Portrait Drawing")}
            className=" hover:-translate-y-2 transition  shadow-xl image-full relative"
          >
            <img className="h-[250px] w-full" src="https://i.ibb.co/vDSbgmP/female-portrait-final-600-80.jpg" alt="" />

            <div className="card-body absolute top-0 bg-[#FFF5E0] bg-opacity-50 h-full goldenText font-semibold">
              <h2 className="text-xl lg:text-3xl font-bold ">Portrait Drawing</h2>
              <p className="lg:text-lg ">
                The subject exudes a sense of quiet confidence, with eyes that seem to hold a universe of untold stories.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/categoryCart">
          <div
            onClick={() => handleCategory("Watercolor Painting")}
            className=" hover:-translate-y-2 transition  shadow-xl image-full relative"
          >
            <img className="h-[250px] w-full" src="https://i.ibb.co/M1DBr9q/v1-txt2img-50f1a01c-e2b6-426a-9a19-0c24174c9b7c.png" alt="" />

            <div className="card-body absolute top-0 bg-[#FFF5E0] bg-opacity-50 h-full goldenText font-semibold">
              <h2 className="text-xl lg:text-3xl font-bold ">Watercolor Painting</h2>
              <p className="lg:text-lg ">
                "Tranquil Waters" is a watercolor painting that captures the serene beauty of a peaceful lake nestled among towering trees.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/categoryCart">
          <div onClick={() => handleCategory("Oil Painting")} className=" hover:-translate-y-2 transition  shadow-xl image-full relative">
            <img className="h-[250px] w-full" src="https://i.ibb.co/kGM5Yc4/71t-BSs-Zgw1-L-AC-SL1500.jpg" alt="" />

            <div className="card-body absolute top-0 bg-[#FFF5E0] bg-opacity-50 h-full goldenText font-semibold">
              <h2 className="text-xl lg:text-3xl font-bold ">Oil Painting</h2>
              <p className="lg:text-lg ">
                In "Majestic Horizons," the artist brings to life a breathtaking landscape with the rich textures and vibrant colors of oil
                paint.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/categoryCart">
          <div
            onClick={() => handleCategory("Charcoal Sketching")}
            className=" hover:-translate-y-2 transition  shadow-xl image-full relative"
          >
            <img className="h-[250px] w-full" src="https://i.ibb.co/qkPXRyC/Whats-App-Image-2022-03-30-at-10-15-19-PM.jpg" alt="" />

            <div className="card-body absolute top-0 bg-[#FFF5E0] bg-opacity-50 h-full goldenText font-semibold">
              <h2 className="text-xl lg:text-3xl font-bold ">Charcoal Sketching</h2>
              <p className="lg:text-lg ">
                "Whispers of Shadows" is a charcoal sketch that captures the fleeting beauty of a moment in time.{" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/categoryCart">
          <div
            onClick={() => handleCategory("Cartoon Drawing")}
            className=" hover:-translate-y-2 transition  shadow-xl image-full relative"
          >
            <img className="h-[250px] w-full" src="https://i.ibb.co/61pqbfw/Learn-to-Draw-Cartoons.jpg" alt="" />

            <div className="card-body absolute top-0 bg-[#FFF5E0] bg-opacity-50 h-full goldenText font-semibold">
              <h2 className="text-xl lg:text-3xl font-bold ">Cartoon Drawing</h2>
              <p className="lg:text-lg ">"Joyful Jamboree" is a whimsical cartoon drawing bursting with color and energy. </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
