import { useState, useEffect } from "react"
import axios from "axios";
import styles from "./BlogPostPage.module.css"
import BlogPostPreviewCard from "../../appComponents/BlogPost/BlogPostPreviewCard"
// import {useLoaderData} from "react-router-dom"

export default function BlogPostPage(){
  const [blogPosts, setBlogPosts] = useState([]);

  //use axios to fetch data that we filter.
    const blogsURL = 'http://localhost:8000/api/blogs';
  
    useEffect(()=>{

      const fetchBlogData = async() => {
        const response = await axios.get(blogsURL);
        const blogData = await response.data
        console.log(blogData);
        setBlogPosts(blogData);
      }
      fetchBlogData()
  
    }, [])

  return(
    <div className={styles.OutterBlogContainer}>
      {
        blogPosts.length > 0 && blogPosts.map(post => (
        <BlogPostPreviewCard {...post}/>
        ))
      }
    </div>
  )
}
