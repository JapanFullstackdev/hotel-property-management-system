import { useEffect, useState } from 'react'

import {
  getReservations,
  createReservation
} from '../api/reservationApi'

import type {
  Reservation
} from '../api/reservationApi'


export default function Reservations(){


  const [reservations,setReservations]
  = useState<Reservation[]>([])


  const [guestName,setGuestName]
  = useState('')


  const [roomId,setRoomId]
  = useState('')


  const [checkIn,setCheckIn]
  = useState('')


  const [checkOut,setCheckOut]
  = useState('')



  async function loadReservations(){

    const data =
      await getReservations()

    setReservations(data)

  }



  useEffect(()=>{

    loadReservations()

  },[])



  async function handleCreate(){

    await createReservation({

      guestName,

      roomId:Number(roomId),

      checkIn,

      checkOut

    })


    setGuestName('')
    setRoomId('')
    setCheckIn('')
    setCheckOut('')


    loadReservations()

  }



return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">
Reservations
</h1>



<div className="bg-white p-6 rounded-xl shadow">


<h2 className="text-xl font-bold mb-4">
New Reservation
</h2>


<div className="flex gap-3">


<input
className="border p-2 rounded"
placeholder="Guest Name"
value={guestName}
onChange={
e=>setGuestName(e.target.value)
}
/>



<input
className="border p-2 rounded"
placeholder="Room ID"
value={roomId}
onChange={
e=>setRoomId(e.target.value)
}
/>



<input
type="date"
className="border p-2 rounded"
value={checkIn}
onChange={
e=>setCheckIn(e.target.value)
}
/>



<input
type="date"
className="border p-2 rounded"
value={checkOut}
onChange={
e=>setCheckOut(e.target.value)
}
/>



<button
className="bg-slate-900 text-white px-4 rounded"
onClick={handleCreate}
>
Create
</button>


</div>


</div>




<div className="bg-white rounded-xl shadow overflow-hidden">


<table className="w-full">


<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">
Guest
</th>

<th className="p-4 text-left">
Room
</th>

<th className="p-4 text-left">
Check In
</th>

<th className="p-4 text-left">
Check Out
</th>

</tr>

</thead>



<tbody>


{
reservations.map(item=>(

<tr
key={item.id}
className="border-t"
>

<td className="p-4">
{item.guestName}
</td>


<td className="p-4">
{item.room.number}
</td>


<td className="p-4">
{item.checkIn.slice(0,10)}
</td>


<td className="p-4">
{item.checkOut.slice(0,10)}
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
