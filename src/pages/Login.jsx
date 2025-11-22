import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-purple-300">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Health & Wellness Login
        </h1>

        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
}
