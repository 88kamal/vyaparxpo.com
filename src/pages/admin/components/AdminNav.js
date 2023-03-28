import React from 'react'

function AdminNav({logout}) {
  return (
    <div>
      <nav className=" px-5   sm:px-4 py-3 shadow-3xl " style={{backgroundColor: 'rgb(40, 44, 52)'}}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a className="">
            {/* <img src="image/logot.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
            <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap text-white fonts1"><span className='text-orange-500'>Vayapar</span> <span className='text-pink-500'>Expo </span><span className=' text-xs md:text-sm text-green-500'>Admin Panel</span> </span>
          </a>
          
         <div className="">
         <button onClick={logout} type="button" class="text-white bg-rose-700 hover:bg-red-800  font-medium rounded-full text-sm px-4 py-1.5 md:px-8 md:py-2 text-center ">logout</button>

         </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNav