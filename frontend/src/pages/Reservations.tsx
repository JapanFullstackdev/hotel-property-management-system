import { useEffect,useState } from "react";
import axios from "axios";


export default function Reservations(){

const [reservations,setReservations]=useState<any[]>([]);


useEffect(()=>{

axios
.get("http://localhost:3000/reservations")
.then(res=>{
 setReservations(res.data);
});

},[]);



return(
<div>

<h1>Reservations</h1>

<table border={1}>

<thead>
<tr>
<th>Guest</th>
<th>Room</th>
</tr>
</thead>

<tbody>

{reservations.map(r=>(
<tr key={r.id}>
<td>{r.guestName}</td>
<td>{r.roomId}</td>
</tr>
))}

</tbody>

</table>

</div>
)

}
