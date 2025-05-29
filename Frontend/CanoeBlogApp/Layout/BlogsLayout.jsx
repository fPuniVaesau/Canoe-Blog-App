import { Outlet } from "react-router-dom"
import SearchBar from "../appComponents/SearchBar/SearchBar"

export default function BlogsLayout(){
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  )
}
