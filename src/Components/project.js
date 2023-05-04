import left from "../images/left.svg"
import right from "../images/right.svg"

function project(){
    return(
        <div className="project" id="project">
            <button className="leftButton"> <img src={left} alt="left arrow"/> </button>
            <div className="projectTab">
                <div className="projectDisplay"></div>
                <div className="ProjectHeading">Title</div>
                <div className="projectDetail"
                    >about the project
                    <div className="projectAbout">
                        Status:completed
                    </div>
                </div>
            </div>
            <button className="rightButton"><img src={right} alt="right arrow"/></button>
        </div>
    )
}
export default project