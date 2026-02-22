import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiencia from "./components/Experiencia";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Footer from "./components/Footer";
import { proyectos } from "./data/proyectos";
import whatsappIcon from "./assets/icons8-whatsapp.svg"; // ojo con la ruta

function App() {
  return (
    <>
      <a
        href="https://wa.me/2613601185"
        target="_blank"
        rel="noreferrer"
        className="wsp-float"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>

      <Navbar />
      <Hero />

      <div className="container">
        <Experiencia />
        <Proyectos proyectos={proyectos} />
        <SobreMi />
      </div>

      <Footer />
    </>
  );
}

export default App;