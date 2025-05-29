import { NavLink } from "react-router-dom";
import '../styles/Nav.scss';
import logo from '../assets/images/kasalogo.png';

export default function Nav() {
  return (
    <nav className="navigation">
      <img src={logo} alt="Kasa logo" className="logo" />
      <div className="links">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </div>
    </nav>
  );
}