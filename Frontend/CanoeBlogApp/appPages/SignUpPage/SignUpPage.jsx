import styles from './SignUpPage.module.css';
import { useState } from 'react';
import axios from 'axios';
import { use } from 'react';

export default function SignUpPage() {
  const newUserData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_check: '',
  };

  const [userData, setUserData] = useState(newUserData);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8000/api/register')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setUserData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_check: '',
    });
  };

  return (
    <>
      <div className={styles.signUpPageContainer}>
        <div className={styles.messageFormWrapper}>
          <div className={styles.signUpMessageWrapper}>
            <h2>Create new account.</h2>
            <p>Document your journey</p>
          </div>

          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            action='sumbit'
          >
            {/* first and last name wrapper */}
            <div className={styles.nameWrapper}>
              {/* input field for the firstname */}
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='first name'>First name</label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name='first_name'
                  value={userData.first_name}
                  className={styles.fieldInputs}
                  type='text'
                  placeholder='silver'
                  required
                />
              </div>
              {/* input field for the lastname */}
              <div className={styles.inputFieldWrappers}>
                <label htmlFor='last name'>Last name</label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name='last_name'
                  value={userData.last_name}
                  className={styles.fieldInputs}
                  type='text'
                  placeholder='surfer'
                  required
                />
              </div>
            </div>

            {/* email and password wrapper */}
            <div className={styles.inputFieldWrappers}>
              {/* input field for the email address */}
              <label htmlFor='email address'>Email address</label>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                name='email'
                value={userData.email}
                className={styles.fieldInputs}
                type='text'
                placeholder='emailaddress@example.com'
                required
              />
            </div>

            <div className={styles.inputFieldWrappers}>
              {/* input field for the password */}
              <label htmlFor='password'>Password</label>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                name='password'
                value={userData.password}
                className={styles.fieldInputs}
                type='password'
                placeholder='password'
                required
              />
            </div>
            <div className={styles.inputFieldWrappers}>
              <label htmlFor='re-enter password'>Re-enter Password</label>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                name='password_check'
                value={userData.password_check}
                className={styles.fieldInputs}
                type='password'
                placeholder='re-enter password'
                required
              />
            </div>
            <div className={styles.signUpButtonWrapper}>
              <button className={styles.signUpButton}>Create account</button>
            </div>
          </form>
        </div>

        <div className={styles.signupImageWrapper}>
          <img
            className={styles.signupImg}
            src='https://images.unsplash.com/photo-1654493403997-bc6364a78b6e?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
