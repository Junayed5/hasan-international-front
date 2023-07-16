import { useState } from "react";
import Category from "../../Components/Category/Category";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
// import { products } from "./product.config";
import { categories } from "../Home/Category/Category.config";
import { ProductsAxiosSwr } from "../../Components/Fetch/Swe";
import { useEffect } from "react";
import axios from "axios";

const Product = () => {
  // call products api
  const product = ProductsAxiosSwr("products");
  const [products, setProduct] = useState([]);
  //  const products = product?.data?.products
  const isLoading = product?.isLoading;

  const dataArray = Array.from({ length: 16 });

  const totalPages = 5;
  const currentPage = 3;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/v1/product`);
        console.log(response)
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  console.log(products)

  const handlePageClick = () => {
    console;
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#bdc3c7] pt-3 ">
      <div className=" bg-[#bdc3c7] ">
        <h2 className=" my_h2 text-[#5f27cd] ">Product</h2>
        <div className="lg:hidden px-3 md:px-5 -mt-10 ">
          <button className="text-xl" onClick={toggleOpen}>
            {isOpen ? <FiXCircle className="text-red-500" /> : <FiMenu />}
          </button>
          {isOpen && (
            <div className="absolute">
              <div
                className=" top-0 app px-2 w-full left-0 relative h-[56vh] md:h-[350px] lg:h-[75vh] bg-white mr-1"
                style={{ width: "calc(100% - 12px)" }}
              >
                {categories.map((category, i) => (
                  <Category
                    key={i}
                    name={category.mainCategory}
                    subCategories={category.subCategories}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 max-w-[1200px] mx-auto flex">
        <div className="category hidden lg:block w-[300px]">
          <div className="app px-2 relative h-[75vh] bg-white mr-1">
            {categories.map((category, i) => (
              <Category
                key={i}
                name={category.mainCategory}
                subCategories={category.subCategories}
              />
            ))}
          </div>
        </div>
        <div className="product w-full lg:ml-2 mb-6 px-3 md:px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-justify-between">
            {isLoading
              ? dataArray.map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded shadow animate-pulse"
                  >
                    <div className="bg-gray-300 mb-2 rounded h-[150px] animate-pulse w-full"></div>
                    <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
                  </div>
                ))
              : products.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white p-4 rounded shadow "
                  >
                    <Link
                      to={`/single-product/${product._id}`}
                      key={product._id}
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-auto mb-2"
                      />
                    </Link>
                    <h3 className="text-center text-lg font-bold">
                      {product.title}
                    </h3>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center pb-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mr-2 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
