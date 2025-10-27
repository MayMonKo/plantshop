import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <h2>🌿 GreenLeaf</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}
