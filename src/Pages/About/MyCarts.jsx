import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddedSingleProduct from "../../Components/AddedSingleProduct";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const MyCarts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState();
  console.log(error);
  const myAddedProducts = useSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const totalPrice = myAddedProducts?.reduce((prev, current) => {
    return prev + current?.sellPrice;
  }, 0);

  // const id = myAddedProducts.map(p => set)

  const onSubmit = async (data) => {

    const orderProduct = {
      orderItems: [
        {
          name: data?.name,
          qty: parseInt(data?.qty),
          image: data?.image,
          price: parseInt(data?.price),
          product: data?.product,
        },
      ],
      address: data?.address,
      paymentMethod: data?.paymentMethod,
    };
    try {
      const response = await axios.post("/v1/order", orderProduct);
      console.log(response);
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message);
      // console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  console.log(myAddedProducts);
  return (
    <div className="pt-4 bg-[#BDC3C7]">
      <div className="mx-auto flex flex-col max-w-[1000px] px-3 md:px-5 lg:px-0 dark:bg-gray-900 dark:text-gray-100">
        <ul className="flex flex-col divide-y divide-gray-700">
          {myAddedProducts?.map((product, index) => {
            return <AddedSingleProduct key={index} product={product} />;
          })}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">{totalPrice}</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-between space-x-4 pb-4 mt-2">
          <Link
            to="/product"
            className="px-6 py-2 bg-[#576574] text-white rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to shop</span>
          </Link>
          <button
            onClick={togglePopup}
            className="px-6 py-2 bg-[#576574] text-white rounded-md dark:border-violet-400 uppercase"
          >
            Proceed
            <span className="sr-only sm:not-sr-only"> to Checkout</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded shadow-lg h-[600px] w-[400px] overflow-y-scroll">
            <p onClick={() => setIsOpen(false)} className="cursor-pointer text-xl font-bold right-0">x</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mx-auto p-6"
            >
              <div className="text-2xl text-red-500 text-center mb-2">
                <h1>Confirm Order</h1>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <select
                  {...register("name")}
                  className="w-full px-4 py-2 border rounded"
                >
                  {myAddedProducts.map((p) => {
                    return <option value={p?.name}>{p?.name}</option>;
                  })}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Id</label>
                <select
                  {...register("product")}
                  className="w-full px-4 py-2 border rounded"
                >
                  {myAddedProducts.map((p) => {
                    return <option value={p?._id}>{p?._id}</option>;
                  })}
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-2">Quantity</label>
                <input
                  {...register("qty")}
                  typeof="number"
                  className="w-full px-4 py-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">Image</label>
                <select
                  {...register("image")}
                  className="w-full px-4 py-2 border rounded"
                >
                  {myAddedProducts.map((p) => {
                    return <option value={p?.image}>{p?.image}</option>;
                  })}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Price</label>
                <select
                  {...register("price")}
                  className="w-full px-4 py-2 border rounded"
                  typeof="number"
                >
                  {myAddedProducts.map((p) => {
                    return <option value={p?.sellPrice}>{p?.sellPrice}</option>;
                  })}
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-2">Address</label>
                <input
                  {...register("address")}
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Payment method</label>
                <input
                  {...register("paymentMethod")}
                  type="text"
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
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCarts;
