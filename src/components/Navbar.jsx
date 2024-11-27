import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <img src="../assets/logo.png" alt="" />
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
    </nav>
  );
}

export default Navbar;
