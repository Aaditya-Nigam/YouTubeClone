import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./components/UI/Navbar/Navbar"
import { Home } from "./pages/Home/Home"
import { Video } from "./pages/Video/Video"
import { AppLayout } from "./components/Layout/AppLayout"
import { useState } from "react"

export const App=()=>{
  const [sidebar,setSidebar]=useState(true);

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout sidebar={sidebar} setSidebar={setSidebar}/>,
      children:[
        {
          path:"/",
          element:<Home sidebar={sidebar}/>
        },
        {
          path:"/video/:categoryID/:videoId",
          element:<Video/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}