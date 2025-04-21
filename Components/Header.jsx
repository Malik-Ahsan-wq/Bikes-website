import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = ({ cartAllProduct }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <div className="cart-icon">
        <Link to="/cart">
          {" "}
          <FaShoppingCart className="cart-color" />
        </Link>
          <span> {cartAllProduct.length}</span>
      </div>
    </nav>
  );
};

export default Header;
