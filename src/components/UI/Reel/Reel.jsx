import { useEffect, useState } from "react"
import "./Reel.css"
import { ReelCard } from "./ReelCard"
import {API_KEY} from "../../../data"

export const Reel=({category})=>{

    const [data,setData]=useState([]);

    const fetchData=async ()=>{
        const url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        const res=await fetch(url);
        const dat=await res.json();
        console.log(dat.items);
        setData(dat.items)
    }

    useEffect(()=>{
        fetchData();
    },[category])

    return (
    <main className="reel_container grid">
        {
            data.map((item,index)=>{
                return <ReelCard item={item} key={index}/>
            })
        }
    </main>
    )
}