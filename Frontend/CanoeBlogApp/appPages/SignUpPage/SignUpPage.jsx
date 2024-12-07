import styles from "./SignUpPage.module.css"

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
                <label htmlFor="">First name</label>
                <input className={styles.fieldInputs} type="text" placeholder="Silver" required />
              </div>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor="">Last name</label>
                <input className={styles.fieldInputs} type="text" placeholder="Surfer" required />
              </div>
            </div>
          </form>
        </div>


      </div>
    </>
  )
};