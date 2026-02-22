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

    <h3 className="proyecto-title">
      {proyecto.titulo}
    </h3>

    <p className="proyecto-desc">
      {proyecto.descripcion}
    </p>

    <div className="proyecto-tech">
      {proyecto.tecnologias.map((tech, i) => (
        <span key={i} className="tech-pill">
          #{tech}
        </span>
      ))}
    </div>

    <a 
      href={proyecto.link} 
      target="_blank" 
      rel="noreferrer"
      className="proyecto-link"
    >
      Ver proyecto →
    </a>

  </div>

</article>
      ))}
    </section>
  )
}

export default Proyectos
