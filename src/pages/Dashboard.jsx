export default function Dashboard() {
  return (
    <div className="min-h-screen p-10">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-blue-300">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Dashboard</h1>

        <p className="text-gray-700 mb-6">Welcome to Health & Wellness App!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-200 rounded-xl shadow hover:scale-105 transition">
            <h2 className="text-xl font-bold">Track Steps</h2>
          </div>

          <div className="p-6 bg-blue-200 rounded-xl shadow hover:scale-105 transition">
            <h2 className="text-xl font-bold">Daily Diet</h2>
          </div>

          <div className="p-6 bg-purple-200 rounded-xl shadow hover:scale-105 transition">
            <h2 className="text-xl font-bold">Meditation</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
