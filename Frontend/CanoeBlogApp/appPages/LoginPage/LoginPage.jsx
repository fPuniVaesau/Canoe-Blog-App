import styles from "./LoginPage.module.css";
import canoe3D from "../../canoeResources/3dCanoeV2.png";
import { useState } from "react";
import axios from "axios"

export default function LoginPage() {
 
  //setting our username and password
  const [c_username, setUsername] = useState("");
  const [c_password, setPassword] = useState("");

  //functions to handle inputs for the username and the passowrd
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(c_username);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(c_password);
  };

  const userData = {
    username: c_username,
    password: c_password,
  };

  const postLoginCredentials = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/authentication/login`,
        userData
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    //make a post request to the backend to login.
    postLoginCredentials();
    //reset user credentials
    setUsername("");
    setPassword("");
  };


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
              <p>
                Dont have an account yet!?{" "}
                <a className={styles.joinNowLink} href='#'>
                  Join now!
                </a>{" "}
                Not much to get started today.
              </p>
            </div>

            <form
              className={styles.formWrapper}
              action='submit'
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='username'>Username</label>
                <input
                  className={styles.fieldInputs}
                  onChange={(e) => {
                    handleUsernameChange(e);
                  }}
                  value={c_username}
                  type='text'
                  placeholder='username'
                  required
                />
              </div>
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='Password'>Password</label>
                <input
                  className={styles.fieldInputs}
                  onChange={(e) => {
                    handlePasswordChange(e);
                  }}
                  value={c_password}
                  type='password'
                  placeholder='password'
                  required
                />
              </div>

              <div className={styles.loginButtonWrapper}>
                <button 
                className={styles.loginButton}
                type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
