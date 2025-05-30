import style from "./FeaturedPage.module.css";
import FeaturedBlogPost from "../../appComponents/FeaturedBlog/FeaturedBlogPost";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FeaturedPage(){

  const [FBlogData, setFBlogData] = useState('');
  

  useEffect(()=>{
    const endPoint = `http://localhost:8000/api/blogs/featured`
    const fetchData = async () => {
      const response = await axios.get(endPoint);
      const data = await response.data;
      setFBlogData(data);
      console.log(data);
    }
    fetchData();
  }, [])


  return (
    <>
      <h1>Featured Page</h1>
      <FeaturedBlogPost {...FBlogData} />
    </>
  )
}

