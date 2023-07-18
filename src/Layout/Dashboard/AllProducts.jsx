import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/v1/product`);
        // console.log(response);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [products]);

  const deleteProduct = (id) => {
    console.log(id);

    const deleteSelectedProduct = async () => {
      try {
        const response = await axios.delete(`/v1/product/${id}`);
        console.log(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    deleteSelectedProduct();
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">All Products</h2>
      <div className="overflow-x-auto"></div>
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="dark:bg-gray-700">
            <th className="p-3">SL</th>
            <th className="p-3">Name</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Update</th>
            <th className="p-3">Delete</th>
          </tr>
        </thead>
        <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
          {products === undefined
            ? ""
            : products.map((product, i) => (
                <tr key={i}>
                  <td className="px-3 font-medium dark:text-gray-400 text-base">
                    {i + 1}
                  </td>
                  <td className="px-3 py-2 text-base">
                    <p>{product?.name}</p>
                  </td>
                  <td className="px-3 py-2 text-base">
                    <p>{product?.quantity}</p>
                  </td>
                  <td className="px-3 py-2 text-base">
                    <Link to={`/dashboard/update-product/${product?._id}`}><BsPencilSquare className="pl-4 h-fit w-fit" /></Link>
                  </td>
                  <td className="px-3 py-2 text-lg">
                    <RiDeleteBin5Fill
                      onClick={() => deleteProduct(product?._id)}
                      className="pl-4 h-fit w-fit cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
