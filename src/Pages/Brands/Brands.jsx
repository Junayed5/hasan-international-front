import BrandCard from "./BrandCard";
import brand1 from "../../assets/brand/brand-1.jpg";
import brand2 from "../../assets/brand/brand-2.jpg";
import brand3 from "../../assets/brand/brand-3.jpg";
import brand4 from "../../assets/brand/brand-4.jpg";
import brand5 from "../../assets/brand/brand-5.jpg";
import brand6 from "../../assets/brand/brand-6.jpg";
import brand7 from "../../assets/brand/brand-7.jpg";
import brand8 from "../../assets/brand/brand-8.jpg";
import brand9 from "../../assets/brand/brand-9.jpg";
import brand10 from "../../assets/brand/brand-10.jpg";
import brand11 from "../../assets/brand/brand-11.jpg";

const Brand = () => {
  const brands = [
    { id: 1, img: brand2, title: "brand 2" },
    { id: 2, img: brand3, title: "brand 3" },
    { id: 3, img: brand4, title: "brand 4" },
    { id: 4, img: brand5, title: "brand 5" },
    { id: 5, img: brand6, title: "brand 6" },
    { id: 6, img: brand1, title: "brand 1" },
    { id: 7, img: brand1, title: "brand 1" },
    { id: 8, img: brand7, title: "brand 7" },
    { id: 9, img: brand8, title: "brand 8" },
    { id: 10, img: brand9, title: "brand 9" },
    { id: 11, img: brand10, title: "brand 10" },
    { id: 12, img: brand11, title: "brand 11" },
  ];

  return (
    <>
      {/* this is a Brand section */}
      <div className="py-6">
        <div className="pb-4">
          <div className="pb-4 text-center max-w-[600px] mx-auto">
            <h2 className="my_h2">Our Brand</h2>
          </div>
          <div className="grid grid-cols-4 bg-[#a67ba1] rounded-md px-3 md:px-5 md:grid-cols-6 gap-4 py-3 lg:flex items-center justify-center">
            {/* Brand card */}
            {brands.map((brand) => (
              <BrandCard brand={brand} key={brand.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
