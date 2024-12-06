import styles from "./LoginPage.module.css";
import canoe3D from "../../canoeResources/3dCanoeV2.png";

export default function LoginPage() {
  return (
    <>
      <div className={styles.welcomeWrapper}>
        <div>
          <img
          className={styles.canoeImage}
           src={canoe3D} alt='canoe logo' />
        </div>

        <div>
          <h2>canoe.</h2>
          <p>welcome back!</p>

          <form action="">
            
          </form>
        </div>
      </div>
    </>
  );
}
