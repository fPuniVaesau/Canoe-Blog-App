import styles from "./LoginPage.module.css";
import canoe3D from "../../canoeResources/3dCanoeV2.png";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setEmail("")
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
                <label htmlFor='emailAddress'>Email address</label>
                <input
                  onChange={(e)=>{setEmail(e.target.value)}}
                  value={email}
                  className={styles.fieldInputs}
                  type='email'
                  name=''
                  id=''
                  placeholder='name@email.com'
                  required
                />
              </div>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='Password'>Password</label>
                <input
                  onChange={(e)=>{setPassword(e.target.value)}}
                  value={password}
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
