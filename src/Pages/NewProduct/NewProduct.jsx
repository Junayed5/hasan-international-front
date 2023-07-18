import NewProductCard from "./NewProductCard";
import { useEffect, useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import product1 from "../../assets/new-products/product-1.jpeg";
import product2 from "../../assets/new-products/product-2.jpeg";
import product3 from "../../assets/new-products/product-3.jpeg";
import product4 from "../../assets/new-products/product-4.jpeg";
import product5 from "../../assets/new-products/product-5.jpeg";
import product6 from "../../assets/new-products/product-6.jpeg";
import product7 from "../../assets/new-products/product-7.jpeg";
import { useState } from "react";
import axios from "axios";

SwiperCore.use([Navigation]);

export const NewProduct = () => {
  const [products, setProduct] = useState([]);
  console.log(products);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/v1/product`);
        console.log(response)
        const slideArray = response.data.slice(0,11)
        setProduct(slideArray);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);
  // const products = [
  //   { id: 1, img: product1 },
  //   { id: 2, img: product2 },
  //   { id: 3, img: product3 },
  //   { id: 4, img: product4 },
  //   { id: 5, img: product5 },
  //   { id: 6, img: product6 },
  //   { id: 7, img: product7 },
  // ];

  const swiperRefDes = useRef(null);

  useEffect(() => {
    const swiperInstance = new SwiperCore(".swiper", {
      slidesPerView: getSlidesPerView(),
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      modules: [Autoplay, Navigation],
    });

    function getSlidesPerView() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        return 4;
      } else if (screenWidth >= 768) {
        return 3;
      } else if (screenWidth >= 500) {
        return 2;
      } else {
        return 1;
      }
    }

    window.addEventListener("resize", handleResize);

    function handleResize() {
      const slidesPerView = getSlidesPerView();
      swiperInstance.params.slidesPerView = slidesPerView;
      swiperInstance.update();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pt-4 px-3 md:px-5 lg:px-0">
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="my_h2">New Products</h2>
      </div>
      <div className="mt-4">
        <Swiper
          className="h-full sm:h-auto md:h-full lg:h-auto xl:h-full"
          ref={swiperRefDes}
        >
          <div className="swiper-wrapper">
            {/* show last added 10 products */}
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <NewProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};
