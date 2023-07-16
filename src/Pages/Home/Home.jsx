import { useEffect } from "react";

import { NewProduct } from "../NewProduct/NewProduct";
import Application from "../Application";
import Brand from "../Brands/Brands";
import { useSelector } from "react-redux";

// import { NewProduct } from "../NewProduct/NewProduct";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    return () => {
      document.title = "Hasan International / home";
    };
  }, []);

  return (
    <div className="bg-[#bdc3c7]">
      <div className="max-w-[1200px] mx-auto">
        <NewProduct />
        <Application />
        <Brand />
      </div>
    </div>
  );
};

export default Home;
