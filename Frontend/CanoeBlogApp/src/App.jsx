import style from "../src/App.module.css";
import LogoLogin from "../components/header/logoLogin/LogoLogin"
import BlogEntries from "../components/main/BlogEntries/BlogEntries";
export default function App() {
 
  return (
    <>
      <header>
        <LogoLogin />
      </header>

      <main>
        <BlogEntries />
      </main>
    </>
  )
};
