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
          <h2>canoe.</h2>
          <p>welcome back!</p>

          <form className={styles.formWrapper} action=''>
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
    </>
  );
}
