import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
const [products, setProducts] = useState([]);


useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => setProducts(data));
}, []);


return (
<div className="p-6">
<h2 className="text-3xl font-bold mb-4">🔥 Featured Products</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products.map((p) => (
<div key={p.id} className="border shadow-lg p-4 rounded-xl bg-white">
<img src={p.image} className="h-48 mx-auto object-contain" />
<h3 className="font-semibold mt-3">{p.title.slice(0, 30)}...</h3>
<p className="text-green-600 font-bold">₹ {p.price}</p>


<Link
to={`/product/${p.id}`}
className="block mt-3 bg-blue-600 text-white p-2 text-center rounded-lg hover:bg-blue-700"
>
View
</Link>
</div>
))}
</div>
</div>
);
}