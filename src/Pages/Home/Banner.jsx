import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Typewriter } from "react-simple-typewriter";

import { Pagination, Autoplay } from "swiper/modules";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:max-h-[800px] min-h-screen">
            <img src={slider1} alt="" className="w-full min-h-screen lg:max-h-[800px]" />
            <div className="bg-black bg-opacity-10 absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center p-3">
              <h1 className="lg:w-1/2 lg:mx-auto text-center lg:text-start">
                <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#996515]">Brushstrokes & Beyond, </span>
                <br />

                <span className="text-3xl md:text-4xl lg:text-6xl font-bold goldenText  pt-3 inline-block">
                  <Typewriter
                    words={["Your Destination for Fine Art!"]}
                    loop={"infinitely"}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p className="lg:w-1/2 lg:mx-auto text-center lg:text-left goldenText text-md lg:text-lg lg:font-semibold mt-5">
                Explore a world of colors and creativity at Brushstrokes & Beyond. Find exquisite paintings and drawings that inspire your
                imagination.{" "}
              </p>

              <div className="lg:w-1/2 lg:mx-auto mt-10">
                <Link to="/register" className="relative px-8 py-5 font-medium text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 goldenBG group-hover:goldenBG2 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 goldenBG2 group-hover:goldenBG group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 goldenBG -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 goldenBG2 -rotate-12"></span>
                  <span className="relative font-semibold text-lg goldenText">REGISTER</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-screen lg:max-h-[800px] relative">
            <img src={slider2} alt="" className="w-full min-h-screen lg:max-h-[800px] object-cover " />
            <div className="bg-black bg-opacity-10 absolute top-0 left-0 h-full w-full flex flex-col justify-center p-3">
              <h1 className="lg:max-w-1/2 text-center lg:text-start container mx-auto">
                <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#996515] ">Canvas Chronicles, </span>
                <br />

                <span className="text-3xl md:text-4xl lg:text-6xl font-bold goldenText  pt-3 inline-block">
                  <Typewriter
                    words={["Where Every Stroke Tells a Story!"]}
                    loop={"infinitely"}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p className=" container mx-auto text-center lg:text-left goldenText text-md lg:text-lg lg:font-semibold mt-5">
                Step into Canvas Chronicles and embark on a visual journey. Discover captivating paintings and drawings
              </p>
              <p className="container mx-auto text-center lg:text-left goldenText text-md lg:text-lg lg:font-semibold">
                that speak volumes. Unleash your inner artist today!
              </p>

              <div className="lg:max-w-1/2 text-center lg:text-start container mx-auto mt-10">
                <Link to="/register" className="relative px-8 py-5 font-medium text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 goldenBG group-hover:goldenBG2 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 goldenBG2 group-hover:goldenBG group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 goldenBG -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 goldenBG2 -rotate-12"></span>
                  <span className="relative font-semibold text-lg goldenText">REGISTER</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:max-h-[800px] min-h-screen relative">
            <img src={slider3} alt="" className="w-full lg:max-h-[800px] object-cover min-h-screen" />
            <div className="bg-[#AF8260] bg-opacity-30 absolute top-0 left-0 h-full w-full flex flex-col justify-center items-end p-3">
              <h1 className="lg:max-w-1/2 container mx-auto text-center  lg:text-right">
                <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#996515] ">Sketch & Stroke Gallery, </span>
                <br />

                <span className="text-3xl md:text-4xl lg:text-6xl font-bold goldenText  pt-3 inline-block">
                  <Typewriter
                    words={["Where Masterpieces Await!"]}
                    loop={"infinitely"}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p className="text-center container mx-auto lg:text-right goldenText text-md lg:text-lg lg:font-semibold mt-5">
                At Sketch & Stroke Gallery, discover a treasure trove of paintings and drawings. Each piece is a masterpiece
              </p>
              <p className="container mx-auto goldenText text-md lg:text-lg lg:font-semibold text-right">
                {" "}
                waiting to adorn your walls. Elevate your space with elegance and artistry.
              </p>

              <div className="lg:max-w-1/2 text-center lg:text-right container mx-auto mt-10">
                <Link to="/register" className="relative px-8 py-5 font-medium text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 goldenBG group-hover:goldenBG2 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 goldenBG2 group-hover:goldenBG group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 goldenBG -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 goldenBG2 -rotate-12"></span>
                  <span className="relative font-semibold text-lg goldenText">REGISTER</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
