import { useState, useEffect } from "react"
import axios from "axios";


export default function DevPages(){
  //setting our username and password
  const [c_username, setUsername] = useState("");
  const [c_password, setPassword] = useState("");

  //functions to handle inputs for the username and the passowrd
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(c_username);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(c_password);
  };
  const userData = {
    username: c_username,
    password: c_password,
  };
  const postLoginCredentials = async () => {
    try{
      const response = await axios.post(
        `http://127.0.0.1:8000/api/authentication/login`,
        userData
      );
      console.log(response.data);
    }
    catch(err){
      console.log(err)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData)

    postLoginCredentials();

    setUsername("");
    setPassword("");
  };
  const testForm = (
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
      <button type='submit'>submit</button>
    </form>
  );

  const [blogData, setBlogData] = useState([])

  async function getBlogs() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/blogs");
      console.error(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getBlogs();
  }, [])
  
  return (
    <>
      <h1>Development Page</h1>


    </>
  );
}