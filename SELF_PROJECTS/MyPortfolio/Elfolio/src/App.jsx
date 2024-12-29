import { BrowserRouter } from "react-router-dom"
import {About, Contact,  Hero, Navbar, Tech, StarsCanvas, Work} from "./components";
import StarCanvas from "./components/canvas/Stars";
// import Connect from "./components/Connect";



const App = ()=>{

  return (
    <>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        
       {/* //about me section */}
       </div>
       <About />
       <Tech />
       <Work />
       {/* //3d starts section */}
       <div className="relative z-0">
       <Contact />
       <StarsCanvas /> 
       {/* <Connect /> */}
       </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
