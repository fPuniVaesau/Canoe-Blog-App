import { useState, useEffect } from "react"
import axios from "axios";
import styles from "./BlogPostPage.module.css"
import BlogPostPreviewCard from "../../appComponents/BlogPost/BlogPostPreviewCard"
import {useLoaderData} from "react-router-dom"

export default function BlogPostPage(){
  const [allBlogs, setAllBlogs] = useState([]);

  //use axios to fetch data that we filter.
    const blogsURL = 'http://localhost:8000/api/blogs';
  
    useEffect(async ()=>{
      const response = await axios.get(blogsURL);
      const data = await response.json();
      console.log(data);
      setAllBlogs(data);
    }, [])

  return(
    <div className={styles.OutterBlogContainer}>
        <BlogPostPreviewCard
          imgUrl={"https://images.unsplash.com/photo-1726004044534-e10fc99783f4?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          author={"Filo Vaesau"}
        />
         <BlogPostPreviewCard
          imgUrl={"https://images.unsplash.com/photo-1726004044534-e10fc99783f4?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          author={"Filo Vaesau"}
        />
         <BlogPostPreviewCard
          imgUrl={"https://images.unsplash.com/photo-1726004044534-e10fc99783f4?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          author={"Filo Vaesau"}
        />
         <BlogPostPreviewCard
          imgUrl={"https://images.unsplash.com/photo-1726004044534-e10fc99783f4?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          author={"Filo Vaesau"}
        />

    </div>
  )
}

export const BlogsLoader = async () => {
  const blogData = await fetch('http://127.0.0.1:8000/api/blogs');
  const BlogData = await blogData.json();
  return BlogData;
}