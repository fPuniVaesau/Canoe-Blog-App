import styles from "./LoginPage.module.css";
import canoe3D from "../../canoeResources/3dCanoeV2.png";

export default function LoginPage() {
  return (
    <>
      <div className={styles.welcomeWrapper}>
        <div>
          <img className={styles.canoeImage} src={canoe3D} alt='canoe logo' />
        </div>

        <div className={styles.loginSignUpWrapper}>
          <div>
            <div className={styles.welcomeMessageWrapper}>
              <h2>welcome back</h2>
              <p>Let's enter your details!</p>
            </div>

            <form className={styles.formWrapper} action='submit'>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='emailAddress'>Email address</label>
                <input
                  className={styles.fieldInputs}
                  type='text'
                  name=''
                  id=''
                  placeholder='name@email.com'
                  required
                />
              </div>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='Password'>Password</label>
                <input
                  className={styles.fieldInputs}
                  type='password'
                  name=''
                  id=''
                  placeholder='Password'
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
