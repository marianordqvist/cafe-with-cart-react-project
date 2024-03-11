import useCart from "../hooks/useCart";

export default function Product({ product }) {
  const { add, remove } = useCart();
  const { name, price, image } = product;

  return (
    <>
      <div className="individual-product">
        <img
          src={image}
          alt={name}
          style={{ width: "300px", height: "200px", overflow: "hidden" }}
        />
        <h4>
          {name} - {price} SEK / each
        </h4>
        <p>Click the product to read more</p>

        <button
          onClick={(e) => {
            e.preventDefault();
            add(product.id, 1);
          }}
        >
          + Add
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            remove(product.id, 1);
          }}
        >
          - Remove
        </button>
      </div>
    </>
  );
}
