import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function TopNavBar() {
  const {user,dispatch} = useContext(AuthContext);
  const handleSignUp = () =>{
   
    dispatch({
      type : "LOGOUT"
    })
  }

  return (
    <div className="bg-dark-blue p-4 w-full">
      <div className="flex grid grid-cols-2 gap-4 w-11/12 mx-auto mt-0 justify-between">
        <div className="relative">
          <div className="absolute">
            <div className="border-4 border-light-blue w-12 h-14 rounded-md"></div>
          </div>

          <div className="relative my-2 mx-2 flex">
            <div className="text-light-blue text-3xl font-bold font-mont mx-2 bg-dark-blue ">
              Attendance System
            </div>

          </div>
        </div>
        
        <div className=" flex justify-end ">
          <button className="bg-light-blue text-dark-blue md:px-8 px-4 rounded-lg transform hover:scale-110 duration-150 font-mont font-semibold "
          onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
