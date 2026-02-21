import { useState, useEffect } from "react";

export default function Hero() {
  const palabras = ["Desarrollador", "Frontend", "Full Stack", "React"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % palabras.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">PORTFOLIO 2026</p>

        <h1 className="hero-title">
          Hola, <span>soy Lucio</span>
        </h1>

        <h2 className="hero-role">
          <span className="dynamic-word">
            {palabras[index]}
          </span>{" "}
          Web
        </h2>


        <div className="hero-buttons">
          <a href="#proyectos" className="btn-primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn-secondary">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}