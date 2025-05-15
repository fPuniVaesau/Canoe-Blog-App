import styles from "./App.module.css";
import HomePage from "../appPages/HomePage/HomePage";
import LoginPage from "../appPages/LoginPage/LoginPage";
import SignUpPage from "../appPages/SignUpPage/SignUpPage";
import CreateBlogPost from "../appPages/CreateBlogPage/CreateBlogPost";
import BlogPostPage from "../appPages/BlogPostPage/BlogPostPage";
import DevPages from "../appPages/DevPages/DevPage";

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <CreateBlogPost /> */}
      {/* <BlogPostPage /> */}

      <DevPages></DevPages>
    </div>
  );
}



export default App;