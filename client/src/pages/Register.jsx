import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const handleRegister = ()=>{

        axios.post("http://localhost:3001/signUp", {
            username : username, password : password
        })
        .then(res =>{
            alert(res.data);
            navigate("/login");
        })
        setUsername("");
        setPassword("");
    }
  return (
    <div>
      <div>
        <label>Username</label>
        <input value={username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}/>
      </div>
      <div>
        <label>Password</label>
        <input value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}/>
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}
