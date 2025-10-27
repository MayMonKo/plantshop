import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { plants } from "../data/plants";

export default function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // check if plant is already in cart
  const isInCart = (id) => cartItems.some((i) => i.id === id);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
  };

  // three visible categories
  const categories = ["Indoor", "Succulent", "Flowering"];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>Our Plants</h1>
      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: "40px" }}>
          <h2>{cat} Plants</h2>
          <div className="product-grid">
            {plants
              .filter((p) => p.category === cat)
              .map((p) => (
                <div key={p.id} className="product-card">
                  <img src={p.image} alt={p.name} width="160" height="160" />
                  <h4>{p.name}</h4>
                  <p>${p.price}</p>
                  <button
                    disabled={isInCart(p.id)}
                    onClick={() => handleAdd(p)}
                  >
                    {isInCart(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
