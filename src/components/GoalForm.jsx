import React, { useState } from 'react'
import api from '../services/api'


export default function GoalForm({ onSaved }){
const [form, setForm] = useState({ title:'Daily Steps', type:'steps', target:10000, unit:'steps' })
const submit = async e =>{ e.preventDefault(); try{ const res = await api.post('/goals', form); onSaved?.(res.data); setForm({ title:'Daily Steps', type:'steps', target:10000, unit:'steps' }) }catch(err){ console.error(err) } }
return (
<form onSubmit={submit} className="card max-w-md">
<h3 className="font-semibold mb-2">Create Goal</h3>
<input className="input" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="Title" />
<select className="input" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
<option value="steps">steps</option>
<option value="workouts_per_week">workouts_per_week</option>
<option value="calorie_limit">calorie_limit</option>
</select>
<input className="input" type="number" value={form.target} onChange={e=>setForm({...form,target:+e.target.value})} placeholder="Target" />
<input className="input" value={form.unit} onChange={e=>setForm({...form,unit:e.target.value})} placeholder="Unit" />
<button className="px-4 py-2 bg-green-600 text-white rounded">Create</button>
</form>
)
}