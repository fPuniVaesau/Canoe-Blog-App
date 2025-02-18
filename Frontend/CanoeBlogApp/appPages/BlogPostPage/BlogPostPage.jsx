import { useState } from "react"
import axios from "axios";
import styles from "./BlogPostPage.module.css"
import BlogPostPreviewCard from "../../appComponents/BlogPost/BlogPostPreviewCard"

export default function BlogPostPage(){

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