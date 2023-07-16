import  useSWR  from "swr";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = res.json()
    return data
}

export const ProductsAxiosSwr = (productUrl) => {
  const {data , isLoading, mutate} = useSWR(`https://dummyjson.com/${productUrl}`, fetcher)
    return {data, isLoading, mutate}
};
