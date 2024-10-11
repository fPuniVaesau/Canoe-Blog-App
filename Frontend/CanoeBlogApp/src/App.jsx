import { Routes, Route } from 'react-router-dom';
import style from '../src/App.module.css';
import LogoLogin from '../components/header/logoLogin/LogoLogin';
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx"

export default function App() {
  return (
    <>
      <header>
        <LogoLogin />
      </header>

      <Routes>
        <Route path='/' element={<h1>Welcome Page.</h1>}/>
        <Route path='/homepage' element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </>
  );
}
