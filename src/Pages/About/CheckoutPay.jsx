import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments/Payments";

const CheckoutPay = () => {
  const myAddedProducts = useSelector((state) => state.cart);
  return (
    <div className="pt-4 pb-4 bg-[#BDC3C7]">
      <div className="mx-auto flex flex-col max-w-[1000px] px-3 md:px-5 lg:px-0 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between">
          <div className="pt-4">
            <h3 className="text-xl px-5 pb-2">Select Payment Method</h3>
            <Payments />
          </div>
          <div className="bg-gray-300 text-black w-80 my-3 mx-5 rounded-sm py-3">
            <h3 className="text-2xl font-semibold pl-3">Order Summery</h3>
            <div className="flex justify-between text-sm mx-3 my-3">
              <p>subtotal</p>
              <p>$30</p>
            </div>
            <div className="flex justify-between text-xl mx-3 my-3">
              <p>Total Amount</p>
              <p>$30</p>
            </div>
            <button className="h-8 w-[305px] bg-slate-800 text-white mx-2 rounded-sm">Place order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPay;
