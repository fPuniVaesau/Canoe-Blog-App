import styles from "./SignUpPage.module.css"

export default function SignUpPage(){
  return(
    <>
      <div className={styles.signUpMessageWrapper}>
        <div>
          <p>Document your journey</p>
          <h2>Create new account.</h2>
        </div>

        <form action="sumbit">
          <div className={styles.nameWrapper}>
            <div>
              <label htmlFor="">First name</label>
              <input type="text" placeholder="Silver" required />
            </div>
            <div>
              <label htmlFor="">Last name</label>
              <input type="text" placeholder="Surfer" required />
            </div>
          </div>
        </form>

      </div>


    </>
  )
};