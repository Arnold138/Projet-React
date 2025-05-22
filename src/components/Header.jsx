import logo from '../assets/images/kasalogo.png';
import Nav from './nav';



export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Kasa logo" className="logo" />
        <Nav />
      </nav>
    </header>
  );
}