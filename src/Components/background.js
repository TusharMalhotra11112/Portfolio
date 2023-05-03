import backgroundimg from "../images/future-grid.png"

function background(){
    return(
        <div className="background" id="home">
            <div className="landingText">
            <span className="frontText">Hi,I am Tushar.I code <br/>and build Web apps</span>
            </div>
            <img src={backgroundimg} alt ="backgroundImg"
            className="bgimg"
            />
        </div>
    )
}
export default background