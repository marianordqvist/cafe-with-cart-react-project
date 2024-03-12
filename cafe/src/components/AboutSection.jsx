import CoffeeImg from "../images/kaffe-close.webp";

export default function AboutSection() {
  return (
    <div className="about-section-container">
      <h2 className="about-section--title">
        May we treat you to a cup of coffee today?
      </h2>
      <img
        src={CoffeeImg}
        alt="a cup of coffee"
        width="400px"
        height="200px"
        className="coffee-image"
      />
    </div>
  );
}
