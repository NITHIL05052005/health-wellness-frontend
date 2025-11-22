import React, { useState } from 'react'
import api from '../services/api'


export default function ExerciseForm({ onSaved }){
const [form, setForm] = useState({ type:'running', durationMin:30, distanceKm:0, calories:200, notes:'' })
const [msg, setMsg] = useState('')
const submit = async e =>{
e.preventDefault()
try{
const res = await api.post('/exercises', form)
setMsg('Saved')
onSaved?.(res.data)
setForm({ type:'running', durationMin:30, distanceKm:0, calories:200, notes:'' })
}catch(err){ setMsg('Error saving') }
}
return (
<form onSubmit={submit} className="card max-w-md">
<h3 className="font-semibold mb-2">Log Exercise</h3>
{msg && <div className="text-sm text-green-600 mb-2">{msg}</div>}
<select className="input" value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
<option>running</option><option>cycling</option><option>strength</option>
</select>
<input className="input" type="number" value={form.durationMin} onChange={e=>setForm({...form, durationMin:+e.target.value})} placeholder="Duration (min)" />
<input className="input" type="number" value={form.distanceKm} onChange={e=>setForm({...form, distanceKm:+e.target.value})} placeholder="Distance (km)" />
<input className="input" type="number" value={form.calories} onChange={e=>setForm({...form, calories:+e.target.value})} placeholder="Calories" />
<textarea className="input" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} placeholder="Notes" />
<button className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
</form>
)
}