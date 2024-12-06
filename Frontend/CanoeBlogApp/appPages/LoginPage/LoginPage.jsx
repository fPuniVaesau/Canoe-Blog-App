import styles from "./LoginPage.module.css";
import canoe3D from "../../canoeResources/3dCanoeV2.png";

export default function LoginPage() {
  return (
    <>
      <div className={styles.welcomeWrapper}>
        <div>
          <img src={canoe3D} alt='canoe logo' />
          <h1>canoe.</h1>
        </div>

        <p>welcome back!</p>
      </div>
    </>
  );
}
