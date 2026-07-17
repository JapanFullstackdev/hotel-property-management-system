import { useEffect, useState } from 'react'

import { getRooms, createRoom } from '../api/roomApi'
import type { Room } from '../api/roomApi'


export default function Rooms(){

  const [rooms, setRooms] = useState<Room[]>([])

  const [number, setNumber] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')


  async function loadRooms(){

    const data = await getRooms()

    setRooms(data)

  }


  useEffect(()=>{

    loadRooms()

  },[])



  async function handleCreate(){

    await createRoom({

      number,

      type,

      price:Number(price)

    })


    setNumber('')
    setType('')
    setPrice('')


    loadRooms()

  }



return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">
Rooms
</h1>


<div className="
bg-white
p-6
rounded-xl
shadow
">

<h2 className="text-xl font-semibold mb-4">
Add Room
</h2>


<div className="flex gap-3">


<input
className="border p-2 rounded"
placeholder="Room Number"
value={number}
onChange={e=>setNumber(e.target.value)}
/>


<input
className="border p-2 rounded"
placeholder="Type"
value={type}
onChange={e=>setType(e.target.value)}
/>


<input
className="border p-2 rounded"
placeholder="Price"
value={price}
onChange={e=>setPrice(e.target.value)}
/>


<button
className="
bg-slate-900
text-white
px-4
rounded
"
onClick={handleCreate}
>
Add
</button>


</div>

</div>



<div className="
bg-white
rounded-xl
shadow
overflow-hidden
">


<table className="w-full">


<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">
Number
</th>

<th className="p-4 text-left">
Type
</th>

<th className="p-4 text-left">
Price
</th>

</tr>

</thead>


<tbody>

{
rooms.map(room=>(

<tr
key={room.id}
className="border-t"
>

<td className="p-4">
{room.number}
</td>


<td className="p-4">
{room.type}
</td>


<td className="p-4">
¥{room.price}
</td>


</tr>

))
}


</tbody>


</table>


</div>


</div>

)

}
