import "./OurProductCard.css";

const OurProductCard = () => {
  return (
    <>
    {/* our product card */}
      <div className="card   border hover:shadow-xl">
    {/* our product card figure */}
        <figure>
          <div className="image-container">
            <img
              src="https://e7.pngegg.com/pngimages/562/852/png-clipart-hoodie-t-shirt-clothing-bluza-sweater-t-shirt-black-top.png"
              alt="car!"
              />
            <div className="image-overlay">
              <div className="icons absolute bottom-5">
                <span className="icon add-card">Add to Card</span>
                <span className="icon add-wishlist">Add to Wishlist</span>
              </div>
            </div>
          </div>
        </figure>
              {/* our product card body */}
        <div className="card-body">
          <h2 className="card-title">This is good product in this world</h2>
          <div className="flex justify-between">
            <p>Price : $200</p>
            <p className="text-end">Rating : 5.3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProductCard;
