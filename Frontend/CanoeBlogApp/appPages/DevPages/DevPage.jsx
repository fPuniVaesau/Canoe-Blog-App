import { useState } from "react"
export default function DevPages(){

  const [c_username, setUsername] = useState("");
  const [c_password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(c_username);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(c_password);
  };

  const userData = {
    userData: c_username,
    c_password: c_password,
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData)
    setUsername("");
    setPassword("");
  };


  
  return (
    <>
      <form
        action='submit'
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {/* handle the username field */}
        <div>
          <label htmlFor=''>username</label>
          <input
            type='text'
            value={c_username}
            onChange={(e) => {
              handleUsernameChange(e);
            }}
          />
        </div>

        {/* handle the password field */}
        <div>
          <label htmlFor=''>password</label>
          <input
            type='text'
            value={c_password}
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
}