import { useEffect, useState } from "react"
import Logo from "./logo"

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
          <a href="https://wa.me/2613601185">
            <img src="\src\assets\icons8-whatsapp.svg" alt="whatsapp" />
          </a>
        </ul>
      </nav>
    </header>
  )
}