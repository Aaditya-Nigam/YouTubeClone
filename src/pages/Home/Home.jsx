import { useState } from "react"
import { SideBar } from "../../components/UI/SideBar/SideBar"
import "./Home.css"
import { Reel } from "../../components/UI/Reel/Reel"

export const Home=({sidebar})=>{

    const [category,setCategory]=useState(0);

    return (
        <main className="flex">
            <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
            <Reel category={category}/>
        </main>
    )
}