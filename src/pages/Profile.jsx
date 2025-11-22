import React from 'react'


export default function Profile({ user }){
return (
<div className="card max-w-md">
<h2 className="text-xl font-semibold mb-4">Profile</h2>
<div><strong>Name: </strong>{user.name}</div>
<div><strong>Email: </strong>{user.email}</div>
</div>
)
}