import { useEffect, useState } from "react";

export const ProductsNormal = (productUrl) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/${productUrl}`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [productUrl]);
  return products
};
