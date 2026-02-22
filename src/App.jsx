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
      <div className="container">
      <Hero />
      <Experiencia />
      <Proyectos proyectos={proyectos} />
      </div>
      <SobreMi />
      
      <Footer />
      
    </>
  );
}

export default App;