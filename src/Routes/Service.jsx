import Navbar from "../Components/Navbar";
import AboutImg from "../images/pic3.jpg";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import DinamicPart from "../Components/DinamicPart";
function Service(){
    return(
        <>
      
      <Navbar />
          <DinamicPart
          cName="hero-service"
          heroImg={AboutImg}
          title="Service"
          
          />
         <Trip />
         <Footer />
        </>
    )

}
export default Service;