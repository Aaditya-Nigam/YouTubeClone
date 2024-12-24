import "./Video.css"
import jack from "../../assets/jack.png"
import video from "../../assets/video.mp4"
import user from "../../assets/user_profile.jpg"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import { useParams } from "react-router-dom"
import {API_KEY, viewsConverter} from "../../data"
import { useEffect, useState } from "react"
import moment from "moment"
import { Recommended } from "./Recommended"


export const Video=()=>{

    const {categoryID,videoId}=useParams();
    console.log(categoryID)
    const [channelInfo,setChannelInfo]=useState(null);
    const [comments,setComments]=useState(null)

    const [videoInfo,setVideoInfo]=useState(null);

    const fetchData= async ()=>{
        const videoUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        // const videoUrl="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=4soq5nYeP7E&key=AIzaSyDXrJcajzSi-trqRQd6Wsc1Fj5vOBID90w";
        const res=await fetch(videoUrl);
        const data=await res.json();
        console.log(data.items[0]);
        setVideoInfo(()=>{
            // fetchChannelData();
            return data.items[0]
        });
    }

    const fetchChannelData=async ()=>{
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoInfo?videoInfo.snippet.channelId:""}&key=${API_KEY}`);
        const data=await res.json();
        setChannelInfo(data.items[0]);
        // console.log(channelInfo.statistics.subscriberCount);
    }

    const fetchComments=async ()=>{
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`);
        const data=await res.json();
        console.log(data.items);
        setComments(data.items)
    }
    
    useEffect(()=>{
        fetchData();
        fetchComments();
    },[videoId])

    useEffect(()=>{
        fetchChannelData();
    },[videoInfo])

    return (
        <main className="video_container grid">
            <div className="left">
                <div className="vid_container">
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="title">
                    <h2>{videoInfo?videoInfo.snippet.title:"Title here"}</h2>
                </div>
                <div className="channel_description flex justify-space-between align-center">
                    <div className="flex align-center g16">
                        <div>
                            <img src={channelInfo? channelInfo.snippet.thumbnails.default.url: ""} alt="" />
                        </div>
                        <div>
                            <h3 className="channelName">{videoInfo?videoInfo.snippet.channelTitle:"..."}</h3>
                            <p className="subscribers">{channelInfo?viewsConverter(channelInfo.statistics.subscriberCount):348785}</p>
                        </div>
                    </div>
                    <div>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="video_description">
                    {videoInfo?viewsConverter(videoInfo.statistics.viewCount):0} views &bull; {videoInfo?moment(videoInfo.snippet.publishedAt).fromNow():"00"}
                    <br />
                    <br />
                    <div>{videoInfo?videoInfo.snippet.description.slice(0,250)+"...":""}</div>
                    <br />
                </div>
                <hr />
                <div className="comments_section">
                    <h2>{videoInfo?viewsConverter(videoInfo.statistics.commentCount):0} Comments</h2>
                    <div className="comment_container">
                        {
                            comments?comments.map((comment,index)=>{
                                return (
                                    <div key={index} className="comment_card">
                                        <div>
                                            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className="comment_img"/>
                                        </div>
                                        <div className="flex flex-col g4">
                                            <h4 className="comment_writter">{comment.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(comment.snippet.topLevelComment.snippet.updatedAt).fromNow()}</span></h4>
                                            
                                            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                                            <div className="flex g8">
                                                <img src={like} alt="" />
                                                {/* <p>37</p> */}
                                                <img src={dislike} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }):""
                        }
                        
                    </div>
                </div>
            </div>
            <div className="right">
                <Recommended categoryID={categoryID}/>
            </div>
        </main>
    )
}