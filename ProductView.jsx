import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


export default function ProductView() {
const { id } = useParams();
const [product, setProduct] = useState(null);
const { addToCart } = useCart();


useEffect(() => {
fetch(`https://fakestoreapi.com/products/${id}`)
.then((res) => res.json())
.then((data) => setProduct(data));
}, [id]);


if (!product) return <p className="p-6 text-xl">Loading...</p>;


return (
<div className="p-8 flex  dress">
<img src={product.image} className="w-80 h-80 object-contain" />


<div>
<h1 className="text-4xl font-bold">{product.title}</h1>
<p className="text-xl mt-3">{product.description}</p>
<p className="text-3xl mt-4 font-bold text-green-600">₹ {product.price}</p>


<button
className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-orange-600"
onClick={() => addToCart(product)}
>
Buy Now
</button>
</div>
</div>
);
}