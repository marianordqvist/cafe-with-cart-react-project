import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="cafe-name">
          <Link to="/">
            <h1>Happie cookie</h1>
          </Link>
        </div>

        <div className="cart">
          <Link to="/cart">
            <Cart />
          </Link>
        </div>
      </div>
    </div>
  );
}
