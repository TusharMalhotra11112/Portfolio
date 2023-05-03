import './App.css';

import Background from "./Components/background";
import Header from './Components/header';
import About from './Components/about';
import Contact from './Components/contact';
import Project from './Components/project';

function App() {
  window.addEventListener("scroll",function(){
    if(this.scrollY >= window.innerHeight){
      document.querySelector("nav").style.backgroundColor = "rgba(15,25,34,0.4)"
    }
    else{
      document.querySelector("nav").style.backgroundColor = "transparent"
    }
    
  })

  window.addEventListener("mousemove",shift)
  function shift(event){
    let img = document.querySelector(".bgimg")
    let midX = window.innerWidth/2
    let midY = window.innerHeight/2
    let currentX = event.clientX
    let currentY = event.clientY
    let x=(midX-currentX)/30
    let y=(midY-currentY)/20
    img.style.transform = "translateX("+x+ "px) translateY("+y+"px)"
  }

  return (
    <div className="main">    
      <Header />
      <Background />
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
