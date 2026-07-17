import {
  Routes,
  Route
} from 'react-router-dom'


import Layout from './components/Layout'


import Dashboard from './pages/Dashboard'
import Rooms from './pages/Rooms'
import Reservations from './pages/Reservations'
import Users from './pages/Users'
import Login from './pages/Login'



export default function App(){


return (

<Routes>


<Route
path="/login"
element={<Login />}
/>


<Route
element={<Layout />}
>


<Route
path="/"
element={<Dashboard />}
/>


<Route
path="/rooms"
element={<Rooms />}
/>


<Route
path="/reservations"
element={<Reservations />}
/>


<Route
path="/users"
element={<Users />}
/>


</Route>


</Routes>

)

}
