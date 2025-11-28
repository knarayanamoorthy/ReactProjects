import { useCart } from "../context/CartContext";


export default function Cart() {
const { cart } = useCart();


return (
<div className="p-6">
<h2 className="text-3xl font-bold mb-4">🛒 Your Cart</h2>


{cart.length === 0 ? (
<p className="text-lg">Cart is empty.</p>
) : (
<div className="space-y-4">
{cart.map((item, i) => (
<div key={i} className="border p-4 flex gap-6 items-center bg-white shadow">
<img src={item.image} className="w-20" />
<div>
<h3 className="font-bold">{item.title}</h3>
<p className="text-green-700">₹ {item.price}</p>
</div>
</div>
))}
</div>
)}
</div>
);
}