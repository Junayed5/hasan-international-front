import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddedSingleProduct from "../../Components/AddedSingleProduct";

const MyCarts = () => {
  const myAddedProducts = useSelector((state) => state.cart);

  console.log(myAddedProducts)
  return (
    <div className="pt-4 bg-[#BDC3C7]">
      <div className="mx-auto flex flex-col max-w-[1000px] px-3 md:px-5 lg:px-0 dark:bg-gray-900 dark:text-gray-100">
        <ul className="flex flex-col divide-y divide-gray-700">
        {myAddedProducts?.map((product) => {
            return <AddedSingleProduct key={product._id} product={product} />;
          })}
          
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
        <div className="flex justify-between space-x-4 pb-4 mt-2">
          <Link to='/product'
            className="px-6 py-2 bg-[#576574] text-white rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">{" "}to shop</span>
          </Link>
          <Link to='/shipping-checkout'
            className="px-6 py-2 bg-[#576574] text-white rounded-md dark:border-violet-400 uppercase"
          >
            Proceed
            <span className="sr-only sm:not-sr-only">{" "}to Checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
