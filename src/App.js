import './App.css';

import Background from "./Components/background";
import Header from './Components/header';
import About from './Components/about';
import Contact from './Components/contact';
import Footer from './Components/footer';
import Project from './Components/project';

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
