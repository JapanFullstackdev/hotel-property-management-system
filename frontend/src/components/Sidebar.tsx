import {
  Link
} from 'react-router-dom'


export default function Sidebar(){

  return (

    <aside
      className="
      w-64
      bg-slate-900
      text-white
      min-h-screen
      p-5
      "
    >


      <h1
        className="
        text-2xl
        font-bold
        mb-8
        "
      >
        Hotel PMS
      </h1>


      <nav
        className="space-y-3"
      >


        <Link
          className="block hover:bg-slate-700 p-3 rounded"
          to="/"
        >
          Dashboard
        </Link>


        <Link
          className="block hover:bg-slate-700 p-3 rounded"
          to="/rooms"
        >
          Rooms
        </Link>


        <Link
          className="block hover:bg-slate-700 p-3 rounded"
          to="/reservations"
        >
          Reservations
        </Link>


        <Link
          className="block hover:bg-slate-700 p-3 rounded"
          to="/users"
        >
          Users
        </Link>


      </nav>


    </aside>

  )

}
