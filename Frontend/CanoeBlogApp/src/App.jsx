import styles from "./App.module.css";
import HomePage from "../appPages/HomePage/HomePage";
import LoginPage from "../appPages/LoginPage/LoginPage";

function App() {
  return (
    <div className={styles.wrapper}>
      <HomePage />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
