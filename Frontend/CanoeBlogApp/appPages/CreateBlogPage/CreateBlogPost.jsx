import { useState } from "react"
import axios from "axios"

export default function CreateBlogPost(){
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get("https://localhost:8000")
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
                <label htmlFor="">author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </form>
        </>
    )
}