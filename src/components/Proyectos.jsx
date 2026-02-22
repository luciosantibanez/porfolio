import React from "react"

function Proyectos({ proyectos }) {
  return (
    
    <section className="proyectos-container">
      <h2 className="clientes">Clientes</h2>
    <div className="proyectos-grid">
    {proyectos.map((proyecto, index) => (
      <article 
  key={index} 
  className={`proyecto-card ${proyecto.size}`}
>
        
        <div className="proyecto-img">
          <img 
            src={proyecto.imagen}
            alt={proyecto.titulo}
          />
        </div>

        <div className="proyecto-footer">
  <h3 className="proyecto-title">
    {proyecto.titulo}
  </h3>

  <div className="proyecto-tech">
    {proyecto.tecnologias.map((tech, i) => (
      <span key={i}>{tech}</span>
    ))}
  </div>
</div>

      </article>
    ))}
  </div>
</section>
  )
}

export default Proyectos
