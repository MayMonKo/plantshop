import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const totalCost = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  if (items.length === 0)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h3>Your cart is empty!</h3>
        <Link to="/products">Continue Shopping</Link>
      </div>
    );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.map(i => (
        <div key={i.id} style={{ display: "flex", gap: "15px", alignItems: "center", marginBottom: "10px" }}>
          <img src={i.image} alt={i.name} width="80" />
          <div>
            <h4>{i.name}</h4>
            <p>${i.price}</p>
          </div>
          <div>
            <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
            <span style={{ margin: "0 10px" }}>{i.quantity}</span>
            <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(i.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <Link to="/products" style={{ marginLeft: "10px" }}>Continue Shopping</Link>
    </div>
  );
}
