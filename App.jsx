import { Routes, Route } from "react-router-dom";
import  "./Home";
import  "./ProductView";
import  "./Cart";
import "./Login";
import "./Register";
import "./Header";
import "./Footer";
import  "./CartContext";


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
