import { useState } from "react"
import axios from "axios"

export default function CreateBlogPost(){
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    return(
        <>
            <h2>Create blog here:</h2>
            <form action="">
                <label htmlFor="">author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </form>
        </>
    )
}