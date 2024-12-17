import styles from "./CreateBlogPost.module.css"
import { useState } from "react"
import axios from "axios"

export default function CreateBlogPost(){
    const newBlogData = {
    author: "",
    title: "",
    content: ""
    }
 
    const [blogData, setBlogData] = useState(newBlogData)

    const handleChange = (e) => {
        setBlogData({...blogData, [e.target.name]: e.target.value})
        console.log(blogData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get("https://127.0.0.1:8000/api/blogs/newPost")
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })

    }

    return(
        <>
            <h2>Create blog here:</h2>
            <form onSubmit={handleSubmit} action="submit">
               <div>
                <label htmlFor="">author</label>
                <input
                className={styles.inputStyling}
                onChange={(e)=>{handleChange(e)}}
                name="author"
                value={blogData.value}
                type="text" />
               </div>

                <div className={styles.BlogContentContainer}>
                    <div className={styles.titleWrapper}>
                        <label htmlFor="">title</label>
                        <input
                        className={styles.inputStyling}
                        onChange={(e)=>{handleChange(e)}}
                        name="title"
                        value={blogData.title}
                        type="text" />
                    </div>
                    <div className={styles.textAreaWrapper}>
                        <label htmlFor="">content</label>
                        <textarea 
                        onChange={(e)=>{handleChange(e)}}
                        value={blogData.content}
                        name="content"
                        placeholder="Let's get started..."
                        id=""
                        className={styles.textAreaStyling}
                        >
                        </textarea>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <button onClick={(e)=>{handleSubmit(e)}}>post</button>
                </div>
            </form>
        </>
    )
}