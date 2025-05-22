import { NavLink } from "react-router-dom";
import '../styles/Nav.scss';

export default function Nav() {
  return (
    <div className="navigation">
      <NavLink to="/" end>Accueil</NavLink>
      <NavLink to="/about">À propos</NavLink>
    </div>
  );
}