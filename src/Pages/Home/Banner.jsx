import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

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
          <div className="max-h-[700px] ">
            <img src={slider1} alt="" className="w-full max-h-[700px]" />
            <div className="bg-[#AF8260] bg-opacity-30 absolute top-0 left-0 h-full w-full"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-h-[700px] relative">
            <img src={slider2} alt="" className="w-full max-h-[700px] object-cover" />
            <div className="bg-[#AF8260] bg-opacity-30 absolute top-0 left-0 h-full w-full"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-h-[700px] relative">
            <img src={slider3} alt="" className="w-full max-h-[700px] object-cover" />
            <div className="bg-[#AF8260] bg-opacity-30 absolute top-0 left-0 h-full w-full"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
