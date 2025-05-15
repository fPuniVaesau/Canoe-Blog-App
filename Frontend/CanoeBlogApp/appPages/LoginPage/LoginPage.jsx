import styles from "./LoginPage.module.css";
import canoe3D from "../../canoeResources/3dCanoeV2.png";
import { useState } from "react";
import axios from "axios"

export default function LoginPage() {
  const [c_username, setUsername] = useState("");
  const [c_password, setPassword] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setUsername("")
    setPassword("")
  }

  return (
    <>
      <div className={styles.welcomeWrapper}>
        <div>
          <img className={styles.canoeImage} src={canoe3D} alt='canoe logo' />
        </div>

        <div className={styles.loginSignUpWrapper}>
          <div className={styles.loginInnerWrapper}>
            <div className={styles.welcomeMessageWrapper}>
              <h2>Welcome back</h2>
              <p>Let's enter your details!</p>
              <p>Dont have an account yet!? <a className={styles.joinNowLink} href="#">Join now!</a> Not much to get started today.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.formWrapper} action='submit'>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='username'>Username</label>
                <input
                  onChange={(e)=>{setUsername(e.target.value)}}
                  value={c_username}
                  className={styles.fieldInputs}
                  type='text'
                  name=''
                  id='username'
                  placeholder='username'
                  required
                />
              </div>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='Password'>Password</label>
                <input
                  onChange={(e)=>{setPassword(e.target.value)}}
                  value={c_password}
                  className={styles.fieldInputs}
                  type='password'
                  name=''
                  id=''
                  placeholder='password'
                  required
                />
              </div>

              <div className={styles.loginButtonWrapper}>
                <button className={styles.loginButton}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
