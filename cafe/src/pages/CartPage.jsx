import { Link } from "react-router-dom";
import { products } from "../data";

import useCart from "../hooks/useCart";

export default function CartPage() {
  const { get, add, remove, count } = useCart();
  const cartItems = get();

  if (!cartItems.length) {
    return (
      <section className="cart-page cart-page--no-items">
        <p>Oops! There are no items in Cart!</p>
        <Link to="/">
          <button className="button button-cart">Back to Home</button>
        </Link>
      </section>
    );
  }

  return (
    <>
      {" "}
      <section className="cart-page">
        {cartItems.map((item) => {
          const foundItem = products.find((product) => {
            return product.id === item.id;
          });

          if (foundItem) {
            return (
              <CartItem
                count={item.count}
                product={foundItem}
                onAdd={add}
                onRemove={remove}
              />
            );
          } else return undefined;
        })}
      </section>
      <button className="order-now-button">Order now!</button>
    </>
  );
}

function CartItem({ count, product, onAdd, onRemove }) {
  const { name, price, image } = product;

  return (
    <div className="item-in-cart">
      <img
        src={image}
        alt={name}
        width="400px"
        height="250px"
        className="cart-image"
      />

      <p>
        {name} - {price} SEK
      </p>
      <p>x {count}</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          onAdd(product.id, 1);
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(product.id, 1);
        }}
      >
        -
      </button>
    </div>
  );
}
