import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import product1 from "../../assets/application/app-1.jpeg";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Components/reducer/ActionType/ProductAction";
import { useEffect } from "react";
import axios from "axios";

const SingleProduct = () => {
  const state = useSelector((state) => state);

  const { id } = useParams();
  

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  // sp ======  Single Product
  const sp = {
    _id: 1,
    img: product1,
    title: "SAMSUNG Galaxy Tab A7 Lite 8.7 32GB WiFi Android Tablet,",
    rating: 5,
    regularPrice: 1200,
    sellPrice: 10,
    descriptions: [
      {
        title: "LIGHT AND PORTABLE:",
        des: " With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite tablet is perfectly sized for entertainment on the go; Easy for everyone to carry and travel with, especially kids. Technology: TFT",
      },
      {
        title: "LIGHT AND PORTABLE:",
        des: " With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite tablet is perfectly sized for entertainment on the go; Easy for everyone to carry and travel with, especially kids. Technology: TFT",
      },
    ],
    note: "This device features an upgraded metal frame that helps protect against everyday hiccups; It's made to be durable, so your tablet keeps working even when handled by children’s accident-prone hands",
    eSell: true,
    quantity: 10,
  };

  const maxRating = 5;
  const rating = sp.rating;

  const pricePercentage = Math.round(
    100 - (sp?.sellPrice * 100) / sp?.regularPrice
  );

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // my cards
  const carts = [{ _id: 1 }, { _id: 2 }];

  const [cart, setCart] = useState(carts);

  const handleAddToCart = (productId) => {
    const selectedProduct = sp.find((product) => product.id === productId);
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
      alert(`Product added to cart. _ID: ${productId}`);
    } else {
      alert(`Product not found. _ID: ${productId}`);
    }
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="bg-[#BDC3C7]">
      <div className="max-w-[1200px] px-3 md:px-5 lg:px-0 mx-auto md:flex items-start pb-10 pt-10">
        {/* 1st section  for image */}
        <div className="lg:w-2/5 lg:pr-2 relative">
          <div className="sticky top-0 bottom-0 lg:w-[450px] md:w-[350px] lg:h-[350px] md:pr-2">
            <img className="rounded-lg h-full w-full" src={sp?.img} alt="" />
          </div>
        </div>

        {/* 2nd section for product details */}
        <div
          className={`${
            sp?.eSell ? "lg:w-2/5" : "lg:w-4/5"
          } my-3 md:py-0 lg:pr-6 justify-center`}
        >
          <div className=" text-lg text-black">{sp?.title}</div>
          <hr className="w-full h-[2px] my-2 bg-gray-300" />
          <div className="md:flex">
            <div className="flex items-center">
              {Array.from({ length: maxRating }, (_, index) => (
                <span key={index}>
                  {index + 1 <= rating ? (
                    <AiFillStar className="text-yellow-500" />
                  ) : (
                    <AiOutlineStar className="text-gray-500" />
                  )}
                </span>
              ))}
            </div>
            <div className="w-full md:w-[150px]">1 Ratings</div>
            {/* <div className="w-[50px] border h-[100px]">678 answered questions</div> */}
          </div>
          {sp?.eSell ? (
            <>
              <div className="md:flex ">
                <div className="text-red-500 text-xl mr-2">
                  {" "}
                  {pricePercentage}
                  {"% "}
                </div>
                <div className=" flex">
                  <p className="text-xl"> $</p>
                  <p className="text-3xl"> {sp?.sellPrice}</p>
                </div>
              </div>
              <div className=" text-lg">
                {" "}
                <del>${sp?.regularPrice}</del>
              </div>
            </>
          ) : (
            <div className="py-1">
              <button className="py-2  px-10 bg-blue-100 text-blue-900">
                {" "}
                Contact now
              </button>
            </div>
          )}
          <div>
            <hr className="w-full h-[2px] my-2 bg-gray-300" />

            <strong>About this item</strong>
            <ul>
              {sp?.descriptions.map((description, index) => (
                <li key={index}>
                  <span className="dot-icon">&#8226;</span> {/* Dot icon */}
                  <strong>{description.title}</strong> {description.des}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 3rd section for buy information  */}
        {sp?.eSell ? (
          <div className="md:w-1/5 border rounded-lg p-5">
            <div className="flex items-start">
              <p className="">$</p>
              <p className="text-2xl pt-0">{sp?.sellPrice}</p>
              <p className="">.00</p>
            </div>
            <p className="py-1">$1.30 Shipping to UAE</p>
            <p className="py-1">
              Delivery Friday, June 16. Order within 11 hrs 22 mins
            </p>
            <p className="py-1">Deliver to UAE</p>
            {sp?.quantity > 0 ? (
              <p className="py-1 text-[#007600]">In Stock</p>
            ) : (
              <p className="py-1 text-red-500"> Stock out</p>
            )}
            {sp?.quantity ? (
              <>
                <p className="py-1 text-gray-800 ">Quantity</p>
                <div className="flex justify-center items-center my-1">
                  <button
                    onClick={handleDecrement}
                    className="border px-4 py-1 font-bold bg-red-50 text-red-500"
                  >
                    -
                  </button>
                  <p className="px-10"> {quantity}</p>
                  <button
                    onClick={handleIncrement}
                    className="border px-4 py-1 font-bold bg-blue-50 text-blue-500"
                  >
                    +
                  </button>
                </div>{" "}
              </>
            ) : (
              ""
            )}

            <div className="mt-3">
              <div>
                {/* onClick={openPopup} */}
                <div className="onClick={openPopup}">
                  <button
                    onClick={() => dispatch(addToCart(sp))}
                    className={`w-full cursor-pointer py-1 text-center rounded-full ${
                      !sp?.quantity
                        ? "bg-gray-500 text-white opacity-50 cursor-not-allowed"
                        : "bg-[#ffd817]"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="">
                  <div className="max-w-[1200px] px-3 mx-auto flex flex-col items-center justify-center"></div>
                  {isPopupOpen && (
                    <div className="fixed inset-0 h-screen px-3 w-full props-bg flex items-center justify-center z-50">
                      <div className="inset-0 flex items-center justify-center  opacity-100 z-50">
                        <div className=" bg-white rounded-lg p-8 shadow-lg md:w-[600px]">
                          <div className="flex justify-end">
                            <button
                              className="p-2 bg-red-100 text-red-300 rounded-full hover:bg-red-200 hover:text-red-600"
                              onClick={closePopup}
                            >
                              <FaRegTimesCircle />
                            </button>
                          </div>
                          {/* Popup content goes here */}
                          <div className="mx-auto flex flex-col w-3xl lg:max-w-[1000px]">
                            <ul className="flex flex-col divide-y divide-gray-700">
                              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                  <img
                                    className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                                    alt="Polaroid camera"
                                  />
                                  <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                      <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                          Polaroid camera
                                        </h3>
                                        <p className="text-sm dark:text-gray-400">
                                          Classic
                                        </p>
                                      </div>
                                      <div className="text-right">
                                        <p className="text-lg font-semibold">
                                          59.99€
                                        </p>
                                        <p className="text-sm line-through dark:text-gray-600">
                                          75.50€
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="space-y-1 text-right">
                              <p>
                                Total amount:
                                <span className="font-semibold">357 €</span>
                              </p>
                              <p className="text-sm dark:text-gray-400">
                                Not including taxes and shipping costs
                              </p>
                            </div>
                            <div className="flex justify-end space-x-4">
                              <Link
                                to="../../../my-carts"
                                type="button"
                                className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                              >
                                Go to cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(sp.id)}
                className={`w-full cursor-pointer py-1 mt-2 text-center rounded-full ${
                  !sp?.quantity
                    ? "bg-gray-500 text-white opacity-50 cursor-not-allowed"
                    : "bg-[#ffa51f]"
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* this is a my cards */}
    </div>
  );
};

export default SingleProduct;
