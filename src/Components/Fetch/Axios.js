import axios from "axios";
import { useEffect, useState } from "react";

export const ProductsAxios = (productUrl) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`https://dummyjson.com/${productUrl}`);
      setProducts(res?.data);
    };
    fetchProducts();
  }, [productUrl]);
  return products
};
