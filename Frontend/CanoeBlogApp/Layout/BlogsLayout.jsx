import { Outlet } from "react-router-dom"
import { BlogsLoader } from "../appPages/BlogPostPage/BlogPostPage"

export default function BlogsLayout(){
  return (
    <>
      <h1>Blogs Page</h1>
      <Outlet />
    </>
  )
}
