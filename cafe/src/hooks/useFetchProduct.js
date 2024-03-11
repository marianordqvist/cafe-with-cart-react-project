//custom hook to fetch product based on ID from array list
// of products that retrieve products gathers from

import { useEffect, useState } from "react";
import { products } from "../data";

export default function useFetchProduct(id) {
  const [product, setProduct] = useState();

  useEffect(() => {
    const foundProduct = products.find((p) => {
      return p.id === +id;
    });
    setProduct(foundProduct);
  }, [id]);

  return { product };
}
