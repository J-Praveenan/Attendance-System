import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';



function App() {
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        {/* <Route path='/home' element={<HomePage/>}/> */}
        <Route path='/home' element={user ? <HomePage/> : <LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
