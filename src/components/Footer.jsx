import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Lucio Santibañez</h3>
          <p>Desarrollador Web</p>
        </div>

        <div className="footer-links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} <Logo className='logo' />
      </div>
    </footer>
  );
}