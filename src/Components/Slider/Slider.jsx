import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Navigation } from "swiper";

const  Slider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="h-[100vh]">
          <img
            src="https://e7.pngegg.com/pngimages/562/852/png-clipart-hoodie-t-shirt-clothing-bluza-sweater-t-shirt-black-top.png"
            alt="car!"
          />
          <div className="slide-content flex">
            <div className="w-3/5"></div>
            <div className="text-end ">
              <h2 className="text-green-500 text-5xl font-bold  leading-none">
                17 YEARS CRAFTSMANSHIP
              </h2>

              <p className="mt-4 mb-8">
                Sustainably we improve the health of people around the world.
                Sustainably we improve the health of people around the world.
                Work
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[100vh]">
          <img
            src="https://e7.pngegg.com/pngimages/562/852/png-clipart-hoodie-t-shirt-clothing-bluza-sweater-t-shirt-black-top.png"
            alt="car!"
          />
          <div className="slide-content flex">
            <div className="w-3/5"></div>
            <div className="text-end ">
              <h2 className="text-green-500 text-5xl font-bold  leading-none">
                17 YEARS CRAFTSMANSHIP
              </h2>

              <p className="mt-4 mb-8">
                Sustainably we improve the health of people around the world.
                Sustainably we improve the health of people around the world.
                Work
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider