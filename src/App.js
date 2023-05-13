import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { NavBar } from "./pages/NavBar";
import { ProductListing } from "./pages/ProductListing";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </div>
  );
}
