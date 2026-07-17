import { useState } from 'react'


interface User {

  id:number

  name:string

  email:string

  role:string

  status:string

}



export default function Users(){


  const [users] = useState<User[]>([

    {
      id:1,
      name:"Yamada Ken",
      email:"yamada@hotel.jp",
      role:"ADMIN",
      status:"ACTIVE"
    },

    {
      id:2,
      name:"Tanaka Mai",
      email:"tanaka@hotel.jp",
      role:"STAFF",
      status:"ACTIVE"
    },

    {
      id:3,
      name:"Sato Hiro",
      email:"sato@hotel.jp",
      role:"STAFF",
      status:"INACTIVE"
    }

  ])




return (

<div className="space-y-6">


  <div
    className="
    flex
    justify-between
    items-center
    "
  >

    <div>

      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Users
      </h1>


      <p
        className="
        text-gray-500
        mt-2
        "
      >
        Manage hotel staff accounts
      </p>


    </div>



    <button
      className="
      bg-slate-900
      text-white
      px-5
      py-2
      rounded-lg
      "
    >
      + Add User
    </button>


  </div>




  <div
    className="
    bg-white
    rounded-xl
    shadow
    overflow-hidden
    "
  >


    <table className="w-full">


      <thead
        className="
        bg-gray-100
        "
      >

        <tr>

          <th className="p-4 text-left">
            Name
          </th>


          <th className="p-4 text-left">
            Email
          </th>


          <th className="p-4 text-left">
            Role
          </th>


          <th className="p-4 text-left">
            Status
          </th>


        </tr>

      </thead>




      <tbody>


      {
        users.map(user=>(

          <tr
            key={user.id}
            className="
            border-t
            "
          >

            <td className="p-4">
              {user.name}
            </td>


            <td className="p-4">
              {user.email}
            </td>


            <td className="p-4">

              <span
                className="
                bg-blue-100
                text-blue-700
                px-3
                py-1
                rounded-full
                text-sm
                "
              >
                {user.role}
              </span>

            </td>


            <td className="p-4">

              {user.status}

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
