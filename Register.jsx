export default function Register() {
return (
<div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-500 to-cyan-500">
<div className="bg-white p-8 rounded-2xl shadow-2xl w-96 animate-fadeIn">
<h2 className="text-3xl font-bold mb-6 text-center">Register</h2>


<input type="text" placeholder="Full Name" className="w-full mb-4 p-3 border rounded-lg" />
<input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded-lg" />
<input type="password" placeholder="Password" className="w-full mb-4 p-3 border rounded-lg" />


<button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">Create Account</button>
</div>
</div>
);
}