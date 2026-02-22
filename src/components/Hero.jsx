import { useState, useEffect } from "react";

export default function Hero() {
  const palabras = ["Desarrollador", "Frontend", "React"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const palabraActual = palabras[index];
    const velocidad = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(palabraActual.substring(0, text.length + 1));

        if (text === palabraActual) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setText(palabraActual.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % palabras.length);
        }
      }
    }, velocidad);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">PORTFOLIO 2026</p>

        <h1 className="hero-title">
          Hola, <span>soy Lucio</span>
        </h1>

        <h2 className="hero-role">
          <span className="dynamic-word">{text}</span> Web
          <span className="cursor">|</span>
        </h2>
      </div>
    </section>
  );
}