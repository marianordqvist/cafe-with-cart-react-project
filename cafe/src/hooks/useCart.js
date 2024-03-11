import { useContext } from "react";
import { CartProviderContext } from "../contextProviders/CartProvider";

export default function useCart() {
  return useContext(CartProviderContext);
}
