import React,{useContext, useState} from 'react'
import background from "../assets/Background.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const handleLogin = async() =>{
        const response = await axios.post('http://localhost:3001/login',{
            username : username, password : password
        });

        dispatch({
            type : "LOGIN",
            payload : response.data.token
        })

        localStorage.setItem('token', response.data.token);

        navigate('/home');
    }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={background}
        alt="Background Image"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <form className="relative flex items-center justify-center h-full ">
        <div
          className="flex items-center justify-center rounded-2xl bg-gradient-to-r shadow-2xl  blue-900/10   md:px-56 px-8 py-12 md:py-32 sm:hover:border-gray-300 transform sm:hover:scale-110 
        duration-110 md:hover:scale-100 transition-transform duration-0"
        >
          <div
            className=" relative items-center justify-center rounded-2xl p-10 md:p-10 md:pt-10 shadow-2xl text-center border-spacing-30 border-blue-500 box-sizing-border-box bg-opacity-60
         md:hover:border-gray-300 transform md:hover:scale-110 duration-100 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
        before:bg-inherit before:z-0 before:filter before:blur-xl md:before:hover:blur-lg"
          >
            <h1 className=" text-white font-bold text-lg md:text-3xl">Login</h1>
            <div className="relative z-10">
              <div className="m-10">
              <div className="absolute my-3 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 semibold text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                <input
                  type="text"
                  name="pass"
                  id="pass"
                  className="w-full md: px-10 p-3 focus:ring-0  rounded placeholder:font-semibold text-sm md:text-bold placeholder: text-primary font-semibold focus:outline-none focus:border-transparent"
                  placeholder="Username"
                  value={username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                />
              </div>
              <div className="m-10">
              <div className="absolute my-3 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 font-semibold text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  className="focus:border-secondary w-full p-3 px-10 text-sm md:text-bold   rounded placeholder:font-semibold placeholder: text-primary font-semibold focus:outline-none focus:border-transparent"
                  placeholder="Password"
                  value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                />
              </div>
              
              <button
                type="button"
                class="py-2  bg-primary hover:bg-hover-button hover:text-primary hover:border-primary  focus:ring-primary text-white px-4 md:px-10 transform hover:scale-110 duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-0 focus:ring-offset-0  rounded-md "
                onClick={handleLogin}
              >
                Login Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
