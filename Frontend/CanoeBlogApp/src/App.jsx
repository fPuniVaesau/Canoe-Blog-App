import styles from "./App.module.css";
// Pages for the application
import NavigationBar from "../appComponents/NavigationBar/NavigationBar";
import WelcomePage from "../appPages/WelcomePage/Welcome";
import HomePage from "../appPages/HomePage/HomePage";
import LoginPage from "../appPages/LoginPage/LoginPage";
import SignUpPage from "../appPages/SignUpPage/SignUpPage";
import CreateBlogPost from "../appPages/CreateBlogPage/CreateBlogPost";
import BlogPostPage from "../appPages/BlogPostPage/BlogPostPage";
import DevPages from "../appPages/DevPages/DevPage";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <CreateBlogPost /> */}
      {/* <BlogPostPage /> */}

      {/* <DevPages></DevPages> */}
    </div>
  );
}



export default App;