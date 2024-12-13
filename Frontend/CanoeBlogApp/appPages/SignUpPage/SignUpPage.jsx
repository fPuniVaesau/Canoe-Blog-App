import styles from "./SignUpPage.module.css"
import { useState } from "react"

export default function SignUpPage(){
  return(
    <>
      <div className={styles.signUpPageContainer}>
        <div className={styles.messageFormWrapper}>
          <div className={styles.signUpMessageWrapper}>
            <h2>Create new account.</h2>
            <p>Document your journey</p>
          </div>

          <form action="sumbit">
            <div className={styles.nameWrapper}>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor="first name">First name</label>
                <input className={styles.fieldInputs} type="text" placeholder="silver" required />
              </div>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor="last name">Last name</label>
                <input className={styles.fieldInputs} type="text" placeholder="surfer" required />
              </div>
            </div>
            <div className={styles.inputFieldWrappers}>
              <label htmlFor="email address">Email address</label>
              <input className={styles.fieldInputs} type="text" placeholder="emailaddress@example.com" required />
            </div>
            <div className={styles.inputFieldWrappers}>
              <label htmlFor="password">Password</label>
              <input className={styles.fieldInputs} type="password" placeholder="password" required />
            </div>
            <div className={styles.inputFieldWrappers}>
              <label htmlFor="re-enter password">Re-enter Password</label>
              <input className={styles.fieldInputs} type="password" placeholder="re-enter password" required />
            </div>
            <div className={styles.signUpButtonWrapper}>
              <button className={styles.signUpButton}>Create account</button>
            </div>
          </form>
        </div>

        <div className={styles.signupImageWrapper}>
          <img className={styles.signupImg} src="https://images.unsplash.com/photo-1730472528705-d91d6088b7a9?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  )
};