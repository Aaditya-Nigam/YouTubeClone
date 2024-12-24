import "./Reel.css"
import { NavLink } from "react-router-dom"
import moment from "moment"
import {viewsConverter} from "../../../data"

export const ReelCard=({item})=>{
    
    return (
        <NavLink to={`/video/${item.snippet.categoryId}/${item.id}`} className="reel_card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{viewsConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} months ago</p>
        </NavLink>
    )
}