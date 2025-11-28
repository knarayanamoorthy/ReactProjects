import React, { useEffect, useState } from "react";
import "./ProductView";


function ProductCard({ title, price, description, image }) {
return (
<div className="border rounded-2xl p-4 shadow-lg flex flex-col items-center gap-3 max-w-xs bg-white">
<img src={image} alt={title} className="w-32 h-32 object-contain" />
<h2 className="text-xl font-semibold text-center">{title}</h2>
<p className="text-sm text-gray-600 text-center">{description}</p>
<p className="text-lg font-bold">₹ {price}</p>
<button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
Buy Now
</button>
</div>
);
}


export default function Products() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => {
setProducts(data);
setLoading(false);
});
}, []);


return (
<div>
<h1 className="text-3xl font-bold text-center mb-6">Products</h1>


{loading ? (
<p className="text-center text-lg">Loading products...</p>
) : (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products.map((p) => (
<ProductCard
key={p.id}
title={p.title}
price={p.price}
description={p.description.substring(0, 60) + "..."}
image={p.image}
/>
))}
</div>
)}
</div>
);
}