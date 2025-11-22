import React from 'react'
import FoodForm from '../components/FoodForm'


export default function Nutrition(){
return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<FoodForm />
<div className="card">
<h3 className="font-semibold mb-2">Daily summary</h3>
<p className="text-sm text-gray-500">Macros and calories summary will display here.</p>
</div>
</div>
)
}