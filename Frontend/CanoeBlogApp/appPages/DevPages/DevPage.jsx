import { useState, useEffect } from "react"
import axios from "axios";
import BlogPostPreviewCard from "../../appComponents/BlogPost/BlogPostPreviewCard";
import Tiptap from "../../appComponents/RichTextEditor/TipTap";


export default function DevPages(){

  const baseURL = "http://127.0.0.1:8000/api/";
  const blogEndpoint = "blogs";

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

  useEffect(()=>{
    const getPosts = async () => {
      try {
        const response = await axios.get(`${baseURL}${blogEndpoint}`);
        setBlogData(response.data)
      } catch (error) {
        console.log(err)
      }
    };
    getPosts();
  }, [])
  
  return (
    <>
      <h1>Development Page</h1>
      {blogData.map(blog =>(
        <BlogPostPreviewCard title={blog.title} author={blog.author}/>
       
      ))}

      <Tiptap />
    </>
  );
}