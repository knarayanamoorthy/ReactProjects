import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";


export default function App() {
return (
<CartProvider>
<Header />


<Routes>
<Route path="/" element={<Home />} />
<Route path="/product/:id" element={<ProductView />} />
<Route path="/cart" element={<Cart />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
</Routes>


<Footer />
</CartProvider>
);
}