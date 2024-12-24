import { NavLink } from "react-router-dom"
import { API_KEY } from "../../data";
import { useEffect, useState } from "react";

export const Recommended=({categoryID})=>{

    const [data,setData]=useState([]);

    const fetchData=async ()=>{
            const url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&videoCategoryId=${categoryID}&key=${API_KEY}`
            const res=await fetch(url);
            const dat=await res.json();
            console.log(dat.items);
            setData(dat.items)
        }
    
        useEffect(()=>{
            fetchData();
        },[])

    return (
        <main className="recommended_container flex flex-col g8">
            {
                data?data.map((item,index)=>{
                    return (
                        <NavLink key={index} to={`/video/${item.snippet.categoryId}/${item.id}`} className="recommended_card flex g8">
                            <div className="img_container">
                                <img src={item.snippet.thumbnails.default.url} alt="" />
                            </div>
                            <div className="details">
                                <h3>{item.snippet.title}</h3>
                                <h4>{item.snippet.channelTitle}</h4>
                                <p>199K views</p>
                            </div>
                        </NavLink>
                    )
                }):""
            }
        </main>
    )
}