import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateForm = () => {
  const { id } = useParams();
  const [error, setError] = useState();
  const [product, setProduct] = useState({})
  console.log(product);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/v1/product/${id}`);
        console.log(response);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.put(`/v1/product/${id}`, data,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `barer ${localStorage.getItem('token')}`
        }
      });
      console.log(response);
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto p-6">
      <div className="text-2xl text-red-500 text-center mb-2">
        <h1>Product Add</h1>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image Link</label>
        <input
          {...register("image")}
          type="text"
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Title</label>
        <input
          {...register("name")}
          type="text"
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Rating</label>
        <input
          {...register("rating")}
          type="number"
          step="0.1"
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Regular Price</label>
        <input
          {...register("regularPrice")}
          type="number"
          step="0.01"
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Sell Price</label>
        <input
          {...register("sellPrice")}
          type="number"
          step="0.01"
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Descriptions</label>
        <textarea
          {...register("description")}
          className="w-full px-4 py-2 border rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <textarea
          {...register("category")}
          className="w-full px-4 py-2 border rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2">eSell</label>
        <select
          {...register("eSell")}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Quantity</label>
        <input
          {...register("quantity")}
          type="number"
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Submit
      </button>
    </form>
  );
};

export default UpdateForm;
