import { Link } from "react-router-dom";
import useRetrieveProducts from "../hooks/useRetrieveProducts";
import Product from "../components/Product";
import BannerImg from "../images/banner-img.webp";
import AboutSection from "../components/AboutSection";

export default function Startpage() {
  const { products } = useRetrieveProducts();

  return (
    <>
      <img
        src={BannerImg}
        alt="image of hands holding a cup of coffee"
        width="1280px"
        height="900px"
        className="banner-image"
      />

      <AboutSection />

      <section className="products-section">
        <h2>Preorder something now,</h2>
        <h3>We'll have it done for you when you arrive!</h3>

        <div className="products-container">
          {products.map((product) => {
            const { id } = product;

            return (
              <>
                <Link to={`/product/${id}`} key={id}>
                  <Product product={product} />
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
