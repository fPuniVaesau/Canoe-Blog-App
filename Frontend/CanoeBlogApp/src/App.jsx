import styles from "./App.module.css";
// Pages for the application
import RootLayout from "../Layout/RootLayout";
import NavigationBar from "../appComponents/NavigationBar/NavigationBar";
import WelcomePage from "../appPages/WelcomePage/Welcome";
import HomePage from "../appPages/HomePage/HomePage";
import LoginPage from "../appPages/LoginPage/LoginPage";
import SignUpPage from "../appPages/SignUpPage/SignUpPage";
import CreateBlogPost from "../appPages/CreateBlogPage/CreateBlogPost";
import BlogPostPage from "../appPages/BlogPostPage/BlogPostPage";
import DevPages from "../appPages/DevPages/DevPage";

import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";


function App() {

  // New way of handlng routes for the application.
  const c_router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route path="api/welcome" element={<WelcomePage/>} />
        <Route path="api/home" element={<HomePage />} />
        <Route path="api/login" element={<LoginPage/>}/>
        <Route path="api/register" element={<SignUpPage />} />
      </Route>
    )
  )

  return (
    <div className={styles.wrapper}>

      {/* using a newer way to route our pages. */}
      <RouterProvider router={c_router}/>
    
    </div>
  );
}



export default App;