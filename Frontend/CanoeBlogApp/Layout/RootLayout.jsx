import { Outlet } from "react-router-dom"
import NavigationBar from "../appComponents/NavigationBar/NavigationBar"


export default function RootLayout(){


  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}
