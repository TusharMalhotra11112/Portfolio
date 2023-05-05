import { useState as UseState, useEffect as UseEffect} from "react"
import left from "../images/left.svg"
import right from "../images/right.svg"
import data from "./projectData"

function project(){
    const n=data.length
    const [projectNo,setProjectNo] = UseState(0)
    UseEffect(()=>{
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
    },[projectNo])

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
                <img className="projectDisplay" src={data[projectNo].src} alt={data[projectNo].alt} />
                <div className="ProjectHeading">{data[projectNo].title}</div>
                <div className="projectDetail">
                    {data[projectNo].description}
                    <div className="projectAbout">
                        Status:<span>{data[projectNo].status}</span>
                    </div>
                </div>
            </div>
            <button className="rightButton" onClick={paneLeft}><img src={right} alt="right arrow"/></button>
        </div>
    )
}
export default project