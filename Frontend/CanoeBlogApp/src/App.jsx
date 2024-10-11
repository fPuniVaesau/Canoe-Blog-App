import { Routes, Route } from 'react-router-dom';
import style from '../src/App.module.css';
import LogoLogin from '../components/header/logoLogin/LogoLogin';
import Home from "./Pages/Home.jsx";
export default function App() {
  return (
    <>
      <header>
        <LogoLogin />
      </header>

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    
    </>
  );
}
