import backgroundimg from "../images/future-grid.png"

function background(){
    return(
        <div className="background" id="home">
            <span className="frontText">Hello</span>
            <img src={backgroundimg} alt ="backgroundImg"
            className="bgimg"
            />
        </div>
    )
}
export default background