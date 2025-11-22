import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function TrendChart({ exercises = [], foods = [] }) {
  // aggregate calories per day for both
  const mapDate = (d) => new Date(d).toISOString().slice(0,10);
  const exMap = {};
  exercises.forEach(e => {
    const day = mapDate(e.date);
    exMap[day] = (exMap[day] || 0) + (e.calories || 0);
  });
  const fdMap = {};
  foods.forEach(f => {
    const day = mapDate(f.date);
    fdMap[day] = (fdMap[day] || 0) + (f.calories || 0);
  });

  const days = Array.from(new Set([...Object.keys(exMap), ...Object.keys(fdMap)])).sort();
  const exData = days.map(d => exMap[d] || 0);
  const foodData = days.map(d => fdMap[d] || 0);

  const data = {
    labels: days,
    datasets: [
      { label: 'Calories burned', data: exData, tension:0.4 },
      { label: 'Calories consumed', data: foodData, tension:0.4 }
    ]
  };

  return <div className="h-80"><Line data={data} /></div>;
}
