import React, { useState } from 'react';
import api from '../services/api';

export default function Fitness(){
  const [form, setForm] = useState({ type:'running', durationMin:30, distanceKm:0, calories:0, notes:'' });
  const [msg, setMsg] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/exercises', form);
      setMsg('Saved');
      setForm({ type:'running', durationMin:30, distanceKm:0, calories:0, notes:'' });
    } catch(err){ setMsg('Error'); console.error(err); }
  };
  return (
    <div className="max-w-lg bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Log Exercise</h2>
      {msg && <div>{msg}</div>}
      <form onSubmit={submit}>
        <label className="block">Type</label>
        <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})} className="border w-full p-2 mb-2">
          <option>running</option><option>cycling</option><option>strength</option>
        </select>
        <label>Duration (min)</label>
        <input type="number" value={form.durationMin} onChange={e=>setForm({...form, durationMin: +e.target.value})} className="border w-full p-2 mb-2" />
        <label>Distance (km)</label>
        <input type="number" value={form.distanceKm} onChange={e=>setForm({...form, distanceKm: +e.target.value})} className="border w-full p-2 mb-2" />
        <label>Calories</label>
        <input type="number" value={form.calories} onChange={e=>setForm({...form, calories: +e.target.value})} className="border w-full p-2 mb-2" />
        <label>Notes</label>
        <textarea value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} className="border w-full p-2 mb-2" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
