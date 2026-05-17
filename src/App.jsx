import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"
function App() {
  useEffect(()=>{
    // Remove any leftover hash from the URL on load
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    //Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    //Refresh scroll triggers when the page is fully loaded
    ScrollTrigger.refresh();
    // cleanup scroll triggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }

  },[])
  return (
    <>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <CustomCursor />
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <ProgressBar />
    </>
  )
}
export default App