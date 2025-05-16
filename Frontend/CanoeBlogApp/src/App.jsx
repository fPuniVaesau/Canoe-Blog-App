import styles from "./App.module.css";

import NavigationBar from "../appComponents/NavigationBar/NavigationBar";

import HomePage from "../appPages/HomePage/HomePage";
import LoginPage from "../appPages/LoginPage/LoginPage";
import SignUpPage from "../appPages/SignUpPage/SignUpPage";
import CreateBlogPost from "../appPages/CreateBlogPage/CreateBlogPost";
import BlogPostPage from "../appPages/BlogPostPage/BlogPostPage";
import DevPages from "../appPages/DevPages/DevPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      
      <Routes>
        <Route path="/api/Home"  />
        {/* <HomePage /> */}
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        {/* <CreateBlogPost /> */}
        {/* <BlogPostPage /> */}

        {/* <DevPages></DevPages> */}
      </Routes>
    </div>
  );
}



export default App;