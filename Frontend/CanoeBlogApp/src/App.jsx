import styles from "./App.module.css";
// Pages for the application
import RootLayout from "../Layout/RootLayout";
import WelcomePage from "../appPages/WelcomePage/Welcome";
import HomePage from "../appPages/HomePage/HomePage";
import FeaturedPage from "../appPages/FeaturedPage/FeaturedPage";
import BlogsLayout from "../Layout/BlogsLayout";
import BlogPostPage, {BlogsLoader} from "../appPages/BlogPostPage/BlogPostPage";
import AboutPage from "../appPages/AboutPage/AboutPage";
import ContactPage from "../appPages/ContactPage/ContactPage"
import ProjectsPage from "../appPages/ProjectsPage/ProjectsPage";
import LoginPage from "../appPages/LoginPage/LoginPage";
import SignUpPage from "../appPages/SignUpPage/SignUpPage";

import CreateBlogPost from "../appPages/CreateBlogPage/CreateBlogPost";
import DevPages from "../appPages/DevPages/DevPage";
import NotFound from "../appComponents/NotFound/NotFound";

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";


function App() {

  // New way of handlng routes for the application.
  const c_router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path='api/home' element={<HomePage />} />
        <Route path='api/featured' element={<FeaturedPage />} />
        <Route path='api/blogs' element={<BlogsLayout />}>
          <Route index element={<BlogPostPage />} loader={BlogsLoader} />
        </Route>
        <Route path='api/newBlog' element={<CreateBlogPost />} />

        <Route path='api/about' element={<AboutPage />} />
        <Route path='api/contact' element={<ContactPage />} />
        <Route path='api/projects' element={<ProjectsPage />} />
        <Route path='api/login' element={<LoginPage />} />
        <Route path='api/register' element={<SignUpPage />} />
        <Route path='*' element={<NotFound />} />

        {/* route for development */}
        <Route path='api/dev' element={<DevPages />} />
      </Route>
    )
  );

  return (
    <div className={styles.wrapper}>
      {/* using a newer way to route our pages. */}
      <RouterProvider router={c_router}/>
    </div>
  );
}


export default App;