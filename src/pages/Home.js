import React from "react";

export default function Home() {
  const cards = [
    { title: "Track Calories", color: "from-green-400 to-green-600" },
    { title: "Daily Meditation", color: "from-blue-400 to-blue-600" },
    { title: "Workout Plans", color: "from-purple-400 to-purple-600" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Welcome to Wellness+</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg text-white bg-gradient-to-br ${c.color} hover:scale-105 transition cursor-pointer`}
          >
            <h2 className="text-xl font-semibold">{c.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
