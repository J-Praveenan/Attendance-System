import React from 'react'
import HandRiseImage from '../assets/hand-rise.jpeg'

export default function HomeContent() {
  return (
    <div>
       <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 gap-32 mx-auto my-28">
      <div className="col-span-2">
        <div className="text-6xl font-semibold">
            Welcome, Neethika!
        </div>
        <div className="text-3xl font-semibold my-6 font-mont">
            Time to mark your attendance and gear up for a great day!
        </div>

        <div className="text-2xl my-2 text-slate-500 justify-items-end font-mont">
        "Discover our efficient Online Attendance System, designed for seamless tracking and
        management of student attendance. Simplify record keeping and enhance administrative
        efficiency with real-time updates and comprehensive reporting. Join us in revolutionizing 
        how schools manage attendance effortlessly."
        </div>
      </div>

      <div>
        <img src={HandRiseImage} className="transform hover:scale-110 duration-150 "/>
      </div>
    </div>
    </div>
  )
}
