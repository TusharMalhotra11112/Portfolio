import { useState,useEffect } from "react"
import left from "../images/left.svg"
import right from "../images/right.svg"
import data from "./projectData"

function Project(){
    const n=data.length
    const [projectNo,setProjectNo] = useState(0)
    useEffect(()=>{
        if(projectNo === 0){
            document.querySelector('.leftButton').style.opacity = "0.2"
        }
        else{
            document.querySelector('.leftButton').style.opacity = "0.7"
        }

        if(projectNo === n-1){
            document.querySelector('.rightButton').style.opacity = "0.2"
        }
        else{
            document.querySelector('.rightButton').style.opacity = "0.7"
        }
    },[projectNo,n])

    function paneLeft(){
        if(projectNo < n-1){
            document.querySelector(".projectTab").style.animation = "left 500ms"
            setTimeout(()=>{setProjectNo((prev)=>(prev+1))},250)
            setTimeout(()=>{document.querySelector(".projectTab").style.animation = "none"},500)
        }
    }

    function paneRight(){
        if(projectNo >0){
            document.querySelector(".projectTab").style.animation = "right 500ms"
            setTimeout(()=>{setProjectNo((prev)=>(prev-1))},250)
            setTimeout(()=>{document.querySelector(".projectTab").style.animation = "none"},500)
        }
    }

    return(
        <div className="project" id="project">
            <button className="leftButton" onClick={paneRight}> <img src={left} alt="left arrow"/> </button>
            <div className="projectTab">
                <img className="projectDisplay" src={data[projectNo].src} alt={data[projectNo].alt}  onClick={()=>{window.open(data[projectNo].url)}}/>
                <div className="ProjectHeading">{data[projectNo].title}</div>
                <div className="projectDetail">
                    {data[projectNo].description}
                    <div className="projectAbout">
                        Status: <span className="status">{data[projectNo].status}</span>
                    </div>
                </div>
            </div>
            <button className="rightButton" onClick={paneLeft}><img src={right} alt="right arrow"/></button>
        </div>
    )
}
export default Project