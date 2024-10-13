import { Routes, Route } from 'react-router-dom';
import style from '../src/App.module.css';
import LogoLogin from '../components/header/logoLogin/LogoLogin';
import Welcome from '../components/Welcome/Welcome.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import BlogPostPage from './Pages/BlogPostPage.jsx';

export default function App() {
  return (
    <>
      <header>
        <LogoLogin />
      </header>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/homepage' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/blogPosts" element={<BlogPostPage />}></Route>
      </Routes>
    </>
  );
}
