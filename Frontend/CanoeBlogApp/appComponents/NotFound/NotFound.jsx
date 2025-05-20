import { useNavigate } from "react-router-dom"

export default function NotFound(){

  const navigate = useNavigate();

  return (
    <div>
     <h1>404 | page not found</h1>
     <div>
      <button onClick={()=>{navigate("/")}}>go to homepage</button>
     </div>
    </div>
  )
}
