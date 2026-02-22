import Logo from "./logo";
import LogoFooter from "./LogoFooter";
import ls from "../assets/lucioSantibanez.svg"

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-bottom">
        <img src={ls} alt="Lucio Santibañez logo" className="logoFooter" />
        © {new Date().getFullYear()} 
      </div>
    </footer>
  );
}