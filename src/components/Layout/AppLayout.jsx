import { Outlet } from "react-router-dom"
import { Navbar } from "../UI/Navbar/Navbar"

export const AppLayout=({sidebar, setSidebar})=>{
    return (
        <>
            <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
            <Outlet/>
        </>
    )
}