function Header(){
    function scrollToAbout(){
        document.getElementById("about").scrollIntoView({
            behavior:'smooth',
            block:'start',
        })
    } 
    function scrollToProject(){
        document.getElementById("project").scrollIntoView({
            behavior:'smooth',
            block:'start',
        })
    } 
    function scrollToContact(){
        document.getElementById("contact").scrollIntoView({
            behavior:'smooth',
            block:'start',
        })
    } 
    function scrollToHome(){
        document.getElementById("home").scrollIntoView({
            behavior:'smooth',
            block:'start',
        })
    } 
    return(
        <div className="header">
            <nav className="navbar">
                <span onClick={scrollToHome} className="myName">Tushar <span className="myName">Malhotra</span></span>
                <ul>
                    <li onClick={scrollToAbout}>About</li>
                    <li onClick={scrollToProject}>Projects</li>
                    <li onClick={scrollToContact}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header