import { useState } from "react"
export default function Login(){

  const {username, setUsername} = useState();
  const { password, setPassword } = useState();

  


  return(
    <>
      <form>
        <input type="text" name="username" placeholder="username"/>
        <input type="Password" name="password" placeholder="password" />
        <button>login.</button>
      </form>
    </>
  )
}