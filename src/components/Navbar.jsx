import { useEffect, useState } from "react"
import Logo from "./logo"
import whatsappIcon from "../assets/icons8-whatsapp.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Logo className='logo' />
        <ul>
          <div className="navbar-buttons">
          <a href="#proyectos" className="btn-primary">
            Trabajos
          </a>
          <a href="#contacto" className="btn-secondary">
            LinkedIn
          </a>
        </div>
          <a href="https://wa.me/2613601185">
            <img src={whatsappIcon} alt="whatsapp" />
          </a>
        </ul>
      </nav>
    </header>
  )
}