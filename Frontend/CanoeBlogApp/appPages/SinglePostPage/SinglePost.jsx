import { useEffect } from "react"
import { useParams } from "react-router-dom"
export default function SinglePost(){
  const parameters = useParams()
  useEffect(()=> {
    console.log(parameters);
  }, [])

  return (
    <div>
      <h1>Single Blog Post Page</h1>
    </div>
  )
}

