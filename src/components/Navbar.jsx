import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="backdrop-blur-xl bg-white/20 border-b border-white/30 px-8 py-4 flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.2)]">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md cursor-pointer hover:scale-110 transition-all"
      >
        Wellness+
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
