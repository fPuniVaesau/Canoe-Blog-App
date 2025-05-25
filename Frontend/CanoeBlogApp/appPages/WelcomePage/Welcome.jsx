import styles from "./Welcome.module.css";
import Spline from '@splinetool/react-spline';
import { NavLink } from "react-router-dom";


export default function WelcomePage(){

  return (
    <>
      <div className={styles.container}>
        <Spline className={styles.splineScene} scene='https://prod.spline.design/jPlVh8CU1I52UfCq/scene.splinecode' />
        <NavLink className={styles.buttonContainer} to="home">
          <button className={styles.welcomeButton} type="button">Welcome to Canoe</button>
        </NavLink>
      </div>
    </>
  );
}