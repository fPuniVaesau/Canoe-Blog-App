import styles from "./App.module.css";
import HomePage from "../appPages/HomePage/HomePage";
import LoginPage from "../appPages/LoginPage/LoginPage";
import SignUpPage from "../appPages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      <SignUpPage />
    </div>
  );
}

export default App;
