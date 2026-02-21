import React from "react"

function Proyectos({ proyectos }) {
  return (
    
    <section className="proyectos-container">
      <h2>
        <span className="icon">{`</>`}</span> Proyectos
      </h2>
      {proyectos.map((proyecto, index) => (
        <article key={index} className="proyecto-card">

          <div className="proyecto-img">
            <img 
              src={proyecto.imagen} 
              alt={proyecto.titulo} 
            />
          </div>

          <div className="proyecto-content">
            <div className="proyecto-header">
              <h3>{proyecto.titulo}</h3>

              <div className="proyecto-links">
                <a 
                  href={proyecto.link} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  ↗
                </a>
              </div>
            </div>

            <p>{proyecto.descripcion}</p>

            <div className="proyecto-tech">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>

        </article>
      ))}
    </section>
  )
}

export default Proyectos
