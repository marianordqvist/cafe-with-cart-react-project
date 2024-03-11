import useFetchProduct from "../hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const { product, image } = useFetchProduct(id);
  const item = product;

  if (!item) return <div>Product not found</div>;

  const { description } = item;

  return (
    <div className="product-page">
      <p>{item.description} </p>

      <img src={item.image} alt="Product Image" className="product-image" />

      <Link to="/">
        <button className="button button-cart">Back to Home</button>
      </Link>
    </div>
  );
}
