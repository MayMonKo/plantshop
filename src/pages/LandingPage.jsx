import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0 1px 4px rgba(0,0,0,0.6)"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>GreenLeaf Plant Shop</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        Bring calm, color, and clean air into your home.
      </p>
      <Link to="/products">
        <button style={{ fontSize: "1rem", padding: "10px 20px" }}>Get Started</button>
      </Link>
    </div>
  );
}
