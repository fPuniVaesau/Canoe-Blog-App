import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SinglePost(){
  const [singlePost, setSinglePost] = useState("");
  const baseUrl = "http://localhost:8000"
  const blogPostEndPoint = "/api/blogs"
  const {id} = useParams()
  
  
  useEffect(()=> {
    const fetchSinglePostData = async () => {
      const response = await axios.get(`${baseUrl}${blogPostEndPoint}/${id}`)
      const blogPost = await response.data
      setSinglePost(blogPost)
    }
    
    fetchSinglePostData();
    console.log(id);
  }, [])

  return (
    <div>
      <div>
        <img src={`${baseUrl}/${singlePost.image}`} />
      </div>
      <div>
        <h1>{singlePost.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{__html: singlePost.content}}/>
     
    </div>
  );
}

