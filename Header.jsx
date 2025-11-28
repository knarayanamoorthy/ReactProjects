import { Link } from "react-router-dom";


export default function Header() {
return (
<header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
<h1 className="text-2xl font-bold">
<Link to="/">Bikaboo Shop</Link>
</h1>


<nav className="space-x-6 text-lg">
<Link to="/" className="hover:text-yellow-400">Home</Link>
<Link to="/cart" className="hover:text-yellow-400">Cart</Link>
<Link to="/login" className="hover:text-yellow-400">Login</Link>
</nav>
</header>
);
}