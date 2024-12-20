import { useState } from "react"
import axios from "axios";
import styles from "./BlogPostPage.module.css"
import BlogPostPreviewCard from "../../appComponents/BlogPost/BlogPostPreviewCard"

export default function BlogPostPage(){

  return(
    <div className={styles.OutterBlogContainer}>
        <BlogPostPreviewCard />
    </div>
  )
}