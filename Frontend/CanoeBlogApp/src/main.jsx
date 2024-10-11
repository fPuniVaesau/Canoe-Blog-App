import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Home from './Pages/Home.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    errorElement : <ErrorPage />,
    children : [
      {
        path: "/homepage",
        element : <Home/>
      },
      {
        path: "/login",
        element : <Login />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
