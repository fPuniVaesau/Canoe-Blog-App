import { Outlet } from "react-router-dom"

export default function BlogsLayout(){
  return (
    <>
      <h1>Blogs Page</h1>
      <Outlet />
    </>
  )
}
