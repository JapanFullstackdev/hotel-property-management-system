import StatCard from '../components/StatCard'


export default function Dashboard() {


  return (

    <div className="space-y-6">


      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Hotel overview and daily operations
        </p>

      </div>



      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
      ">


        <StatCard
          title="Total Rooms"
          value={120}
        />


        <StatCard
          title="Available Rooms"
          value={85}
        />


        <StatCard
          title="Occupied Rooms"
          value={35}
        />


        <StatCard
          title="Today's Reservations"
          value={18}
        />


      </div>




      <div
        className="
        bg-white
        rounded-xl
        shadow
        p-6
        "
      >

        <h2
          className="
          text-xl
          font-semibold
          mb-4
          "
        >
          Recent Activity
        </h2>



        <div className="space-y-3">


          <div className="
            border-b
            pb-3
          ">
            Room 101 checked in
          </div>


          <div className="
            border-b
            pb-3
          ">
            New reservation created
          </div>


          <div>
            Room 205 cleaned
          </div>


        </div>


      </div>


    </div>

  )

}
