import "./Brands.css";

const BrandCard = ({brand}) => {
  return (
    <>
      <div className="rounded card">
        {/* Brand card  figure*/}

        <figure>
          <div className="rounded-lg  image-container ">
            <img
            className="rounded-lg h-20 "
            src={brand.img}
            alt="car!"
            />
            {/* Brand card  button*/}
            <div className="brand-image-overlay">
              <div className="absolute bottom-0 w-full">
                <button className="w-full bg-[#01B26F] text-center font-semibold p-2 text-xl">{brand.title}</button>
              </div>
            </div>
          </div>
        </figure>
        
      </div>
    </>
  );
};

export default BrandCard;
