import OurProductCard from "./OurProductCard";

const OurProduct = () => {
  return (
    <div className="mt-20">
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="my_h2">More Selling Products</h2>
        <p className="text-lg">
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10 my-10">
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
        <OurProductCard/>
      </div>
    </div>
  );
};

export default OurProduct;
