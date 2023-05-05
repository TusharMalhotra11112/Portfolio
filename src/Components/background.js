import backgroundimg from "../images/future-grid.png"

function Background(){
    return(
        <div className="background" id="home">
            <div className="landingText">
            <span className="frontText">Hi, I am Tushar.<br/>I design and <br/>build Web apps </span>
            </div>
            <img src={backgroundimg} alt ="backgroundImg"
            className="bgimg"
            />
        </div>
    )
}
export default Background