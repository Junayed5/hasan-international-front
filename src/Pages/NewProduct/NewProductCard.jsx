import "./NewProductCard.css";
import PropTypes from  "prop-types";

const NewProductCard = ({ product }) => {
  return (
    <>
      {/* new product card  */}
      <div className="card rounded-2xl mx-1 border hover:shadow-xl">
        {/* new product card  figure */}
        <figure>
          <div >
            <img className="w-full rounded-t-2xl" src={product?.img} alt="car!" />
          </div>
        </figure>
        <button className="w-full mt-1 text-center rounded-2xl rounded-t-none  bg-blue-500 b p-2 text-xl text-white ">
          See more
        </button>
      </div>
    </>
  );
};

NewProductCard.propTypes = {
  product : PropTypes.any.isRequired
}

export default NewProductCard;
