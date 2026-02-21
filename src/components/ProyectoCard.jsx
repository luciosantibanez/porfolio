import { proyectos } from "../data/proyectos";

export default function Proyectos() {
  return (
    <section id="proyectos">
      <h2>
        <span className="icon">{`</>`}</span> Proyectos
      </h2>

      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <article key={index} className="proyecto-card">
            
            <img src={proyecto.imagen} alt={proyecto.titulo} />

            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>

            <div>
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

              <a href={proyecto.link} target="_blank" rel="noreferrer">
                Ver sitio
              </a>

          </article>
        ))}
      </div>
    </section>
  );
}