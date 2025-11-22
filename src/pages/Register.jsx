export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
      <div className="w-96 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.4)]">

        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Create Account
        </h2>

        <input
          placeholder="Name"
          className="input-colored"
        />
        <input
          placeholder="Email"
          className="input-colored"
        />
        <input
          placeholder="Password"
          type="password"
          className="input-colored"
        />

        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
}
