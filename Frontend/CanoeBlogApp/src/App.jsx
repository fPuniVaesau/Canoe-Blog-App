import { Routes, Route } from 'react-router-dom';
import style from '../src/App.module.css';
import LogoLogin from '../components/header/logoLogin/LogoLogin';
import BlogPosts from '../components/main/BlogPosts/BlogPosts';
export default function App() {
  return (
    <>
      <header>
        <LogoLogin />
      </header>

      <Routes>
        <Route />
      </Routes>
    
    </>
  );
}
