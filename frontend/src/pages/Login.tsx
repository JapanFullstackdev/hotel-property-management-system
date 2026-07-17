export default function Login(){


return (

<div
className="
min-h-screen
flex
items-center
justify-center
bg-gray-100
">


<div
className="
bg-white
shadow
rounded-xl
p-8
w-96
">


<h1
className="
text-2xl
font-bold
mb-6
text-center
"
>
Hotel PMS Login
</h1>



<input
className="
w-full
border
rounded-lg
p-3
mb-4
"
placeholder="Email"
/>



<input
type="password"
className="
w-full
border
rounded-lg
p-3
mb-6
"
placeholder="Password"
/>



<button
className="
w-full
bg-slate-900
text-white
py-3
rounded-lg
"
>
Login
</button>


</div>


</div>

)

}
