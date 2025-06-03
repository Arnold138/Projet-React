import Nav from "../../components/nav";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import '../../styles/Error.scss';
export default function Error() {
  return (
    
    <div className="error-page">
      <Nav /> 
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/" className="error-link">Retourner sur la page d'accueil</NavLink>
      <Footer />
    </div>
   

  );
}
