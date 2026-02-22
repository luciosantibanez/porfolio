import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiencia from "./components/Experiencia";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Footer from "./components/Footer";
import { proyectos } from "./data/proyectos";


function App() {
  return (
    <>
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