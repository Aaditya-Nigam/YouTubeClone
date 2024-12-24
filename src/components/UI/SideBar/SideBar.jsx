import home from "../../../assets/home.png"
import gaming from "../../../assets/game_icon.png"
import automobiles from "../../../assets/automobiles.png"
import sports from "../../../assets/sports.png"
import entertainment from "../../../assets/entertainment.png"
import technology from "../../../assets/tech.png"
import music from "../../../assets/music.png"
import blogs from "../../../assets/blogs.png"
import news from "../../../assets/news.png"

import jack from "../../../assets/jack.png"
import simon from "../../../assets/simon.png"
import tom from "../../../assets/tom.png"
import megan from "../../../assets/megan.png"
import cameron from "../../../assets/cameron.png"

import "./SideBar.css"

export const SideBar=({sidebar,category,setCategory})=>{
    return (
        <div className={`sidebar_container ${sidebar?"":"small_sidebar"}`}>
            <div className="upper">
                <div className={`upper_link_container flex align-center g16 ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt="home" />
                    <p>Home</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                    <img src={gaming} alt="home" />
                    <p>Gaming</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt="home" />
                    <p>Automobiles</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt="home" />
                    <p>Sports</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt="home" />
                    <p>Entertainment</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={technology} alt="home" />
                    <p>Technology</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt="home" />
                    <p>Music</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs} alt="home" />
                    <p>Blogs</p>
                </div>
                <div className={`upper_link_container flex align-center g16 ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt="home" />
                    <p>News</p>
                </div>
            </div>
            <div className="lower">
                <h3>Subscribed</h3>
                <div className="lower_link_container flex align-center g16">
                    <img src={jack} alt="jack" />
                    <p>News</p>
                </div>
                <div className="lower_link_container flex align-center g16">
                    <img src={simon} alt="simon" />
                    <p>News</p>
                </div>
                <div className="lower_link_container flex align-center g16">
                    <img src={tom} alt="tom" />
                    <p>News</p>
                </div>
                <div className="lower_link_container flex align-center g16">
                    <img src={megan} alt="megan" />
                    <p>News</p>
                </div>
                <div className="lower_link_container flex align-center g16">
                    <img src={cameron} alt="cameron" />
                    <p>News</p>
                </div>
            </div>
        </div>
    )
}