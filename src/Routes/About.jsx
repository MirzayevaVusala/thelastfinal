import AboutUs from "../Components/AboutUs";
import Navbar from "../Components/Navbar";
import image2 from "../images/pic2.jpg"
import Footer from "../Components/Footer";
import DinamicPart from "../Components/DinamicPart";
function About(){
    return(
        <>
        <Navbar />
          <DinamicPart
          cName="hero-about"
          heroImg={image2}
          title="About"
          
          />
          <AboutUs />
             <Footer />
          </>
    )
    

}
export default About;