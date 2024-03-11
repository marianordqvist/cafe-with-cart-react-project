import useCart from "../hooks/useCart";
import CartIcon from "./../images/shopping_cart.svg";

export default function Cart() {
  const { get } = useCart();
  const cartItems = get();

  let count = 0;
  cartItems.forEach((d) => (count += d.count));

  return (
    <div className="cart-items-display">
      <img
        className="cart-icon"
        src={CartIcon}
        alt="cart icon"
        height="30px"
        width="30px"
      />
      ({count})
    </div>
  );
}
