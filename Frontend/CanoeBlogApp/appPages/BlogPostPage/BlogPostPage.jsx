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
        <div>
          {blogPosts.map(post => (<div>
            <BlogPostPreviewCard title={post.title} summary={post.summary} createdAt={post.createdAt} author={"Filo Vaesau"} image={post.image}/>
            {/* <h2>{post.title}</h2>
            <h3>{post.summary}</h3>
            <p>{post.content}</p> */}
          </div>))}
        </div>
      

    </div>
  )
}
