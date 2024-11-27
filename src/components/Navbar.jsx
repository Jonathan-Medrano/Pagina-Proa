import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import logoProa from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div>
          <Link to="/" className="nav-item">
            <img
              src={logoProa}
              alt="Logo Escuela Proa Técnica San Francisco"
              className="nav-img"
            />
          </Link>
        </div>
        <div className="links">
          <Link to="/" className="nav-item">
            Inicio
          </Link>
          <Link to="/about" className="nav-item">
            Nosotros
          </Link>
          <Link to="/pathway" className="nav-item">
            Trayectoria
          </Link>
          <Link to="/news" className="nav-item">
            Noticias
          </Link>
          <Link to="/courses" className="nav-item">
            Cursos
          </Link>
        </div>
        <div className="nav-account">
          <FontAwesomeIcon className="account-ico" icon={faUser} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
