import { useEffect, useState } from "react";
import axios from "axios";


export default function Rooms(){

  const [rooms,setRooms] = useState<any[]>([]);


  useEffect(()=>{

    axios
      .get("http://localhost:3000/rooms")
      .then(res=>{
        setRooms(res.data);
      });

  },[]);



 return (
<div>

<h1>Rooms</h1>

<table border={1}>
<thead>
<tr>
<th>ID</th>
<th>No</th>
<th>Type</th>
<th>Price</th>
</tr>
</thead>

<tbody>

{rooms.map(r=>(
<tr key={r.id}>
<td>{r.id}</td>
<td>{r.number}</td>
<td>{r.type}</td>
<td>{r.price}</td>
</tr>
))}

</tbody>

</table>

</div>
)
}
